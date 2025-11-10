export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <h1>Raih Tubuh Impian Anda</h1>
        <p>
          Pantau aktivitas, kalori, dan progres kebugaran Anda dengan mudah
          menggunakan FitTrack
        </p>
        <button className="cta-button">Mulai Sekarang</button>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="features-container">
          <h2>Fitur Unggulan</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Pelacakan Aktivitas</h3>
              <p>
                Catat langkah kaki, jarak tempuh, dan kalori terbakar secara
                real-time
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🍎</div>
              <h3>Manajemen Nutrisi</h3>
              <p>Pantau asupan makanan dan dapatkan rekomendasi diet sehat</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏋️</div>
              <h3>Program Latihan</h3>
              <p>
                Akses berbagai program latihan yang disesuaikan dengan tujuan
                Anda
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📈</div>
              <h3>Analisis Progres</h3>
              <p>Lihat perkembangan Anda dengan grafik dan statistik detail</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>Apa Kata Pengguna Kami</h2>
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <p>
              "FitTrack membantu saya menurunkan 15kg dalam 3 bulan! Aplikasi
              yang sangat mudah digunakan."
            </p>
            <div className="testimonial-author">- Sarah, Jakarta</div>
          </div>
          <div className="testimonial-card">
            <p>
              "Fitur pelacakan nutrisi sangat membantu saya mengatur pola makan.
              Highly recommended!"
            </p>
            <div className="testimonial-author">- Budi, Bandung</div>
          </div>
          <div className="testimonial-card">
            <p>
              "Program latihannya bervariasi dan tidak membosankan. Saya jadi
              lebih konsisten olahraga."
            </p>
            <div className="testimonial-author">- Rina, Surabaya</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 FitTrack. Semua Hak Dilindungi.</p>
        <p>Email: info@fittrack.com | Telepon: 0800-123-4567</p>
      </footer>
    </div>
  );
}
