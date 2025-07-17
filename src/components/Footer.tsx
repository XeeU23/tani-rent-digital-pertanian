import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-foreground rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-lg">T</span>
              </div>
              <span className="text-xl font-bold">TaniRent</span>
            </div>
            <p className="text-primary-foreground/80">
              Platform sewa alsintan terpercaya yang menghubungkan petani dengan penyedia alat pertanian modern.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 hover:text-primary-glow cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 hover:text-primary-glow cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 hover:text-primary-glow cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Menu Utama</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link to="/catalog" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Katalog Alsintan
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Layanan</h3>
            <ul className="space-y-2">
              <li className="text-primary-foreground/80">Sewa Traktor</li>
              <li className="text-primary-foreground/80">Sewa Combine Harvester</li>
              <li className="text-primary-foreground/80">Sewa Transplanter</li>
              <li className="text-primary-foreground/80">Sewa Power Thresher</li>
              <li className="text-primary-foreground/80">Sewa Pompa Air</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Kontak Kami</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span className="text-primary-foreground/80">
                  Jl. Sudirman No. 123<br />
                  Jakarta Pusat 10220
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span className="text-primary-foreground/80">+62 812-3456-7890</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span className="text-primary-foreground/80">info@tanirent.id</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2024 TaniRent. Semua hak cipta dilindungi undang-undang.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;