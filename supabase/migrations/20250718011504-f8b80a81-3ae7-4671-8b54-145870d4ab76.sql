-- Create user profiles table
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT,
  phone TEXT,
  location TEXT,
  user_type TEXT CHECK (user_type IN ('petani', 'penyedia')),
  organization TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(user_id)
);

-- Create alsintan categories table
CREATE TABLE public.alsintan_categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  icon_name TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create alsintan equipment table
CREATE TABLE public.alsintan_equipment (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  provider_id UUID NOT NULL REFERENCES public.profiles(user_id) ON DELETE CASCADE,
  category_id UUID NOT NULL REFERENCES public.alsintan_categories(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT,
  price_per_day DECIMAL(10,2) NOT NULL,
  location TEXT NOT NULL,
  availability_status TEXT CHECK (availability_status IN ('available', 'rented', 'maintenance')) DEFAULT 'available',
  image_urls TEXT[],
  specifications JSONB,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create bookings table
CREATE TABLE public.bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  renter_id UUID NOT NULL REFERENCES public.profiles(user_id) ON DELETE CASCADE,
  equipment_id UUID NOT NULL REFERENCES public.alsintan_equipment(id) ON DELETE CASCADE,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  total_days INTEGER NOT NULL,
  total_price DECIMAL(10,2) NOT NULL,
  status TEXT CHECK (status IN ('pending', 'approved', 'active', 'completed', 'cancelled')) DEFAULT 'pending',
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.alsintan_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.alsintan_equipment ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for profiles
CREATE POLICY "Users can view all profiles" ON public.profiles FOR SELECT USING (true);
CREATE POLICY "Users can update their own profile" ON public.profiles FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can insert their own profile" ON public.profiles FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Create RLS policies for alsintan_categories (public read)
CREATE POLICY "Anyone can view categories" ON public.alsintan_categories FOR SELECT USING (true);

-- Create RLS policies for alsintan_equipment
CREATE POLICY "Anyone can view equipment" ON public.alsintan_equipment FOR SELECT USING (true);
CREATE POLICY "Providers can manage their equipment" ON public.alsintan_equipment FOR ALL USING (auth.uid() = provider_id);

-- Create RLS policies for bookings
CREATE POLICY "Users can view their bookings as renter" ON public.bookings FOR SELECT USING (auth.uid() = renter_id);
CREATE POLICY "Equipment providers can view bookings for their equipment" ON public.bookings FOR SELECT USING (
  auth.uid() IN (
    SELECT provider_id FROM public.alsintan_equipment WHERE id = equipment_id
  )
);
CREATE POLICY "Users can create bookings" ON public.bookings FOR INSERT WITH CHECK (auth.uid() = renter_id);
CREATE POLICY "Users can update their bookings" ON public.bookings FOR UPDATE USING (auth.uid() = renter_id);
CREATE POLICY "Equipment providers can update booking status" ON public.bookings FOR UPDATE USING (
  auth.uid() IN (
    SELECT provider_id FROM public.alsintan_equipment WHERE id = equipment_id
  )
);

-- Create function to automatically create profile on user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (user_id, full_name, user_type)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'full_name', ''),
    COALESCE(NEW.raw_user_meta_data->>'user_type', 'petani')
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for new user profile creation
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON public.profiles FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_alsintan_equipment_updated_at BEFORE UPDATE ON public.alsintan_equipment FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_bookings_updated_at BEFORE UPDATE ON public.bookings FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Insert default categories
INSERT INTO public.alsintan_categories (name, description, icon_name) VALUES
('Traktor', 'Mesin pengolah tanah dan transportasi pertanian', 'Tractor'),
('Mesin Panen', 'Alat untuk memanen berbagai jenis tanaman', 'Combine'),
('Pompa Air', 'Sistem irigasi dan pengairan lahan', 'Droplets'),
('Sprayer', 'Alat penyemprotan pestisida dan pupuk', 'Spray'),
('Bajak', 'Alat pengolahan tanah dan persiapan lahan', 'Truck'),
('Mesin Perontok', 'Alat pemisahan gabah dari batang padi', 'Zap');