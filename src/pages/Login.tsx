import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Checkbox } from '@/components/ui/checkbox';
import Navigation from '@/components/Navigation';
import { Eye, EyeOff, Mail, Lock, User, Phone, MapPin, Building } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState('petani');
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    phone: '',
    location: '',
    organization: ''
  });

  const { signIn, signUp, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    const { error } = await signIn(formData.email, formData.password);
    
    if (!error) {
      navigate('/');
    }
    setLoading(false);
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert('Password tidak sama!');
      return;
    }

    if (formData.password.length < 6) {
      alert('Password minimal 6 karakter!');
      return;
    }

    setLoading(true);
    
    const userData = {
      full_name: `${formData.firstName} ${formData.lastName}`.trim(),
      user_type: userType,
      phone: formData.phone,
      location: formData.location,
      organization: userType === 'penyedia' ? formData.organization : null
    };

    const { error } = await signUp(formData.email, formData.password, userData);
    
    if (!error) {
      // Don't navigate immediately since email verification may be required
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-card">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Selamat Datang</h1>
            <p className="text-muted-foreground">
              Masuk ke akun TaniRent Anda untuk mulai menyewa alsintan
            </p>
          </div>

          <Tabs defaultValue="login" className="space-y-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Masuk</TabsTrigger>
              <TabsTrigger value="register">Daftar</TabsTrigger>
            </TabsList>

            {/* Login Form */}
            <TabsContent value="login">
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle>Masuk ke Akun</CardTitle>
                  <CardDescription>
                    Gunakan email dan password untuk masuk
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="nama@email.com"
                          className="pl-10"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input 
                          id="password" 
                          type={showPassword ? "text" : "password"}
                          placeholder="Masukkan password"
                          className="pl-10 pr-10"
                          value={formData.password}
                          onChange={(e) => handleInputChange('password', e.target.value)}
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2"
                        >
                          {showPassword ? (
                            <EyeOff className="w-4 h-4 text-muted-foreground" />
                          ) : (
                            <Eye className="w-4 h-4 text-muted-foreground" />
                          )}
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox id="remember" />
                      <Label htmlFor="remember" className="text-sm">
                        Ingat saya
                      </Label>
                    </div>

                    <Button type="submit" className="w-full" size="lg" disabled={loading}>
                      {loading ? 'Masuk...' : 'Masuk'}
                    </Button>

                    <div className="text-center">
                      <Link 
                        to="/forgot-password" 
                        className="text-sm text-primary hover:underline"
                      >
                        Lupa password?
                      </Link>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Register Form */}
            <TabsContent value="register">
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle>Daftar Akun Baru</CardTitle>
                  <CardDescription>
                    Pilih jenis akun dan lengkapi data diri
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleRegister} className="space-y-4">
                    {/* User Type Selection */}
                    <div className="space-y-2">
                      <Label>Jenis Akun</Label>
                      <div className="grid grid-cols-2 gap-2">
                        <Button
                          type="button"
                          variant={userType === 'petani' ? 'default' : 'outline'}
                          onClick={() => setUserType('petani')}
                          className="h-auto p-4 flex flex-col items-center space-y-2"
                        >
                          <User className="w-6 h-6" />
                          <span>Petani/Penyewa</span>
                        </Button>
                        <Button
                          type="button"
                          variant={userType === 'penyedia' ? 'default' : 'outline'}
                          onClick={() => setUserType('penyedia')}
                          className="h-auto p-4 flex flex-col items-center space-y-2"
                        >
                          <Building className="w-6 h-6" />
                          <span>Penyedia Alsintan</span>
                        </Button>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">Nama Depan</Label>
                        <Input 
                          id="firstName" 
                          placeholder="Nama depan" 
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Nama Belakang</Label>
                        <Input 
                          id="lastName" 
                          placeholder="Nama belakang" 
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="registerEmail">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input 
                          id="registerEmail" 
                          type="email" 
                          placeholder="nama@email.com"
                          className="pl-10"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Nomor Telepon</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input 
                          id="phone" 
                          type="tel" 
                          placeholder="08123456789"
                          className="pl-10"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="location">Lokasi</Label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input 
                          id="location" 
                          placeholder="Kota, Provinsi"
                          className="pl-10"
                          value={formData.location}
                          onChange={(e) => handleInputChange('location', e.target.value)}
                        />
                      </div>
                    </div>

                    {userType === 'penyedia' && (
                      <div className="space-y-2">
                        <Label htmlFor="organization">Nama Organisasi/Perusahaan</Label>
                        <div className="relative">
                          <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <Input 
                            id="organization" 
                            placeholder="Kelompok Tani / CV / PT"
                            className="pl-10"
                            value={formData.organization}
                            onChange={(e) => handleInputChange('organization', e.target.value)}
                          />
                        </div>
                      </div>
                    )}

                    <div className="space-y-2">
                      <Label htmlFor="registerPassword">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input 
                          id="registerPassword" 
                          type={showPassword ? "text" : "password"}
                          placeholder="Minimal 6 karakter"
                          className="pl-10 pr-10"
                          value={formData.password}
                          onChange={(e) => handleInputChange('password', e.target.value)}
                          required
                          minLength={6}
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2"
                        >
                          {showPassword ? (
                            <EyeOff className="w-4 h-4 text-muted-foreground" />
                          ) : (
                            <Eye className="w-4 h-4 text-muted-foreground" />
                          )}
                        </button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Konfirmasi Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input 
                          id="confirmPassword" 
                          type="password"
                          placeholder="Ulangi password"
                          className="pl-10"
                          value={formData.confirmPassword}
                          onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="flex items-start space-x-2">
                      <Checkbox id="terms" className="mt-1" required />
                      <Label htmlFor="terms" className="text-sm leading-relaxed">
                        Saya setuju dengan{' '}
                        <Link to="/terms" className="text-primary hover:underline">
                          Syarat & Ketentuan
                        </Link>{' '}
                        dan{' '}
                        <Link to="/privacy" className="text-primary hover:underline">
                          Kebijakan Privasi
                        </Link>
                      </Label>
                    </div>

                    <Button type="submit" className="w-full" size="lg" disabled={loading}>
                      {loading ? 'Mendaftar...' : 'Daftar Sekarang'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              Butuh bantuan?{' '}
              <Link to="/contact" className="text-primary hover:underline">
                Hubungi customer service kami
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;