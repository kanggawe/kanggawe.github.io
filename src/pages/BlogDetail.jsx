import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogData';
import '../assets/css/BlogDetail.css';

const BlogDetail = () => {
  const { slug } = useParams();
  const [copied, setCopied] = useState(false);

  // Find post by slug
  const post = blogPosts.find((p) => p.slug === slug);

  // If post doesn't exist
  if (!post) {
    return (
      <div className="blog-not-found container">
        <i className="bi bi-file-earmark-x not-found-icon"></i>
        <h2>Artikel Tidak Ditemukan</h2>
        <p>Maaf, artikel yang Anda cari mungkin telah dipindahkan atau dihapus.</p>
        <Link to="/blog" className="btn btn-primary">
          <i className="bi bi-arrow-left"></i> Kembali ke Blog
        </Link>
      </div>
    );
  }

  // Related articles (excluding current post)
  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id)
    .slice(0, 3);

  // Copy link handler
  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const shareUrl = encodeURIComponent(window.location.href);
  const shareTitle = encodeURIComponent(post.title);

  return (
    <div className="blog-detail-page">
      {/* ===== ARTICLE HEADER ===== */}
      <header className="article-header">
        <div className="container article-header-inner">
          <div className="article-breadcrumbs">
            <Link to="/">Beranda</Link>
            <i className="bi bi-chevron-right"></i>
            <Link to="/blog">Blog</Link>
            <i className="bi bi-chevron-right"></i>
            <span className="breadcrumb-current">{post.category}</span>
          </div>

          <Link to="/blog" className="back-to-blog-link">
            <i className="bi bi-arrow-left"></i>
            <span>Semua Artikel</span>
          </Link>

          <span className="article-category-badge">{post.category}</span>
          <h1 className="article-main-title">{post.title}</h1>

          <div className="article-meta-bar">
            <div className="article-author-box">
              <i className={`bi ${post.author.avatar} author-icon`}></i>
              <div>
                <span className="meta-author-name">{post.author.name}</span>
                <span className="meta-author-role">{post.author.role}</span>
              </div>
            </div>

            <div className="article-meta-info">
              <span><i className="bi bi-calendar3"></i> {post.date}</span>
              <span className="meta-dot">•</span>
              <span><i className="bi bi-clock"></i> {post.readTime}</span>
            </div>

            <div className="article-share-group">
              <span className="share-label">Bagikan:</span>
              <a
                href={`https://api.whatsapp.com/send?text=${shareTitle}%20${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="share-btn wa"
                title="Bagikan ke WhatsApp"
              >
                <i className="bi bi-whatsapp"></i>
              </a>
              <a
                href={`https://twitter.com/intent/tweet?text=${shareTitle}&url=${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="share-btn x"
                title="Bagikan ke X / Twitter"
              >
                <i className="bi bi-twitter-x"></i>
              </a>
              <button
                onClick={handleCopyLink}
                className="share-btn copy"
                title="Salin tautan artikel"
              >
                <i className={`bi ${copied ? 'bi-check-lg text-success' : 'bi-link-45deg'}`}></i>
              </button>
              {copied && <span className="copy-toast">Tersalin!</span>}
            </div>
          </div>
        </div>
      </header>

      {/* ===== FEATURED IMAGE ===== */}
      <div className="container article-image-container">
        <div className="article-featured-image-wrapper">
          <img src={post.image} alt={post.title} className="article-featured-image" />
        </div>
      </div>

      {/* ===== ARTICLE BODY & SIDEBAR ===== */}
      <div className="container article-body-container">
        <div className="article-layout">
          {/* Main Content */}
          <main className="article-content">
            <div className="article-lead-paragraph">
              {post.excerpt}
            </div>

            <div className="article-rich-text">
              {post.content.map((block, idx) => {
                if (block.type === 'heading') {
                  return <h2 key={idx} className="article-subheading">{block.text}</h2>;
                }
                if (block.type === 'quote') {
                  return (
                    <blockquote key={idx} className="article-quote-card">
                      <i className="bi bi-quote quote-icon"></i>
                      <p>{block.text}</p>
                      {block.author && <cite>— {block.author}</cite>}
                    </blockquote>
                  );
                }
                return <p key={idx} className="article-paragraph">{block.text}</p>;
              })}
            </div>

            {/* Article Tags */}
            <div className="article-tags-box">
              <span className="tags-label"><i className="bi bi-tags-fill"></i> Topik:</span>
              <div className="tags-list">
                {post.tags.map((tag, idx) => (
                  <span className="article-tag" key={idx}>#{tag}</span>
                ))}
              </div>
            </div>

            {/* Author Profile Box */}
            <div className="article-author-card">
              <i className={`bi ${post.author.avatar} author-card-avatar`}></i>
              <div className="author-card-content">
                <h4>Ditulis oleh {post.author.name}</h4>
                <p className="author-card-role">{post.author.role}</p>
                <p className="author-card-bio">
                  Berpengalaman dalam riset jaringan telekomunikasi, arsitektur fiber optic, dan sistem redundansi internet di Indonesia.
                </p>
              </div>
            </div>

            {/* Navigation between articles */}
            <div className="article-bottom-nav">
              <Link to="/blog" className="btn article-btn-back">
                <i className="bi bi-arrow-left"></i>
                <span>Kembali ke Daftar Artikel</span>
              </Link>
              <Link to="/contact" className="btn article-btn-contact">
                <i className="bi bi-headset"></i>
                <span>Konsultasi Jaringan</span>
              </Link>
            </div>
          </main>

          {/* Sidebar */}
          <aside className="article-sidebar">
            <div className="sidebar-widget promo-widget">
              <div className="promo-widget-badge">
                <i className="bi bi-stars"></i> Promo MITRAXCON
              </div>
              <h3>Pasang Internet Fiber Optic Hari Ini</h3>
              <p>Dapatkan diskon langganan hingga 50% dan gratis biaya pasang untuk rumah &amp; bisnis Anda.</p>
              <ul className="promo-widget-perks">
                <li><i className="bi bi-check2-circle"></i> Kecepatan hingga 1 Gbps</li>
                <li><i className="bi bi-check2-circle"></i> Kuota Unlimited Tanpa FUP</li>
                <li><i className="bi bi-check2-circle"></i> Dukungan NOC 24/7</li>
              </ul>
              <Link to="/services" className="btn btn-accent btn-block">
                Lihat Paket Internet
              </Link>
            </div>
          </aside>
        </div>
      </div>

      {/* ===== RELATED POSTS ===== */}
      <section className="related-posts-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Rekomendasi Wawasan</span>
            <h2 className="section-title">Artikel Terkait Lainnya</h2>
          </div>
          <div className="related-posts-grid">
            {relatedPosts.map((rPost) => (
              <article className="blog-card" key={rPost.id}>
                <Link to={`/blog/${rPost.slug}`} className="blog-card-img-link">
                  <div className="blog-card-img-wrapper">
                    <img src={rPost.image} alt={rPost.title} className="blog-card-img" />
                    <span className="blog-card-category">{rPost.category}</span>
                  </div>
                </Link>
                <div className="blog-card-content">
                  <div className="blog-card-meta">
                    <span><i className="bi bi-calendar3"></i> {rPost.date}</span>
                    <span className="meta-sep">•</span>
                    <span><i className="bi bi-clock"></i> {rPost.readTime}</span>
                  </div>
                  <h3 className="blog-card-title">
                    <Link to={`/blog/${rPost.slug}`}>{rPost.title}</Link>
                  </h3>
                  <p className="blog-card-excerpt">{rPost.excerpt}</p>
                  <div className="blog-card-footer">
                    <div className="card-author">
                      <i className={`bi ${rPost.author.avatar}`}></i>
                      <span>{rPost.author.name}</span>
                    </div>
                    <Link to={`/blog/${rPost.slug}`} className="card-arrow-link" aria-label={`Baca ${rPost.title}`}>
                      <i className="bi bi-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;
