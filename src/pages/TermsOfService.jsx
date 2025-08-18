
import React from "react";
// import "../assets/css/terms-privacy.css";

function TermsOfService() {
  return (
    <section className="section-padding" >
      <div className="container">
        <h2 className="mb-4 text-center" style={{ color: '#0af' }}>📄 Terms of Service</h2>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card card-custom rounded-4 shadow">
              <div className="card-body">
                <h5 className="card-title mb-4" style={{ color: '#0af' }}>Legal Terms</h5>
                <div className="mb-4">
                  <h6 style={{ color: '#eee' }}>Acceptance of Terms</h6>
                  <p style={{ color: '#ccc' }}>By accessing or using our website, you agree to be bound by these terms.</p>
                </div>
                <div className="mb-4">
                  <h6 style={{ color: '#eee' }}>Use of Site</h6>
                  <p style={{ color: '#ccc' }}>You agree to use the site for lawful purposes only and not to violate any laws or regulations.</p>
                </div>
                <div className="mb-4">
                  <h6 style={{ color: '#eee' }}>Intellectual Property</h6>
                  <p style={{ color: '#ccc' }}>All content on this site is owned by us or our licensors and is protected by copyright laws.</p>
                </div>
                <div className="mb-4">
                  <h6 style={{ color: '#eee' }}>Limitation of Liability</h6>
                  <p style={{ color: '#ccc' }}>We are not liable for any damages arising from your use of the site.</p>
                </div>
                <div className="mb-4">
                  <h6 style={{ color: '#eee' }}>Changes to Terms</h6>
                  <p style={{ color: '#ccc' }}>We may update these terms at any time. Continued use of the site means you accept the changes.</p>
                </div>
                <div className="mb-4">
                  <h6 style={{ color: '#eee' }}>Contact Information</h6>
                  <p style={{ color: '#ccc' }}>If you have any questions, please contact us using the information provided on our contact page.</p>
                </div>
                <div className="text-center">
                  <button className="btn btn-primary-custom me-2">
                    <i className="bi bi-file-text me-2"></i>
                    Download Full Terms
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

export default TermsOfService;
