
import watch from "../img/SW1.png";
import watch1 from "../img/SW1.png";
import React, { useRef } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';

const initialWatchData = [
  { image: watch1, mrp: '₹ 5,000', name: 'Watch 1' },
  { image: watch1, mrp: '₹ 6,000', name: 'Watch 2' },
  { image: watch1, mrp: '₹ 6,000', name: 'Watch 2' },
  { image: watch1, mrp: '₹ 6,000', name: 'Watch 2' },
  { image: watch1, mrp: '₹ 6,000', name: 'Watch 2' },
  { image: watch1, mrp: '₹ 6,000', name: 'Watch 2' },
  // Add more watches here
];

const youMayAlsoLike = initialWatchData;

function ProductSKU() {
  const scrollRef = useRef(null);

  const handleLeftClick = () => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.firstChild.offsetWidth + 16; // +gap
      scrollRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" });
    }
  };
  
  const handleRightClick = () => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.firstChild.offsetWidth + 16; // +gap
      scrollRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
    }
  };
  
  return (
    <div style={{ fontFamily: "Poppins, sans-serif" }}>
      <div className="container py-4">
        <div className="row">
          {/* Image & Breadcrumb */}
          <div className="col-12 col-md-5 mb-4">
            <nav aria-label="breadcrumb" className="mb-3">
              <ol className="breadcrumb">
                <style>{`.breadcrumb a:hover { color:rgb(95, 93, 93) !important; }`}</style>
                <li className="breadcrumb-item"><Link to="/" style={{ textDecoration: 'none', color: 'black' }}>Home</Link></li>
                <li className="breadcrumb-item"><Link to="/collection" style={{ textDecoration: 'none', color: 'black' }}>Collection</Link></li>
                <li className="breadcrumb-item"><Link to="/watches" style={{ textDecoration: 'none', color: 'black' }}>Watches</Link></li>
                <li className="breadcrumb-item active" aria-current="page" style={{ color: 'black' }}>Watch</li>
              </ol>
            </nav>
            <div className="overflow-hidden">
              <style>{` .product-image { transition: transform 0.5s ease; cursor: zoom-in;}
              .product-image:hover { transform: scale(1.08); } `}</style>
              <img src={watch} alt="Watch" className="img-fluid product-image" />
            </div>

          </div>

          {/* Product Info */}
          <div className="col-12 col-md-7">
            <h1>Premium Wrist Watch</h1>
            <h4>₹ 9,999/-</h4>
            <button type="button" className="btn btn-outline-dark btn-lg my-3">Add To Cart</button>

            <p>
              A wristwatch is a small, portable timepiece designed to be worn on the wrist, typically attached by a strap or band. It displays the time using either hands (analog) or a digital display. These timepieces are a convenient way to keep track of time throughout the day.
            </p>

            {/* Icons Row */}
            <div className="row text-center my-4">
              {[
                { icon: "bi-shield-check", label: "Trust" },
                { icon: "bi-gem", label: "Quality" },
                { icon: "bi-shield-lock", label: "Secure Payments" },
                { icon: "bi-truck", label: "Fast Delivery" },
              ].map((item, index) => (
                <div key={index} className="col-6 col-md-3 mb-3">
                  <i className={`bi ${item.icon} fs-3`}></i>
                  <p className="mt-2">{item.label}</p>
                </div>
              ))}
            </div>

            {/* Accordion */}
            <div className="accordion accordion-flush" id="productAccordion">
              {[
                {
                  id: "One",
                  title: "Product Details",
                  content: ["Case: Stainless Steel", "Strap: Metal", "Movement: Automatic", "Water Resistance: 300m"],
                },
                {
                  id: "Two",
                  title: "Shipping",
                  content: [
                    "Orders are processed within 1–2 business days.",
                    "Standard shipping takes 3–7 business days depending on your location.",
                    "Tracking details will be emailed once your order ships.",
                  ],
                },
                {
                  id: "Three",
                  title: "Returns & Exchanges",
                  content: [
                    "Returns accepted within 7 days of delivery.",
                    "Item must be unused and in original packaging.",
                    "Exchanges available for sizing or defect issues.",
                  ],
                },
                {
                  id: "Four",
                  title: "Premium Box Includes",
                  content: ["1 x Watch", "User Manual", "Warranty Card"],
                },
              ].map((item, index) => (
                <div className="accordion-item" key={index}>
                  <h2 className="accordion-header" id={`flush-heading${item.id}`}>
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#flush-collapse${item.id}`}
                      aria-expanded="false"
                      aria-controls={`flush-collapse${item.id}`}
                    >
                      {item.title}
                    </button>
                  </h2>
                  <div
                    id={`flush-collapse${item.id}`}
                    className="accordion-collapse collapse"
                    data-bs-parent="#productAccordion"
                  >
                    <div className="accordion-body">
                      <ul className="mb-0">
                        {item.content.map((line, i) => (
                          <li key={i}>{line}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* You May Also Like Section */}
      <div className="container py-5">
        <h5 className="text-center mb-4">You May Also Like</h5>

        <div className="position-relative mx-auto" style={{ maxWidth: '1000px' }}>
          {/* Scrollable Card Container */}
          <div
            ref={scrollRef}
            className="d-flex overflow-auto align-items-stretch"
            style={{
              scrollBehavior: 'smooth',
              padding: '0 16px',
              gap: '16px',
              scrollSnapType: 'x mandatory',
            }}
          >
            {initialWatchData.map((watch, index) => (
              <div
                className="card border-0"
                key={index}
                style={{
                  flex: '0 0 auto',
                  scrollSnapAlign: 'start',
                  width: '80%', // default mobile
                  maxWidth: '320px', // cap max size for larger screens
                }}
              >
                <div style={{ height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <Link to="/watch_sku"><img
                    src={watch.image}
                    alt={watch.name}
                    style={{
                      maxHeight: '100%',
                      maxWidth: '100%',
                      objectFit: 'contain',
                    }}
                  /></Link>
                </div>

                <div className="card-body text-center">
                  <p className="mrp">{watch.mrp}</p>
                  <h5 className="card-title">{watch.name}</h5>
                </div>
              </div>
            ))}
          </div>

          {/* Left Button */}
          <button
            className="btn btn-outline-dark position-absolute"
            onClick={handleLeftClick}
            style={{
              top: '50%',
              transform: 'translateY(-50%)',
              left: '0',
              zIndex: 10,
            }}
          >
            <i className="bi bi-chevron-left" />
          </button>

          {/* Right Button */}
          <button
            className="btn btn-outline-dark position-absolute"
            onClick={handleRightClick}
            style={{
              top: '50%',
              transform: 'translateY(-50%)',
              right: '0',
              zIndex: 10,
            }}
          >
            <i className="bi bi-chevron-right" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductSKU;