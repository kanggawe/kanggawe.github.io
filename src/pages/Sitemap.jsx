import React from "react";

function Sitemap()  {
  const pages = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Sitemap</h2>
      <div className="row">
        {pages.map((page, index) => (
          <div className="col-md-4 mb-3" key={index}>
            <div className="card h-100">
              <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title">{page.name}</h5>
                <a href={page.path} className="btn btn-primary mt-auto">
                  Go to {page.name}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sitemap;
