
import React from "react";
import "../assets/css/Legal.css";

function PrivacyPolicy() {
  return (
    <div className="legal-page">
      <div className="container">
        {/* Header */}
        <div className="legal-header">
          <h1 className="legal-title">🔒 Privacy Policy</h1>
          <p className="legal-subtitle">Kebijakan Privasi ESANET</p>
        </div>

        {/* Content */}
        <div className="legal-container">
          <div className="legal-card">
            <div className="legal-section">
              <h2 className="legal-section-title">Persetujuan</h2>
              <p className="legal-section-content">
                Dengan menggunakan situs ini, Anda menyetujui Kebijakan Privasi dan ketentuannya.
              </p>
            </div>

            <div className="legal-section">
              <h2 className="legal-section-title">Informasi yang Kami Kumpulkan</h2>
              <p className="legal-section-content">
                Informasi pribadi yang diminta akan dijelaskan saat pengumpulan. Jika Anda menghubungi kami, 
                kami dapat menerima nama, email, nomor telepon, dan isi pesan Anda. Jika mendaftar akun, 
                kami dapat meminta detail kontak seperti nama, alamat, dan nomor telepon.
              </p>
            </div>

            <div className="legal-section">
              <h2 className="legal-section-title">Cara Kami Menggunakan Informasi Anda</h2>
              <ul className="legal-section-list">
                <li>Mengoperasikan dan memelihara situs web</li>
                <li>Memahami dan menganalisis penggunaan situs</li>
                <li>Meningkatkan, mempersonalisasi, dan memperluas situs</li>
                <li>Mengirim email dan promosi</li>
                <li>Memberikan layanan pelanggan</li>
                <li>Mendeteksi dan mencegah penipuan</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2 className="legal-section-title">Log Files</h2>
              <p className="legal-section-content">
                Kami mengikuti praktik standar penggunaan log file, yang mencatat data seperti alamat IP, 
                jenis browser, ISP, dan waktu kunjungan. Informasi ini tidak terkait dengan identitas pribadi 
                dan digunakan untuk analisis tren.
              </p>
            </div>

            <div className="legal-section">
              <h2 className="legal-section-title">Cookies dan Web Beacons</h2>
              <p className="legal-section-content">
                Kami menggunakan cookies untuk menyimpan preferensi pengunjung dan menyesuaikan tampilan situs 
                sesuai browser atau informasi lainnya.
              </p>
            </div>

            <div className="legal-section">
              <h2 className="legal-section-title">Kebijakan Privasi Mitra Iklan</h2>
              <p className="legal-section-content">
                Mitra pihak ketiga seperti jaringan iklan dapat menggunakan cookies, JavaScript, atau Web Beacons. 
                Mereka menerima alamat IP Anda saat interaksi dan data ini digunakan untuk mengukur efektivitas iklan.
              </p>
            </div>

            <div className="legal-section">
              <h2 className="legal-section-title">Kebijakan Privasi Pihak Ketiga</h2>
              <p className="legal-section-content">
                Kebijakan privasi kami tidak berlaku untuk pihak ketiga. Anda disarankan untuk membaca kebijakan 
                mereka secara terpisah.
              </p>
            </div>

            <div className="legal-section">
              <h2 className="legal-section-title">Hak Privasi CCPA</h2>
              <p className="legal-section-content">
                Pengguna California berhak meminta detail data pribadi, meminta penghapusan, atau meminta agar 
                data tidak dijual.
              </p>
            </div>

            <div className="legal-section">
              <h2 className="legal-section-title">Hak Perlindungan Data GDPR</h2>
              <ul className="legal-section-list">
                <li>Mengakses data pribadi Anda</li>
                <li>Memperbaiki data yang tidak akurat</li>
                <li>Menghapus data Anda</li>
                <li>Membatasi pemrosesan data</li>
                <li>Menolak pemrosesan data</li>
                <li>Memindahkan data ke organisasi lain</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2 className="legal-section-title">Informasi Anak-anak</h2>
              <p className="legal-section-content">
                Kami tidak sengaja mengumpulkan informasi pribadi dari anak di bawah usia 13 tahun. 
                Jika Anda yakin anak Anda memberikan informasi tersebut, silakan hubungi kami untuk 
                segera menghapusnya.
              </p>
            </div>

            <div className="legal-section">
              <h2 className="legal-section-title">Kontak</h2>
              <p className="legal-section-content">
                Jika Anda memiliki pertanyaan tentang kebijakan privasi ini, silakan hubungi kami 
                melalui halaman kontak.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="legal-actions">
              <button className="legal-btn">
                <i className="bi bi-file-text legal-btn-icon"></i>
                Download Full Policy
              </button>
              <button className="legal-btn legal-btn-secondary">
                <i className="bi bi-arrow-left legal-btn-icon"></i>
                Back to Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
