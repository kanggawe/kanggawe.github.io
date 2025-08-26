
import React from "react";
import "../assets/css/Legal.css";

function TermsOfService() {
  return (
    <div className="legal-page">
      <div className="container">
        {/* Header */}
        <div className="legal-header">
          <h1 className="legal-title">📄 Terms of Service</h1>
          <p className="legal-subtitle">Ketentuan Layanan ESANET</p>
        </div>

        {/* Content */}
        <div className="legal-container">
          <div className="legal-card">
            <div className="legal-section">
              <h2 className="legal-section-title">Acceptance of Terms</h2>
              <p className="legal-section-content">
                By accessing or using our website, you agree to be bound by these terms.
              </p>
            </div>

            <div className="legal-section">
              <h2 className="legal-section-title">Use of Site</h2>
              <p className="legal-section-content">
                You agree to use the site for lawful purposes only and not to violate any laws or regulations.
              </p>
            </div>

            <div className="legal-section">
              <h2 className="legal-section-title">Intellectual Property</h2>
              <p className="legal-section-content">
                All content on this site is owned by us or our licensors and is protected by copyright laws.
              </p>
            </div>

            <div className="legal-section">
              <h2 className="legal-section-title">Limitation of Liability</h2>
              <p className="legal-section-content">
                We are not liable for any damages arising from your use of the site.
              </p>
            </div>

            <div className="legal-section">
              <h2 className="legal-section-title">Changes to Terms</h2>
              <p className="legal-section-content">
                We may update these terms at any time. Continued use of the site means you accept the changes.
              </p>
            </div>

            <div className="legal-section">
              <h2 className="legal-section-title">Contact Information</h2>
              <p className="legal-section-content">
                If you have any questions, please contact us using the information provided on our contact page.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="legal-actions">
              <button className="legal-btn">
                <i className="bi bi-file-text legal-btn-icon"></i>
                Download Full Terms
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

export default TermsOfService;
