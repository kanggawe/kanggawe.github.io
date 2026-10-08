import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts, blogCategories } from '../data/blogData';
import '../assets/css/Blog.css';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [searchQuery, setSearchQuery] = useState('');

  // Filtered posts based on category and search query
  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchCategory =
        selectedCategory === 'Semua' || post.category === selectedCategory;
      const matchSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Featured post (first featured post or first in list)
  const featuredPost = useMemo(() => {
    return blogPosts.find((p) => p.featured) || blogPosts[0];
  }, []);

  return (
    <div className="blog-page">
      {/* ===== HERO SECTION ===== */}
      <section className="blog-hero">
        <div className="container">
          <div className="blog-hero-content">
            <div className="blog-hero-badge">
              <i className="bi bi-journal-richtext"></i>
              <span>Wawasan &amp; Edukasi Digital</span>
            </div>
            <h1 className="blog-hero-title">
              Kabar Terkini, Tips &amp; <span className="blog-title-gradient">Wawasan Internet</span>
            </h1>
            <p className="blog-hero-subtitle">
              Pelajari tren teknologi jaringan fiber optic, panduan keamanan siber, tips optimasi WiFi, 
              dan berita terbaru seputar ekosistem telekomunikasi ESANET.
            </p>

            {/* Search Bar */}
            <div className="blog-search-wrapper">
              <div className="blog-search-box">
                <i className="bi bi-search search-icon"></i>
                <input
                  type="text"
                  placeholder="Cari artikel, tips WiFi, fiber optic, atau topik..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="blog-search-input"
                />
                {searchQuery && (
                  <button
                    className="clear-search-btn"
                    onClick={() => setSearchQuery('')}
                    aria-label="Hapus pencarian"
                  >
                    <i className="bi bi-x-circle-fill"></i>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CATEGORY FILTER BAR ===== */}
      <section className="blog-filter-section">
        <div className="container">
          <div className="blog-category-list">
            {blogCategories.map((cat, idx) => (
              <button
                key={idx}
                className={`category-pill ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="blog-main-section">
        <div className="container">
          {/* ===== FEATURED ARTICLE (Only shown when no search query and 'Semua' selected) ===== */}
          {!searchQuery && selectedCategory === 'Semua' && featuredPost && (
            <div className="featured-post-card">
              <div className="featured-post-image">
                <img src={featuredPost.image} alt={featuredPost.title} />
                <span className="featured-badge-overlay">
                  <i className="bi bi-star-fill"></i> Artikel Pilihan
                </span>
              </div>
              <div className="featured-post-body">
                <div className="featured-post-meta">
                  <span className="post-cat-badge">{featuredPost.category}</span>
                  <span className="post-meta-dot">•</span>
                  <span className="post-date"><i className="bi bi-calendar3"></i> {featuredPost.date}</span>
                  <span className="post-meta-dot">•</span>
                  <span className="post-readtime"><i className="bi bi-clock"></i> {featuredPost.readTime}</span>
                </div>
                <h2 className="featured-post-title">
                  <Link to={`/blog/${featuredPost.slug}`}>{featuredPost.title}</Link>
                </h2>
                <p className="featured-post-excerpt">{featuredPost.excerpt}</p>
                <div className="featured-post-footer">
                  <div className="post-author-info">
                    <i className={`bi ${featuredPost.author.avatar} author-avatar`}></i>
                    <div>
                      <span className="author-name">{featuredPost.author.name}</span>
                      <span className="author-role">{featuredPost.author.role}</span>
                    </div>
                  </div>
                  <Link to={`/blog/${featuredPost.slug}`} className="btn-read-more">
                    <span>Baca Selengkapnya</span>
                    <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* ===== ARTICLES GRID HEADER ===== */}
          <div className="articles-grid-header">
            <h3 className="articles-heading">
              {searchQuery
                ? `Hasil pencarian untuk "${searchQuery}" (${filteredPosts.length})`
                : selectedCategory === 'Semua'
                ? 'Artikel Terbaru'
                : `Kategori: ${selectedCategory} (${filteredPosts.length})`}
            </h3>
            {searchQuery && (
              <button
                className="reset-filter-btn"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('Semua');
                }}
              >
                Reset Filter
              </button>
            )}
          </div>

          {/* ===== ARTICLES GRID ===== */}
          {filteredPosts.length > 0 ? (
            <div className="blog-posts-grid">
              {filteredPosts.map((post) => (
                <article className="blog-card" key={post.id}>
                  <Link to={`/blog/${post.slug}`} className="blog-card-img-link">
                    <div className="blog-card-img-wrapper">
                      <img src={post.image} alt={post.title} className="blog-card-img" />
                      <span className="blog-card-category">{post.category}</span>
                    </div>
                  </Link>
                  <div className="blog-card-content">
                    <div className="blog-card-meta">
                      <span><i className="bi bi-calendar3"></i> {post.date}</span>
                      <span className="meta-sep">•</span>
                      <span><i className="bi bi-clock"></i> {post.readTime}</span>
                    </div>
                    <h3 className="blog-card-title">
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <p className="blog-card-excerpt">{post.excerpt}</p>
                    <div className="blog-card-footer">
                      <div className="card-author">
                        <i className={`bi ${post.author.avatar}`}></i>
                        <span>{post.author.name}</span>
                      </div>
                      <Link to={`/blog/${post.slug}`} className="card-arrow-link" aria-label={`Baca ${post.title}`}>
                        <i className="bi bi-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="blog-empty-state">
              <i className="bi bi-search empty-icon"></i>
              <h4>Tidak ada artikel yang cocok</h4>
              <p>Coba gunakan kata kunci lain atau pilih kategori yang berbeda.</p>
              <button
                className="btn btn-primary"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('Semua');
                }}
              >
                Lihat Semua Artikel
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ===== NEWSLETTER CTA ===== */}
      <section className="blog-newsletter-section">
        <div className="container">
          <div className="blog-newsletter-card">
            <div className="newsletter-text">
              <span className="newsletter-tag">
                <i className="bi bi-envelope-paper-fill"></i> Buletin Bulanan
              </span>
              <h3>Dapatkan Wawasan Jaringan Terkini Langsung di Inbox Anda</h3>
              <p>Tips optimasi internet, update produk, dan informasi promo eksklusif dari ESANET.</p>
            </div>
            <form className="newsletter-form" onSubmit={(e) => { e.preventDefault(); alert('Terima kasih telah berlangganan buletin ESANET!'); }}>
              <input
                type="email"
                placeholder="Masukkan alamat email Anda..."
                required
                className="newsletter-input"
              />
              <button type="submit" className="btn btn-accent newsletter-btn">
                <span>Berlangganan</span>
                <i className="bi bi-send-fill"></i>
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
