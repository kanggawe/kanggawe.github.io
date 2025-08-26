import React from "react";
import "../assets/css/Legal.css";

function Disclaimer() {
  return (
    <div className="legal-page">
      <div className="container">
        {/* Header */}
        <div className="legal-header">
          <h1 className="legal-title">⚠️ Disclaimer</h1>
          <p className="legal-subtitle">Informasi Legal ESANET</p>
        </div>

        {/* Content */}
        <div className="legal-container">
          <div className="legal-card">
            <div className="legal-section">
              <h2 className="legal-section-title">Website Disclaimer</h2>
              <p className="legal-section-content">
                The information provided on this website is for general informational purposes only. 
                While we strive to keep the information up to date and correct, we make no representations 
                or warranties of any kind, express or implied, about the completeness, accuracy, reliability, 
                suitability, or availability of the information, products, services, or related graphics 
                contained on the website for any purpose.
              </p>
            </div>

            <div className="legal-section">
              <h2 className="legal-section-title">External Links</h2>
              <p className="legal-section-content">
                Our website may contain links to external websites that are not provided or maintained by us. 
                We do not guarantee the accuracy, relevance, timeliness, or completeness of any information 
                on these external websites. The inclusion of any links does not necessarily imply a recommendation 
                or endorse the views expressed within them.
              </p>
            </div>

            <div className="legal-section">
              <h2 className="legal-section-title">Limitation of Liability</h2>
              <p className="legal-section-content">
                In no event shall we be liable for any loss or damage including without limitation, 
                indirect or consequential loss or damage, arising from loss of data or profits arising 
                out of, or in connection with, the use of this website.
              </p>
            </div>

            <div className="legal-section">
              <h2 className="legal-section-title">Privacy Policy</h2>
              <p className="legal-section-content">
                Your privacy is important to us. Please review our Privacy Policy, which also governs 
                your use of the website, to understand our practices regarding the collection and use 
                of your personal information.
              </p>
            </div>

            <div className="legal-section">
              <h2 className="legal-section-title">Contact Information</h2>
              <p className="legal-section-content">
                If you have any questions about this disclaimer, please contact us using the information 
                provided on our contact page.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="legal-actions">
              <button className="legal-btn">
                <i className="bi bi-file-text legal-btn-icon"></i>
                Download Full Disclaimer
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

export default Disclaimer;
