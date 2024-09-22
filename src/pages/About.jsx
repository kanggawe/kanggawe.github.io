// src/pages/About.jsx
import React from "react";

const About = () => {
  return (
    <>
      <div className="container">
        <header className="blog-header py-3">
          <div className="row flex-nowrap justify-content-between align-items-center">
            <div className="col-4 pt-1">
              <a className="link-secondary" href="#">
                Berlangganan
              </a>
            </div>
            <div className="col-4 text-center">
              <a className="blog-header-logo text-dark" href="#">
                Besar
              </a>
            </div>
            <div className="col-4 d-flex justify-content-end align-items-center">
              <a className="link-secondary" href="#" aria-label="Cari">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="mx-3"
                  role="img"
                  viewBox="0 0 24 24"
                >
                  <title>Cari</title>
                  <circle cx="10.5" cy="10.5" r="7.5" />
                  <path d="M21 21l-5.2-5.2" />
                </svg>
              </a>
              <a className="btn btn-sm btn-outline-secondary" href="#">
                Daftar
              </a>
            </div>
          </div>
        </header>

        <div className="nav-scroller py-1 mb-2">
          <nav className="nav d-flex justify-content-between">
            <a className="p-2 link-secondary" href="#">
              Dunia
            </a>
            <a className="p-2 link-secondary" href="#">
              AS
            </a>
            <a className="p-2 link-secondary" href="#">
              Teknologi
            </a>
            <a className="p-2 link-secondary" href="#">
              Desain
            </a>
            <a className="p-2 link-secondary" href="#">
              Budaya
            </a>
            <a className="p-2 link-secondary" href="#">
              Bisnis
            </a>
            <a className="p-2 link-secondary" href="#">
              Politik
            </a>
            <a className="p-2 link-secondary" href="#">
              Opini
            </a>
            <a className="p-2 link-secondary" href="#">
              Sains
            </a>
            <a className="p-2 link-secondary" href="#">
              Kesehatan
            </a>
            <a className="p-2 link-secondary" href="#">
              Gaya
            </a>
            <a className="p-2 link-secondary" href="#">
              Perjalanan
            </a>
          </nav>
        </div>
      </div>

      <main className="container">
        <div className="p-4 p-md-5 mb-4 text-white rounded bg-dark">
          <div className="col-md-6 px-0">
            <h1 className="display-4 fst-italic">
              Judul posting blog unggulan yang lebih panjang
            </h1>
            <p className="lead my-3">
              Beberapa baris teks yang membentuk inti, memberi informasi kepada
              pembaca baru dengan cepat dan efisien tentang apa yang paling
              menarik dalam isi posting ini.
            </p>
            <p className="lead mb-0">
              <a href="#" className="text-white fw-bold">
                Lanjutkan membaca...
              </a>
            </p>
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-primary">
                  Dunia
                </strong>
                <h3 className="mb-0">Posting unggulan</h3>
                <div className="mb-1 text-muted">12 Nov</div>
                <p className="card-text mb-auto">
                  Ini adalah kartu yang lebih lebar dengan teks pendukung di
                  bawah sebagai pengantar alami ke konten tambahan.
                </p>
                <a href="#" className="stretched-link">
                  Lanjutkan membaca
                </a>
              </div>
              <div className="col-auto d-none d-lg-block">
                <svg
                  className="bd-placeholder-img"
                  width="200"
                  height="250"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: Gambar Mini"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c" />
                  <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                    Gambar Mini
                  </text>
                </svg>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-success">
                  Desain
                </strong>
                <h3 className="mb-0">Judul posting</h3>
                <div className="mb-1 text-muted">11 Nov</div>
                <p className="mb-auto">
                  Ini adalah kartu yang lebih lebar dengan teks pendukung di
                  bawah sebagai pengantar alami ke konten tambahan.
                </p>
                <a href="#" className="stretched-link">
                  Lanjutkan membaca
                </a>
              </div>
              <div className="col-auto d-none d-lg-block">
                <svg
                  className="bd-placeholder-img"
                  width="200"
                  height="250"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: Gambar Mini"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c" />
                  <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                    Gambar Mini
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-5">
          <div className="col-md-8">
            <h3 className="pb-4 mb-4 fst-italic border-bottom">Dari Selang</h3>

            <article className="blog-post">
              <h2 className="blog-post-title">Contoh posting blog</h2>
              <p className="blog-post-meta">
                1 Januari 2021 oleh <a href="#">Mark</a>
              </p>

              <p>
                Posting blog ini menunjukkan beberapa jenis konten yang didukung
                dan bergaya dengan Bootstrap. Tipografi dasar, daftar, tabel,
                gambar, kode, dan lebih banyak lagi semuanya didukung sesuai
                harapan.
              </p>
              <hr />
              <p>
                Ini adalah beberapa konten paragraf tambahan placeholder. Ini
                telah ditulis untuk mengisi ruang yang tersedia dan menunjukkan
                bagaimana potongan teks yang lebih panjang mempengaruhi konten
                di sekitarnya. Kami akan mengulanginya sering untuk menjaga
                demonstrasi tetap mengalir, jadi perhatikan string teks yang
                sama ini.
              </p>
              <h2>Blok Kutipan</h2>
              <p>Ini adalah contoh blok kutipan dalam aksi:</p>
              <blockquote className="blockquote">
                <p>Teks kutipan masuk di sini.</p>
              </blockquote>
              <p>
                Ini adalah beberapa konten paragraf tambahan placeholder. Ini
                telah ditulis untuk mengisi ruang yang tersedia dan menunjukkan
                bagaimana potongan teks yang lebih panjang mempengaruhi konten
                di sekitarnya. Kami akan mengulanginya sering untuk menjaga
                demonstrasi tetap mengalir, jadi perhatikan string teks yang
                sama ini.
              </p>
              <h3>Contoh Daftar</h3>
              <p>
                Ini adalah beberapa konten paragraf tambahan placeholder. Ini
                adalah versi yang sedikit lebih pendek dari teks tubuh lainnya
                yang sangat berulang digunakan di seluruh. Ini adalah contoh
                daftar tak berurutan:
              </p>
              <ul>
                <li>Item pertama dalam daftar</li>
                <li>
                  Item kedua dalam daftar dengan deskripsi yang lebih panjang
                </li>
                <li>Item ketiga dalam daftar untuk menutupnya</li>
              </ul>
              <p>Dan ini adalah daftar terurut:</p>
              <ol>
                <li>Item pertama dalam daftar</li>
                <li>
                  Item kedua dalam daftar dengan deskripsi yang lebih panjang
                </li>
                <li>Item ketiga dalam daftar untuk menutupnya</li>
              </ol>
              <p>Dan ini adalah daftar definisi:</p>
              <dl>
                <dt>HyperText Markup Language (HTML)</dt>
                <dd>
                  Bahasa yang digunakan untuk menggambarkan dan mendefinisikan
                  konten halaman Web
                </dd>
                <dt>Cascading Style Sheets (CSS)</dt>
                <dd>Digunakan untuk menggambarkan penampilan konten Web</dd>
                <dt>JavaScript (JS)</dt>
                <dd>
                  Bahasa pemrograman yang digunakan untuk membangun situs dan
                  aplikasi Web yang canggih
                </dd>
              </dl>
              <h2>Elemen HTML Inline</h2>
              <p>
                HTML lemah dan kuat: <strong>ini adalah teks tebal</strong>, dan{" "}
                <em>ini adalah teks miring</em>. Code,{" "}
                <code>ini adalah kode</code>. Tautan,{" "}
                <a href="#">ini adalah tautan</a>.
              </p>
              <h3>Contoh Tabel</h3>
              <p>Ini adalah contoh tabel:</p>
              <table className="table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Kolom header</th>
                    <th>Kolom header</th>
                    <th>Kolom header</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Sel tabel</td>
                    <td>Sel tabel</td>
                    <td>Sel tabel</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Sel tabel</td>
                    <td>Sel tabel</td>
                    <td>Sel tabel</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Sel tabel</td>
                    <td>Sel tabel</td>
                    <td>Sel tabel</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td>4</td>
                    <td>Sel tabel</td>
                    <td>Sel tabel</td>
                    <td>Sel tabel</td>
                  </tr>
                </tfoot>
              </table>
              <h3>Gambar</h3>
              <p>Ini adalah gambar responsif:</p>
              <img
                src="https://via.placeholder.com/800x400"
                className="img-fluid"
                alt="Responsive image"
              />
            </article>

            <nav className="blog-pagination" aria-label="Pagination">
              <a className="btn btn-outline-primary" href="#">
                Lebih lama
              </a>
              <a
                className="btn btn-outline-secondary disabled"
                href="#"
                tabIndex="-1"
                aria-disabled="true"
              >
                Lebih baru
              </a>
            </nav>
          </div>

          <div className="col-md-4">
            <div className="position-sticky py-3 mt-3" style={{ top: "2rem" }}>
              <div className="p-4 mb-3 mt-4 bg-light rounded">
                <h4 className="fst-italic">Tentang</h4>
                <p className="mb-0">
                  Tambahkan beberapa informasi biografi tentang penulis blog,
                  mungkin tentang pekerjaan mereka, pendidikan mereka, atau apa
                  yang mendorong mereka untuk menulis blog ini.
                </p>
              </div>

              <div className="p-4">
                <h4 className="fst-italic">Arsip</h4>
                <ol className="list-unstyled mb-0">
                  <li>
                    <a href="#">Maret 2021</a>
                  </li>
                  <li>
                    <a href="#">Februari 2021</a>
                  </li>
                  <li>
                    <a href="#">Januari 2021</a>
                  </li>
                  <li>
                    <a href="#">Desember 2020</a>
                  </li>
                  <li>
                    <a href="#">November 2020</a>
                  </li>
                  <li>
                    <a href="#">Oktober 2020</a>
                  </li>
                  <li>
                    <a href="#">September 2020</a>
                  </li>
                  <li>
                    <a href="#">Agustus 2020</a>
                  </li>
                  <li>
                    <a href="#">Juli 2020</a>
                  </li>
                  <li>
                    <a href="#">Juni 2020</a>
                  </li>
                  <li>
                    <a href="#">Mei 2020</a>
                  </li>
                  <li>
                    <a href="#">April 2020</a>
                  </li>
                </ol>
              </div>

              <div className="p-4">
                <h4 className="fst-italic">Di Lain Tempat</h4>
                <ol className="list-unstyled">
                  <li>
                    <a href="#">GitHub</a>
                  </li>
                  <li>
                    <a href="#">Twitter</a>
                  </li>
                  <li>
                    <a href="#">Facebook</a>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default About;
