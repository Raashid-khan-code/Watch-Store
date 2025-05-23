function WhyUs() {
  return (
    <div className="container-fluid my-4 why-us-section">
      <style>{`
        .why-us-section {
          min-height: 150px;
          padding-top: 20px;
          padding-bottom: 20px;
        }

        .why-icon i {
          font-size: 28px;
          color: black;
          transition: transform 0.3s ease-in-out;
        }

        .why-icon:hover i {
          transform: translateY(-8px);
        }

        .why-us-section p {
          color: black;
          font-weight: 500;
          font-size: 15px;
          margin-bottom: 0;
        }

        .why-us-section .row {
          display: flex;
          align-items: center;
        }
      `}</style>

      <h2 className="text-center mb-4">Why Choose Us</h2>
      <div className="row text-center">
        {/* Trust */}
        <div className="col-6 col-md-3 mb-4">
          <div className="why-icon">
            <i className="bi bi-shield-check"></i>
          </div>
          <p className="mt-2">Trust</p>
        </div>

        {/* Quality */}
        <div className="col-6 col-md-3 mb-4">
          <div className="why-icon">
            <i className="bi bi-gem"></i>
          </div>
          <p className="mt-2">Quality</p>
        </div>

        {/* Secure Payments */}
        <div className="col-6 col-md-3 mb-4">
          <div className="why-icon">
            <i className="bi bi-shield-lock"></i>
          </div>
          <p className="mt-2">Secure Payments</p>
        </div>

        {/* Fast Delivery */}
        <div className="col-6 col-md-3 mb-4">
          <div className="why-icon">
            <i className="bi bi-truck"></i>
          </div>
          <p className="mt-2">Fast Delivery</p>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;

