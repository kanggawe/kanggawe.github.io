import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import '../assets/css/Legal.css';

const legalTabs = [
  { id: 'kominfo', label: 'Izin Kominfo RI', icon: 'bi-file-earmark-check-fill' },
  { id: 'apjii', label: 'Keanggotaan APJII', icon: 'bi-globe-americas' },
  { id: 'iso', label: 'Sertifikasi ISO', icon: 'bi-shield-fill-check' },
  { id: 'privacy', label: 'Kebijakan Privasi', icon: 'bi-lock-fill' },
  { id: 'sla', label: 'SLA Agreement', icon: 'bi-award-fill' },
];

const Legal = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('kominfo');

  // Sinkronkan tab aktif berdasarkan hash URL (#kominfo, #apjii, #iso, #privacy, #sla) atau query param
  useEffect(() => {
    const hash = location.hash.replace('#', '').toLowerCase();
    const queryTab = new URLSearchParams(location.search).get('tab');
    const target = hash || queryTab;

    if (target && legalTabs.some((t) => t.id === target)) {
      setActiveTab(target);
      // Scroll halus ke container dokumen
      const el = document.getElementById('legal-doc-view');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [location]);

  return (
    <div className="legal-page">
      {/* ===== HERO ===== */}
      <section className="legal-hero">
        <div className="legal-hero-shapes">
          <div className="legal-hero-shape legal-shape-1"></div>
          <div className="legal-hero-shape legal-shape-2"></div>
        </div>
        <div className="container">
          <div className="legal-hero-content">
            <span className="legal-hero-badge">
              <i className="bi bi-shield-check"></i> Kepatuhan &amp; Transparansi
            </span>
            <h1>Legalitas, Sertifikasi &amp; Kebijakan Layanan</h1>
            <p>
              Komitmen <strong>PT Mitraxcon Synergy Utama</strong> dalam memberikan layanan internet berizin resmi, standar mutu internasional, transparansi privasi, dan jaminan keandalan operasional.
            </p>
          </div>
        </div>
      </section>

      {/* ===== TABS & CONTENT ===== */}
      <section className="legal-main-section">
        <div className="container">
          {/* Navigation Tabs */}
          <div className="legal-tabs-wrapper">
            <div className="legal-tabs-nav" role="tablist" aria-label="Navigasi Dokumen Legal">
              {legalTabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={activeTab === tab.id}
                  className={`legal-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => {
                    setActiveTab(tab.id);
                    window.history.replaceState(null, '', `#${tab.id}`);
                  }}
                >
                  <i className={`bi ${tab.icon}`}></i>
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Document View */}
          <div className="legal-doc-container" id="legal-doc-view">
            {/* TAB 1: IZIN KOMINFO RI */}
            {activeTab === 'kominfo' && (
              <div className="legal-doc-content">
                <div className="doc-header">
                  <div className="doc-title-group">
                    <h2>Izin Penyelenggara Jasa Akses Internet (ISP)</h2>
                    <p className="doc-subtitle">Kementerian Komunikasi dan Informatika Republik Indonesia</p>
                  </div>
                  <span className="doc-badge-status">
                    <i className="bi bi-check-circle-fill"></i> Lisensi Aktif &amp; Terverifikasi
                  </span>
                </div>

                <div className="doc-meta-grid">
                  <div className="doc-meta-card">
                    <i className="bi bi-award-fill"></i>
                    <div>
                      <span className="meta-info-label">Nomor Lisensi</span>
                      <span className="meta-info-val">1284/TEL.02.02/2012</span>
                    </div>
                  </div>
                  <div className="doc-meta-card">
                    <i className="bi bi-building-check"></i>
                    <div>
                      <span className="meta-info-label">Badan Hukum Resmi</span>
                      <span className="meta-info-val">PT Mitraxcon Synergy Utama</span>
                    </div>
                  </div>
                  <div className="doc-meta-card">
                    <i className="bi bi-geo-alt-fill"></i>
                    <div>
                      <span className="meta-info-label">Cakupan Wilayah</span>
                      <span className="meta-info-val">Nasional (Seluruh Indonesia)</span>
                    </div>
                  </div>
                </div>

                <div className="doc-body-section">
                  <h3><i className="bi bi-info-circle-fill"></i> Landasan Hukum Penyelenggaraan</h3>
                  <p>
                    PT Mitraxcon Synergy Utama menyelenggarakan jasa telekomunikasi berdasarkan izin resmi Penyelenggaraan Jasa Akses Internet (Internet Service Provider) yang diterbitkan oleh Kementerian Komunikasi dan Informatika Republik Indonesia (Kominfo RI), tunduk pada ketentuan Undang-Undang No. 36 Tahun 1999 tentang Telekomunikasi beserta seluruh peraturan pelaksanaannya.
                  </p>
                </div>

                <div className="doc-body-section">
                  <h3><i className="bi bi-check2-all"></i> Kepatuhan &amp; Komitmen Regulasi</h3>
                  <ul>
                    <li>
                      <i className="bi bi-shield-check"></i>
                      <span><strong>Kewajiban Pelayanan Universal (KPU/USO):</strong> Berkontribusi aktif dalam penyediaan jaringan internet ke daerah-daerah berkembang di Indonesia.</span>
                    </li>
                    <li>
                      <i className="bi bi-shield-check"></i>
                      <span><strong>Keamanan Konten &amp; DNS Nasional:</strong> Menerapkan sistem pemfilteran TrustPositif Kominfo untuk perlindungan keamanan siber masyarakat.</span>
                    </li>
                    <li>
                      <i className="bi bi-shield-check"></i>
                      <span><strong>Pelaporan Berkala &amp; Audit Tahunan:</strong> Rutin menyerahkan Laporan Kinerja Operasi (LKO) dan Laporan Keuangan teraudit kepada Direktorat Telekomunikasi Kominfo RI.</span>
                    </li>
                  </ul>
                </div>

                <div className="doc-notice-box">
                  <p>
                    <strong>Verifikasi Legalitas:</strong> Keabsahan lisensi PT Mitraxcon Synergy Utama dapat diverifikasi secara resmi melalui portal Direktorat Telekomunikasi Kominfo RI dengan memasukkan nomor izin <code>1284/TEL.02.02/2012</code>.
                  </p>
                </div>
              </div>
            )}

            {/* TAB 2: KEANGGOTAAN APJII */}
            {activeTab === 'apjii' && (
              <div className="legal-doc-content">
                <div className="doc-header">
                  <div className="doc-title-group">
                    <h2>Keanggotaan APJII &amp; Alokasi IP Address</h2>
                    <p className="doc-subtitle">Asosiasi Penyelenggara Jasa Internet Indonesia</p>
                  </div>
                  <span className="doc-badge-status">
                    <i className="bi bi-check-circle-fill"></i> Anggota Penuh (Full Member)
                  </span>
                </div>

                <div className="doc-meta-grid">
                  <div className="doc-meta-card">
                    <i className="bi bi-diagram-3-fill"></i>
                    <div>
                      <span className="meta-info-label">Status Keanggotaan</span>
                      <span className="meta-info-val">Anggota Penuh APJII</span>
                    </div>
                  </div>
                  <div className="doc-meta-card">
                    <i className="bi bi-hdd-network-fill"></i>
                    <div>
                      <span className="meta-info-label">Autonomous System (ASN)</span>
                      <span className="meta-info-val">AS-MITRAXCON (ID-NIC)</span>
                    </div>
                  </div>
                  <div className="doc-meta-card">
                    <i className="bi bi-router-fill"></i>
                    <div>
                      <span className="meta-info-label">Koneksi Peering</span>
                      <span className="meta-info-val">Direct Peering IIX 100G</span>
                    </div>
                  </div>
                </div>

                <div className="doc-body-section">
                  <h3><i className="bi bi-hdd-stack-fill"></i> Peran Strategis di Ekosistem Internet Nasional</h3>
                  <p>
                    Sebagai anggota resmi APJII, PT Mitraxcon Synergy Utama terhubung langsung ke simpul pertukaran lalu lintas data nasional, yaitu <strong>Indonesia Internet Exchange (IIX)</strong>. Hal ini menjamin bahwa seluruh trafik data antar-pengguna lokal di Indonesia beroperasi dengan latensi sangat rendah (di bawah 5 milidetik) tanpa perlu memutar melalui gateway internasional.
                  </p>
                </div>

                <div className="doc-body-section">
                  <h3><i className="bi bi-layers-fill"></i> Kapasitas Sumber Daya Internet</h3>
                  <ul>
                    <li>
                      <i className="bi bi-check-circle-fill"></i>
                      <span><strong>Alokasi IPv4 &amp; IPv6 Mandiri:</strong> Memiliki blok alamat IP publik statis independen yang dialokasikan oleh APJII dan APNIC (Asia Pacific Network Information Centre).</span>
                    </li>
                    <li>
                      <i className="bi bi-check-circle-fill"></i>
                      <span><strong>Multi-Homing BGP Routing:</strong> Mengoperasikan protokol BGP4 (Border Gateway Protocol) dengan sistem redundansi multi-upstream Tier-1 internasional untuk mencegah single-point-of-failure.</span>
                    </li>
                    <li>
                      <i className="bi bi-check-circle-fill"></i>
                      <span><strong>Interkoneksi OpenIXP &amp; Edge CDN:</strong> Terhubung langsung dengan CDN terkemuka dunia seperti Google, Cloudflare, Akamai, Meta, dan Netflix.</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {/* TAB 3: SERTIFIKASI ISO */}
            {activeTab === 'iso' && (
              <div className="legal-doc-content">
                <div className="doc-header">
                  <div className="doc-title-group">
                    <h2>Sertifikasi Internasional ISO 27001 &amp; ISO 9001</h2>
                    <p className="doc-subtitle">Sistem Manajemen Keamanan Informasi &amp; Standar Mutu Layanan</p>
                  </div>
                  <span className="doc-badge-status">
                    <i className="bi bi-patch-check-fill"></i> Terakreditasi Global
                  </span>
                </div>

                <div className="doc-meta-grid">
                  <div className="doc-meta-card">
                    <i className="bi bi-shield-lock-fill"></i>
                    <div>
                      <span className="meta-info-label">ISO 27001:2013</span>
                      <span className="meta-info-val">Keamanan Informasi (ISMS)</span>
                    </div>
                  </div>
                  <div className="doc-meta-card">
                    <i className="bi bi-stars"></i>
                    <div>
                      <span className="meta-info-label">ISO 9001:2015</span>
                      <span className="meta-info-val">Manajemen Mutu Layanan</span>
                    </div>
                  </div>
                  <div className="doc-meta-card">
                    <i className="bi bi-building"></i>
                    <div>
                      <span className="meta-info-label">Data Center Tier</span>
                      <span className="meta-info-val">Tier-3 Certified Facility</span>
                    </div>
                  </div>
                </div>

                <div className="doc-body-section">
                  <h3><i className="bi bi-shield-check"></i> Ruang Lingkup ISO 27001:2013</h3>
                  <p>
                    Sertifikasi ISO 27001 menjamin bahwa seluruh tata kelola infrastruktur jaringan fiber optic, operasi data center, sistem portal pelanggan, dan pemantauan Network Operations Center (NOC) PT Mitraxcon Synergy Utama telah memenuhi standar pengamanan informasi paling ketat di dunia.
                  </p>
                  <ul>
                    <li>
                      <i className="bi bi-check2-circle"></i>
                      <span>Pencegahan insiden kebocoran data dengan enkripsi end-to-end pada link transmisi.</span>
                    </li>
                    <li>
                      <i className="bi bi-check2-circle"></i>
                      <span>Penerapan Disaster Recovery Plan (DRP) dan Business Continuity Plan (BCP) berkala.</span>
                    </li>
                    <li>
                      <i className="bi bi-check2-circle"></i>
                      <span>Audit berkala oleh lembaga sertifikasi independen terakreditasi KAN (Komite Akreditasi Nasional).</span>
                    </li>
                  </ul>
                </div>

                <div className="doc-body-section">
                  <h3><i className="bi bi-gear-fill"></i> Ruang Lingkup ISO 9001:2015</h3>
                  <p>
                    Standar manajemen mutu memastikan konsistensi kualitas layanan internet dari proses instalasi, kecepatan aktivasi jaringan, penanganan tiket kendala 24/7, hingga kepuasan pelanggan secara berkesinambungan.
                  </p>
                </div>
              </div>
            )}

            {/* TAB 4: KEBIJAKAN PRIVASI */}
            {activeTab === 'privacy' && (
              <div className="legal-doc-content">
                <div className="doc-header">
                  <div className="doc-title-group">
                    <h2>Kebijakan Privasi &amp; Perlindungan Data Pribadi</h2>
                    <p className="doc-subtitle">Sesuai Undang-Undang No. 27 Tahun 2022 tentang Pelindungan Data Pribadi (UU PDP)</p>
                  </div>
                  <span className="doc-badge-status">
                    <i className="bi bi-lock-fill"></i> Terenkripsi &amp; Terlindungi
                  </span>
                </div>

                <div className="doc-body-section">
                  <h3><i className="bi bi-info-circle-fill"></i> 1. Pengantar &amp; Komitmen</h3>
                  <p>
                    PT Mitraxcon Synergy Utama (&quot;MITRAXCON&quot;) menghormati dan menjunjung tinggi privasi setiap pelanggan. Dokumen ini menjelaskan bagaimana kami mengumpulkan, menggunakan, menyimpan, dan melindungi informasi data pribadi Anda saat menggunakan layanan internet broadband, portal pelanggan, maupun situs web resmi kami.
                  </p>
                </div>

                <div className="doc-body-section">
                  <h3><i className="bi bi-collection-fill"></i> 2. Data yang Kami Kumpulkan</h3>
                  <ul>
                    <li>
                      <i className="bi bi-dot"></i>
                      <span><strong>Data Identitas:</strong> Nama lengkap, NIK/Nomor Identitas resmi, alamat instalasi, nomor telepon/WhatsApp, dan alamat email.</span>
                    </li>
                    <li>
                      <i className="bi bi-dot"></i>
                      <span><strong>Data Teknis Jaringan:</strong> Alamat IP yang dialokasikan, MAC address modem ONT, informasi konsumsi kuota bandwidth, dan status konektivitas perangkat.</span>
                    </li>
                    <li>
                      <i className="bi bi-dot"></i>
                      <span><strong>Data Transaksi:</strong> Riwayat tagihan, metode pembayaran, serta log tiket bantuan teknis.</span>
                    </li>
                  </ul>
                </div>

                <div className="doc-body-section">
                  <h3><i className="bi bi-shield-lock-fill"></i> 3. Tujuan Pemrosesan Data</h3>
                  <p>
                    Informasi pribadi Anda hanya digunakan semata-mata untuk:
                  </p>
                  <ul>
                    <li>
                      <i className="bi bi-check2"></i>
                      <span>Penyediaan dan aktivasi instalasi layanan internet di lokasi Anda.</span>
                    </li>
                    <li>
                      <i className="bi bi-check2"></i>
                      <span>Pengiriman tagihan bulanan resmi dan notifikasi pemeliharaan jaringan terjadwal.</span>
                    </li>
                    <li>
                      <i className="bi bi-check2"></i>
                      <span>Penyelesaian kendala teknis dan pemenuhan kewajiban regulasi telekomunikasi Kominfo.</span>
                    </li>
                  </ul>
                </div>

                <div className="doc-body-section">
                  <h3><i className="bi bi-slash-circle-fill"></i> 4. Tidak Ada Penjualan Data ke Pihak Ketiga</h3>
                  <p>
                    <strong>MITRAXCON tidak pernah dan tidak akan pernah menjual</strong>, menyewakan, atau memperdagangkan data pribadi pelanggan kepada pihak ketiga manapun untuk tujuan periklanan atau komersialisasi pihak luar.
                  </p>
                </div>

                <div className="doc-notice-box">
                  <p>
                    <strong>Hak Subjek Data:</strong> Pelanggan berhak mengakses, memperbarui, atau meminta penghapusan data akun melalui portal pelanggan atau dengan menghubungi Petugas Perlindungan Data kami di <code>dpo@mitraxcon.id</code>.
                  </p>
                </div>
              </div>
            )}

            {/* TAB 5: SLA SERVICE LEVEL AGREEMENT */}
            {activeTab === 'sla' && (
              <div className="legal-doc-content">
                <div className="doc-header">
                  <div className="doc-title-group">
                    <h2>Service Level Agreement (SLA)</h2>
                    <p className="doc-subtitle">Standar Jaminan Kualitas Layanan, Ketersediaan Jaringan &amp; Kompensasi</p>
                  </div>
                  <span className="doc-badge-status">
                    <i className="bi bi-award-fill"></i> Jaminan Tertulis
                  </span>
                </div>

                <div className="doc-body-section">
                  <h3><i className="bi bi-speedometer"></i> 1. Tingkat Ketersediaan Jaringan (Network Uptime)</h3>
                  <p>
                    MITRAXCON memberikan jaminan ketersediaan jaringan (*uptime SLA*) bulanan yang diukur selama 24 jam x 7 hari secara kontinu oleh Network Operations Center (NOC):
                  </p>
                  <div className="doc-table-wrapper">
                    <table className="doc-table">
                      <thead>
                        <tr>
                          <th>Kategori Layanan</th>
                          <th>Target Uptime</th>
                          <th>Respon Tim Teknis</th>
                          <th>Target Pemulihan (MTTR)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><strong>Enterprise Dedicated</strong></td>
                          <td><span style={{ color: '#059669', fontWeight: 700 }}>99.9%</span></td>
                          <td>&lt; 15 Menit</td>
                          <td>Maksimal 2 Jam</td>
                        </tr>
                        <tr>
                          <td><strong>Business Pro / Lite</strong></td>
                          <td><span style={{ color: '#0047cc', fontWeight: 700 }}>99.8%</span></td>
                          <td>&lt; 30 Menit</td>
                          <td>Maksimal 4 Jam</td>
                        </tr>
                        <tr>
                          <td><strong>Home Broadband</strong></td>
                          <td><span style={{ color: '#0284c7', fontWeight: 700 }}>99.5%</span></td>
                          <td>&lt; 60 Menit</td>
                          <td>Maksimal 8 Jam</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="doc-body-section">
                  <h3><i className="bi bi-cash-coin"></i> 2. Kebijakan Restitusi &amp; Kompensasi Downtime</h3>
                  <p>
                    Apabila ketersediaan jaringan dalam 1 (satu) bulan penagihan berada di bawah target SLA yang disepakati akibat gangguan jaringan MITRAXCON (di luar faktor *Force Majeure*), pelanggan berhak memperoleh pemotongan tagihan bulanan berikutnya dengan ketentuan:
                  </p>
                  <ul>
                    <li>
                      <i className="bi bi-check2-circle"></i>
                      <span><strong>Uptime 98.0% – 99.4%:</strong> Pemotongan tagihan sebesar <strong>10%</strong> dari biaya bulanan.</span>
                    </li>
                    <li>
                      <i className="bi bi-check2-circle"></i>
                      <span><strong>Uptime 95.0% – 97.9%:</strong> Pemotongan tagihan sebesar <strong>25%</strong> dari biaya bulanan.</span>
                    </li>
                    <li>
                      <i className="bi bi-check2-circle"></i>
                      <span><strong>Uptime &lt; 95.0%:</strong> Pemotongan tagihan sebesar <strong>50%</strong> dari biaya bulanan.</span>
                    </li>
                  </ul>
                </div>

                <div className="doc-body-section">
                  <h3><i className="bi bi-telephone-inbound-fill"></i> 3. Prosedur Eskalasi Tiket Gangguan</h3>
                  <p>
                    Setiap kendala jaringan dapat dilaporkan 24/7 melalui Customer Portal, Call Center <code>1500-123</code>, atau WhatsApp NOC. Tim teknisi akan memberikan nomor tiket pelacakan dan laporan progres hingga koneksi pulih secara sempurna.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Legal Help Box */}
          <div className="legal-help-box">
            <div className="legal-help-info">
              <h4>Butuh Salinan Dokumen Resmi atau Perjanjian Khusus?</h4>
              <p>Tim Legal &amp; Compliance kami siap melayani permintaan dokumen bertandatangan basah atau perjanjian SLA korporat kustom.</p>
            </div>
            <Link to="/contact" className="btn btn-primary">
              <i className="bi bi-chat-left-dots-fill"></i> Hubungi Tim Legal &amp; Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Legal;
