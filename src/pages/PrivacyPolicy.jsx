
import React from "react";
// import "../assets/css/terms-privacy.css";

function PrivacyPolicy() {
  return (
    <section className="section-padding" >
      <div className="container">
        <h2 className="mb-4 text-center" style={{ color: '#0af' }}>🔒 Privacy Policy</h2>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card card-custom rounded-4 shadow">
              <div className="card-body">
                <h5 className="card-title mb-4" style={{ color: '#0af' }}>Kebijakan Privasi</h5>
                <div className="mb-4">
                  <h6  >Persetujuan</h6>
                  <p  >Dengan menggunakan situs ini, Anda menyetujui Kebijakan Privasi dan ketentuannya.</p>
                </div>
                <div className="mb-4">
                  <h6  >Informasi yang Kami Kumpulkan</h6>
                  <p  >Informasi pribadi yang diminta akan dijelaskan saat pengumpulan. Jika Anda menghubungi kami, kami dapat menerima nama, email, nomor telepon, dan isi pesan Anda. Jika mendaftar akun, kami dapat meminta detail kontak seperti nama, alamat, dan nomor telepon.</p>
                </div>
                <div className="mb-4">
                  <h6  >Cara Kami Menggunakan Informasi Anda</h6>
                  <ul style={{ paddingLeft: '1.2rem' }}>
                    <li>Mengoperasikan dan memelihara situs web</li>
                    <li>Memahami dan menganalisis penggunaan situs</li>
                    <li>Meningkatkan, mempersonalisasi, dan memperluas situs</li>
                    <li>Mengirim email dan promosi</li>
                    <li>Memberikan layanan pelanggan</li>
                    <li>Mendeteksi dan mencegah penipuan</li>
                  </ul>
                </div>
                <div className="mb-4">
                  <h6  >Log Files</h6>
                  <p  >Kami mengikuti praktik standar penggunaan log file, yang mencatat data seperti alamat IP, jenis browser, ISP, dan waktu kunjungan. Informasi ini tidak terkait dengan identitas pribadi dan digunakan untuk analisis tren.</p>
                </div>
                <div className="mb-4">
                  <h6  >Cookies dan Web Beacons</h6>
                  <p  >Kami menggunakan cookies untuk menyimpan preferensi pengunjung dan menyesuaikan tampilan situs sesuai browser atau informasi lainnya.</p>
                </div>
                <div className="mb-4">
                  <h6  >Kebijakan Privasi Mitra Iklan</h6>
                  <p  >Mitra pihak ketiga seperti jaringan iklan dapat menggunakan cookies, JavaScript, atau Web Beacons. Mereka menerima alamat IP Anda saat interaksi dan data ini digunakan untuk mengukur efektivitas iklan.</p>
                </div>
                <div className="mb-4">
                  <h6  >Kebijakan Privasi Pihak Ketiga</h6>
                  <p  >Kebijakan privasi kami tidak berlaku untuk pihak ketiga. Anda disarankan untuk membaca kebijakan mereka secara terpisah.</p>
                </div>
                <div className="mb-4">
                  <h6  >Hak Privasi CCPA</h6>
                  <p >Pengguna California berhak meminta detail data pribadi, meminta penghapusan, atau meminta agar data tidak dijual.</p>
                </div>
                <div className="mb-4">
                  <h6  >Hak Perlindungan Data GDPR</h6>
                  <ul style={{  paddingLeft: '1.2rem' }}>
                    <li>Mengakses data pribadi Anda</li>
                    <li>Memperbaiki data yang tidak akurat</li>
                    <li>Menghapus data Anda</li>
                    <li>Membatasi pemrosesan data</li>
                    <li>Menolak pemrosesan data</li>
                    <li>Memindahkan data ke organisasi lain</li>
                  </ul>
                </div>
                <div className="mb-4">
                  <h6  >Informasi Anak-anak</h6>
                  <p  >Kami tidak sengaja mengumpulkan informasi pribadi dari anak di bawah usia 13 tahun. Jika Anda yakin anak Anda memberikan informasi tersebut, silakan hubungi kami untuk segera menghapusnya.</p>
                </div>
                <div className="mb-4">
                  <h6  >Kontak</h6>
                  <p  >Jika Anda memiliki pertanyaan tentang kebijakan privasi ini, silakan hubungi kami melalui halaman kontak.</p>
                </div>
                <div className="text-center">
                  <button className="btn btn-primary-custom me-2">
                    <i className="bi bi-file-text me-2"></i>
                    Download Full Policy
                  </button>
                  <button className="btn btn-secondary-custom">
                    <i className="bi bi-arrow-left me-2"></i>
                    Back to Home
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PrivacyPolicy;
