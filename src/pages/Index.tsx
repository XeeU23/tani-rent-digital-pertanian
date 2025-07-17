import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WeatherWidget from '@/components/WeatherWidget';
import AlsintanCategories from '@/components/AlsintanCategories';
import { Search, MapPin, Clock, Star, Users, TrendingUp, Shield, Headphones, Truck, Wheat, Droplets } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-farming.jpg';

const Index = () => {
  const features = [
    {
      icon: Search,
      title: 'Mudah Dicari',
      description: 'Temukan alsintan terdekat dengan fitur pencarian canggih'
    },
    {
      icon: MapPin,
      title: 'Lokasi Terdekat',
      description: 'GPS tracking untuk menemukan alsintan di sekitar Anda'
    },
    {
      icon: Clock,
      title: 'Booking Cepat',
      description: 'Proses penyewaan hanya dalam hitungan menit'
    },
    {
      icon: Shield,
      title: 'Terpercaya',
      description: 'Semua alsintan telah diverifikasi dan diasuransikan'
    }
  ];

  const stats = [
    { number: '1000+', label: 'Alsintan Tersedia' },
    { number: '500+', label: 'Petani Terdaftar' },
    { number: '200+', label: 'Penyedia Alsintan' },
    { number: '98%', label: 'Tingkat Kepuasan' }
  ];

  const testimonials = [
    {
      name: 'Budi Santoso',
      role: 'Petani Padi, Karawang',
      rating: 5,
      text: 'TaniRent sangat membantu! Saya bisa menyewa combine harvester dengan mudah dan harga terjangkau.'
    },
    {
      name: 'Sari Dewi',
      role: 'Kelompok Tani Maju',
      rating: 5,
      text: 'Platform yang user-friendly dan customer service yang responsif. Highly recommended!'
    },
    {
      name: 'Ahmad Fauzi',
      role: 'Pemilik Alsintan',
      rating: 5,
      text: 'Sebagai penyedia, TaniRent membantu saya mengelola alsintan dan meningkatkan pendapatan.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-95"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30">
              Platform Sewa Alsintan #1 di Indonesia
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Sewa Alsintan
              <span className="block text-primary-glow">Cepat & Tepat</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Hubungkan petani dengan penyedia alat pertanian modern. Tingkatkan produktivitas 
              dengan teknologi terdepan dan harga terjangkau.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/catalog">
                  <Search className="w-5 h-5" />
                  Cari Alsintan Sekarang
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20"
                asChild
              >
                <Link to="/register">
                  Daftar Sebagai Penyedia
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Weather Widget & Quick Search */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <WeatherWidget />
            </div>
            <div>
              <Card className="bg-gradient-card shadow-card">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Pencarian Cepat</h3>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <Link to="/catalog?category=traktor-roda-4">
                        <Truck className="w-4 h-4" />
                        Traktor Roda 4
                      </Link>
                    </Button>
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <Link to="/catalog?category=combine-harvester">
                        <Wheat className="w-4 h-4" />
                        Combine Harvester
                      </Link>
                    </Button>
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <Link to="/catalog?category=pompa-air">
                        <Droplets className="w-4 h-4" />
                        Pompa Air
                      </Link>
                    </Button>
                  </div>
                  
                  <div className="mt-6 p-4 bg-accent/30 rounded-lg">
                    <h4 className="font-medium text-accent-foreground mb-2">Tips Hari Ini</h4>
                    <p className="text-sm text-accent-foreground/80">
                      Cuaca cerah cocok untuk menggunakan traktor untuk pengolahan tanah. 
                      Manfaatkan kondisi ini untuk persiapan tanam berikutnya.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <AlsintanCategories />

      {/* Features Section */}
      <section className="py-16 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Mengapa Pilih TaniRent?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Kami berkomitmen memberikan layanan terbaik untuk kemajuan pertanian Indonesia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Kata Mereka Tentang TaniRent</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Testimonial dari petani dan penyedia alsintan yang telah bergabung dengan kami
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Siap Meningkatkan Produktivitas Pertanian?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Bergabunglah dengan ribuan petani dan penyedia alsintan di seluruh Indonesia
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              asChild
            >
              <Link to="/register">
                <Users className="w-5 h-5" />
                Daftar Sekarang
              </Link>
            </Button>
            <Button 
              variant="ghost" 
              size="lg" 
              className="text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10"
              asChild
            >
              <Link to="/contact">
                <Headphones className="w-5 h-5" />
                Hubungi Kami
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
