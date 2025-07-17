import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 text-primary">
            Hubungi Kami
          </h1>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Kirim Pesan</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Nama</label>
                  <Input placeholder="Nama lengkap Anda" />
                </div>
                <div>
                  <label className="text-sm font-medium">Email</label>
                  <Input type="email" placeholder="email@example.com" />
                </div>
                <div>
                  <label className="text-sm font-medium">Subjek</label>
                  <Input placeholder="Subjek pesan" />
                </div>
                <div>
                  <label className="text-sm font-medium">Pesan</label>
                  <Textarea placeholder="Tulis pesan Anda di sini..." rows={4} />
                </div>
                <Button className="w-full">Kirim Pesan</Button>
              </CardContent>
            </Card>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Informasi Kontak</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="text-primary" size={20} />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">info@tanirent.id</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="text-primary" size={20} />
                    <div>
                      <p className="font-medium">Telepon</p>
                      <p className="text-muted-foreground">+62 812-3456-7890</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <MapPin className="text-primary" size={20} />
                    <div>
                      <p className="font-medium">Alamat</p>
                      <p className="text-muted-foreground">Jakarta, Indonesia</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Jam Operasional</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Senin - Jumat</span>
                      <span>08:00 - 17:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sabtu</span>
                      <span>08:00 - 15:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Minggu</span>
                      <span>Tutup</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;