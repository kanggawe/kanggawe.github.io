import React from "react";
import "../assets/css/priceList.css"

function Iklan() {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="display-4">Our Pricing Plans</h1>
        <p className="lead">Choose a plan that suits your needs</p>
      </div>

      <div className="row g-4">
        {/* Basic Plan */}
        <div className="col-lg-4">
          <div className="card pricing-card shadow-sm">
            <div className="card-header text-center pricing-header py-5">
              <h2>Basic</h2>
              <h1 className="display-3">$9</h1>
              <p className="lead">per month</p>
            </div>
            <div className="card-body text-center">
              <ul className="list-unstyled">
                <li>10 GB Storage</li>
                <li>100 Emails</li>
                <li>24/7 Support</li>
              </ul>
              <a href="#" className="btn btn-outline-primary">Get Started</a>
            </div>
          </div>
        </div>

        {/* Standard Plan */}
        <div className="col-lg-4">
          <div className="card pricing-card shadow-sm">
            <div className="card-header text-center pricing-header py-5">
              <h2>Standard</h2>
              <h1 className="display-3">$29</h1>
              <p className="lead">per month</p>
            </div>
            <div className="card-body text-center">
              <ul className="list-unstyled">
                <li>50 GB Storage</li>
                <li>500 Emails</li>
                <li>Priority Support</li>
              </ul>
              <a href="#" className="btn btn-outline-primary">Get Started</a>
            </div>
          </div>
        </div>

        {/* Premium Plan */}
        <div className="col-lg-4">
          <div className="card pricing-card shadow-sm">
            <div className="card-header text-center pricing-header py-5">
              <h2>Premium</h2>
              <h1 className="display-3">$99</h1>
              <p className="lead">per month</p>
            </div>
            <div className="card-body text-center">
              <ul className="list-unstyled">
                <li>Unlimited Storage</li>
                <li>Unlimited Emails</li>
                <li>Dedicated Support</li>
              </ul>
              <a href="#" className="btn btn-outline-primary">Get Started</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Iklan;
