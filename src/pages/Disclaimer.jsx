import React from "react";

function Disclaimer() {
  return (
    <section className="section-padding"  style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
    <div className="container">
      <h2 className="mb-4 text-center" style={{ color: 'var(--text-primary)' }}>Disclaimer</h2>

      <div className="row">
        <div className="col-12">
          <div className="card card-custom">
            <div className="card-body">
              <h5 className="card-title mb-4" style={{ color: 'var(--text-primary)' }}>Legal Information</h5>
              
              <div className="mb-4">
                <h6 style={{ color: 'var(--text-primary)' }}>Website Disclaimer</h6>
                <p style={{ color: 'var(--text-secondary)' }}>
                  The information provided on this website is for general informational purposes only. 
                  While we strive to keep the information up to date and correct, we make no representations 
                  or warranties of any kind, express or implied, about the completeness, accuracy, reliability, 
                  suitability, or availability of the information, products, services, or related graphics 
                  contained on the website for any purpose.
                </p>
              </div>

              <div className="mb-4">
                <h6 style={{ color: 'var(--text-primary)' }}>External Links</h6>
                <p style={{ color: 'var(--text-secondary)' }}>
                  Our website may contain links to external websites that are not provided or maintained by us. 
                  We do not guarantee the accuracy, relevance, timeliness, or completeness of any information 
                  on these external websites. The inclusion of any links does not necessarily imply a recommendation 
                  or endorse the views expressed within them.
                </p>
              </div>

              <div className="mb-4">
                <h6 style={{ color: 'var(--text-primary)' }}>Limitation of Liability</h6>
                <p style={{ color: 'var(--text-secondary)' }}>
                  In no event shall we be liable for any loss or damage including without limitation, 
                  indirect or consequential loss or damage, arising from loss of data or profits arising 
                  out of, or in connection with, the use of this website.
                </p>
              </div>

              <div className="mb-4">
                <h6 style={{ color: 'var(--text-primary)' }}>Privacy Policy</h6>
                <p style={{ color: 'var(--text-secondary)' }}>
                  Your privacy is important to us. Please review our Privacy Policy, which also governs 
                  your use of the website, to understand our practices regarding the collection and use 
                  of your personal information.
                </p>
              </div>

              <div className="mb-4">
                <h6 style={{ color: 'var(--text-primary)' }}>Contact Information</h6>
                <p style={{ color: 'var(--text-secondary)' }}>
                  If you have any questions about this disclaimer, please contact us using the information 
                  provided on our contact page.
                </p>
              </div>

              <div className="text-center">
                <button className="btn btn-primary-custom me-2">
                  <i className="bi bi-file-text me-2"></i>
                  Download Full Disclaimer
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

export default Disclaimer;
