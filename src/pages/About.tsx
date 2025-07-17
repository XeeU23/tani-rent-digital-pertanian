import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 text-primary">
            Tentang Kami
          </h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-lg leading-relaxed mb-6">
              Tanirent Sewa Alsintan adalah platform digital yang menghubungkan petani dengan penyedia alat dan mesin pertanian modern (alsintan) secara cepat dan tepat. Kami hadir sebagai solusi bagi petani Indonesia untuk mendapatkan akses mudah terhadap teknologi pertanian terkini tanpa harus memiliki alat secara permanen.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              Dengan Tanirent, petani dapat menyewa berbagai jenis alsintan seperti traktor, combine harvester, transplanter, pompa air, dan alat lainnya sesuai kebutuhan, langsung dari penyedia terpercaya di sekitar mereka. Semua proses dilakukan secara transparan, efisien, dan terjangkau.
            </p>
            
            <p className="text-lg leading-relaxed mb-8">
              Kami percaya bahwa produktivitas pertanian akan meningkat signifikan dengan pemanfaatan alat pertanian modern yang tepat guna. Oleh karena itu, misi kami adalah mendorong percepatan modernisasi pertanian melalui sistem sewa-menyewa alsintan yang praktis dan terintegrasi.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-card p-6 rounded-lg border text-center">
                <div className="text-2xl mb-2">🔧</div>
                <h3 className="font-semibold text-card-foreground mb-2">Cepat dalam Akses</h3>
                <p className="text-sm text-muted-foreground">Akses alsintan dengan mudah dan cepat melalui platform digital</p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border text-center">
                <div className="text-2xl mb-2">📍</div>
                <h3 className="font-semibold text-card-foreground mb-2">Tepat dalam Penyaluran</h3>
                <p className="text-sm text-muted-foreground">Temukan alsintan terdekat sesuai kebutuhan Anda</p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border text-center">
                <div className="text-2xl mb-2">💸</div>
                <h3 className="font-semibold text-card-foreground mb-2">Terjangkau bagi Petani</h3>
                <p className="text-sm text-muted-foreground">Harga sewa yang kompetitif dan sesuai budget petani</p>
              </div>
            </div>
            
            <div className="text-center">
              <h2 className="text-2xl font-bold text-primary mb-4">
                Tanirent – Teknologi Bertani dalam Genggaman
              </h2>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;