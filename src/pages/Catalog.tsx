import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Search, Filter, MapPin, Star, Clock, Fuel, Users, Truck, Wheat, Droplets, Wrench, Sprout, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Catalog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [priceRange, setPriceRange] = useState('all');

  const categories = [
    { id: 'all', name: 'Semua Kategori', icon: Filter },
    { id: 'combine-harvester', name: 'Combine Harvester', icon: Wheat },
    { id: 'traktor-roda-4', name: 'Traktor Roda 4', icon: Truck },
    { id: 'traktor-roda-2', name: 'Traktor Roda 2', icon: Truck },
    { id: 'transplanter', name: 'Transplanter', icon: Sprout },
    { id: 'rotavator', name: 'Rotavator', icon: Wrench },
    { id: 'power-thresher', name: 'Power Thresher', icon: Zap },
    { id: 'pompa-air', name: 'Pompa Air', icon: Droplets }
  ];

  const mockAlsintan = [
    {
      id: 1,
      name: 'Combine Harvester Kubota DC-105G',
      category: 'combine-harvester',
      location: 'Karawang, Jawa Barat',
      price: 750000,
      unit: 'hari',
      rating: 4.8,
      reviews: 24,
      availability: 'Tersedia',
      owner: 'Kelompok Tani Maju',
      features: ['Kapasitas 1 Ha/jam', 'Bahan Bakar Solar', 'Operator Tersedia'],
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      name: 'Traktor Roda 4 Kubota M704',
      category: 'traktor-roda-4',
      location: 'Subang, Jawa Barat',
      price: 450000,
      unit: 'hari',
      rating: 4.9,
      reviews: 31,
      availability: 'Tersedia',
      owner: 'PT Alsintan Sejahtera',
      features: ['70 HP', 'Transmisi 4WD', 'Kondisi Prima'],
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=300&fit=crop'
    },
    {
      id: 3,
      name: 'Transplanter Yanmar VP-4',
      category: 'transplanter',
      location: 'Bekasi, Jawa Barat',
      price: 300000,
      unit: 'hari',
      rating: 4.7,
      reviews: 18,
      availability: 'Tersedia',
      owner: 'Poktan Sumber Berkah',
      features: ['4 Baris Tanam', 'Bibit 15-25 Hari', 'Efisiensi Tinggi'],
      image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&h=300&fit=crop'
    },
    {
      id: 4,
      name: 'Traktor Roda 2 Quick G1000',
      category: 'traktor-roda-2',
      location: 'Tangerang, Banten',
      price: 200000,
      unit: 'hari',
      rating: 4.6,
      reviews: 15,
      availability: 'Disewa',
      owner: 'Budi Tani Mandiri',
      features: ['16 HP', 'Roda Besi', 'Mudah Dioperasikan'],
      image: 'https://images.unsplash.com/photo-1527010154936-abf6ba7da497?w=400&h=300&fit=crop'
    },
    {
      id: 5,
      name: 'Power Thresher Kubota TH-35',
      category: 'power-thresher',
      location: 'Indramayu, Jawa Barat',
      price: 250000,
      unit: 'hari',
      rating: 4.8,
      reviews: 22,
      availability: 'Tersedia',
      owner: 'Gapoktan Mandiri',
      features: ['Kapasitas 800 kg/jam', 'Mesin Honda', 'Perontok Bersih'],
      image: 'https://images.unsplash.com/photo-1605116394095-89e6a1e1ecde?w=400&h=300&fit=crop'
    },
    {
      id: 6,
      name: 'Pompa Air Centrifugal 6 inch',
      category: 'pompa-air',
      location: 'Cirebon, Jawa Barat',
      price: 100000,
      unit: 'hari',
      rating: 4.5,
      reviews: 12,
      availability: 'Tersedia',
      owner: 'CV Irigasi Nusantara',
      features: ['Debit 120 L/detik', 'Bensin 4 Tak', 'Mudah Dipindah'],
      image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=400&h=300&fit=crop'
    }
  ];

  const filteredAlsintan = mockAlsintan.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header Section */}
      <section className="py-12 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">Katalog Alsintan</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Temukan dan sewa alat pertanian modern sesuai kebutuhan lahan Anda
            </p>
          </div>

          {/* Search and Filter Section */}
          <div className="bg-card rounded-lg shadow-card p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Cari alsintan atau lokasi..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Kategori" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger>
                  <SelectValue placeholder="Lokasi" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Semua Lokasi</SelectItem>
                  <SelectItem value="jakarta">Jakarta</SelectItem>
                  <SelectItem value="jabar">Jawa Barat</SelectItem>
                  <SelectItem value="banten">Banten</SelectItem>
                  <SelectItem value="jateng">Jawa Tengah</SelectItem>
                </SelectContent>
              </Select>

              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger>
                  <SelectValue placeholder="Rentang Harga" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Semua Harga</SelectItem>
                  <SelectItem value="0-200">&lt; Rp 200K</SelectItem>
                  <SelectItem value="200-500">Rp 200K - 500K</SelectItem>
                  <SelectItem value="500-1000">Rp 500K - 1M</SelectItem>
                  <SelectItem value="1000+">&gt; Rp 1M</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-foreground">
              Ditemukan {filteredAlsintan.length} alsintan
            </h2>
            <Select defaultValue="recommended">
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recommended">Direkomendasikan</SelectItem>
                <SelectItem value="price-low">Harga Terendah</SelectItem>
                <SelectItem value="price-high">Harga Tertinggi</SelectItem>
                <SelectItem value="rating">Rating Tertinggi</SelectItem>
                <SelectItem value="newest">Terbaru</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAlsintan.map((alsintan) => (
              <Card key={alsintan.id} className="group hover:shadow-elegant transition-all duration-300 hover:scale-105 overflow-hidden">
                <div className="relative">
                  <img 
                    src={alsintan.image} 
                    alt={alsintan.name}
                    className="w-full h-48 object-cover"
                  />
                  <Badge 
                    className={`absolute top-3 right-3 ${
                      alsintan.availability === 'Tersedia' 
                        ? 'bg-green-500 hover:bg-green-600' 
                        : 'bg-red-500 hover:bg-red-600'
                    }`}
                  >
                    {alsintan.availability}
                  </Badge>
                </div>
                
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg line-clamp-2">{alsintan.name}</CardTitle>
                  <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{alsintan.location}</span>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{alsintan.rating}</span>
                        <span className="text-sm text-muted-foreground">({alsintan.reviews})</span>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {alsintan.owner}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {alsintan.features.slice(0, 2).map((feature, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                      {alsintan.features.length > 2 && (
                        <Badge variant="secondary" className="text-xs">
                          +{alsintan.features.length - 2} lagi
                        </Badge>
                      )}
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t">
                      <div>
                        <div className="text-2xl font-bold text-primary">
                          Rp {alsintan.price.toLocaleString('id-ID')}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          per {alsintan.unit}
                        </div>
                      </div>
                      <Button 
                        className="group-hover:shadow-md transition-all"
                        disabled={alsintan.availability !== 'Tersedia'}
                        asChild
                      >
                        <Link to={`/alsintan/${alsintan.id}`}>
                          {alsintan.availability === 'Tersedia' ? 'Sewa Sekarang' : 'Tidak Tersedia'}
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredAlsintan.length === 0 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Tidak ada alsintan ditemukan</h3>
              <p className="text-muted-foreground mb-4">
                Coba ubah kata kunci pencarian atau filter yang digunakan
              </p>
              <Button variant="outline" onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedLocation('all');
                setPriceRange('all');
              }}>
                Reset Filter
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Catalog;