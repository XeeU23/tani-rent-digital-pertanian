import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Truck, Wrench, Sprout, Droplets, Wheat, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const AlsintanCategories = () => {
  const categories = [
    {
      id: 'combine-harvester',
      name: 'Combine Harvester',
      icon: Wheat,
      description: 'Mesin pemanen padi otomatis',
      count: 15,
      priceRange: 'Rp 500K - 800K/hari',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      id: 'traktor-roda-4',
      name: 'Traktor Roda 4',
      icon: Truck,
      description: 'Traktor untuk lahan luas',
      count: 25,
      priceRange: 'Rp 300K - 600K/hari',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      id: 'traktor-roda-2',
      name: 'Traktor Roda 2',
      icon: Truck,
      description: 'Traktor untuk lahan kecil-sedang',
      count: 35,
      priceRange: 'Rp 150K - 300K/hari',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      id: 'transplanter',
      name: 'Transplanter',
      icon: Sprout,
      description: 'Mesin tanam bibit padi',
      count: 12,
      priceRange: 'Rp 200K - 400K/hari',
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50'
    },
    {
      id: 'rotavator',
      name: 'Rotavator',
      icon: Wrench,
      description: 'Mesin pengolah tanah',
      count: 20,
      priceRange: 'Rp 100K - 250K/hari',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      id: 'power-thresher',
      name: 'Power Thresher',
      icon: Zap,
      description: 'Mesin perontok padi',
      count: 18,
      priceRange: 'Rp 150K - 300K/hari',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      id: 'pompa-air',
      name: 'Pompa Air',
      icon: Droplets,
      description: 'Pompa irigasi pertanian',
      count: 30,
      priceRange: 'Rp 50K - 150K/hari',
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-50'
    }
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">Kategori Alsintan</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Temukan berbagai jenis alat dan mesin pertanian sesuai kebutuhan lahan Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Card key={category.id} className="group hover:shadow-elegant transition-all duration-300 hover:scale-105 cursor-pointer">
                <CardHeader className="pb-3">
                  <div className={`w-12 h-12 rounded-lg ${category.bgColor} flex items-center justify-center mb-3`}>
                    <Icon className={`w-6 h-6 ${category.color}`} />
                  </div>
                  <CardTitle className="text-lg">{category.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="text-xs">
                        {category.count} unit tersedia
                      </Badge>
                    </div>
                    <div className="text-sm font-medium text-primary">
                      {category.priceRange}
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                      asChild
                    >
                      <Link to={`/catalog?category=${category.id}`}>
                        Lihat Semua
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-8">
          <Button variant="hero" size="lg" asChild>
            <Link to="/catalog">
              Jelajahi Semua Kategori
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AlsintanCategories;