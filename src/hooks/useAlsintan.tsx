import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/components/ui/use-toast';

export interface AlsintanCategory {
  id: string;
  name: string;
  description: string;
  icon_name: string;
  created_at: string;
}

export interface AlsintanEquipment {
  id: string;
  provider_id: string;
  category_id: string;
  name: string;
  description: string;
  price_per_day: number;
  location: string;
  availability_status: 'available' | 'rented' | 'maintenance';
  image_urls: string[];
  specifications: any;
  created_at: string;
  updated_at: string;
  category?: AlsintanCategory;
  provider?: {
    full_name: string;
    phone: string;
    location: string;
    organization: string;
  };
}

export const useAlsintan = () => {
  const [categories, setCategories] = useState<AlsintanCategory[]>([]);
  const [equipment, setEquipment] = useState<AlsintanEquipment[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const fetchCategories = async () => {
    try {
      const { data, error } = await supabase
        .from('alsintan_categories')
        .select('*')
        .order('name');

      if (error) throw error;
      setCategories(data || []);
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const fetchEquipment = async (categoryId?: string) => {
    try {
      let query = supabase
        .from('alsintan_equipment')
        .select(`
          *,
          category:alsintan_categories(*),
          provider:profiles!alsintan_equipment_provider_id_fkey(
            full_name,
            phone,
            location,
            organization
          )
        `)
        .eq('availability_status', 'available')
        .order('created_at', { ascending: false });

      if (categoryId) {
        query = query.eq('category_id', categoryId);
      }

      const { data, error } = await query;

      if (error) throw error;
      setEquipment((data || []) as AlsintanEquipment[]);
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchEquipment();
  }, []);

  return {
    categories,
    equipment,
    loading,
    fetchEquipment,
    refetch: () => {
      fetchCategories();
      fetchEquipment();
    }
  };
};