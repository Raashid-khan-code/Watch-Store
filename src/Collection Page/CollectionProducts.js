
import banner from '../img/Why Wear Watch.jpg';
import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

// Importing images
import img1 from '../img/SW1.png';
import img2 from '../img/SW1.png';
import img3 from '../img/SW1.png';
import img4 from '../img/SW1.png';
import img5 from '../img/SW1.png';
import img6 from '../img/SW1.png';

const initialWatchData = [
  { id: 1, name: 'Omega Speedmaster', image: img1, mrp: '₹3,25,000', movement: 'Automatic', caseSize: '42mm', dialColor: 'Black', style: 'Sport', material: 'Steel', caseHeight: '12mm', strap: 'Leather' },
  { id: 2, name: 'Rolex Submariner', image: img2, mrp: '₹8,40,000', movement: 'Automatic', caseSize: '40mm', dialColor: 'Black', style: 'Diver', material: 'Steel', caseHeight: '13mm', strap: 'Steel' },
  { id: 3, name: 'Seiko GMT', image: img3, mrp: '₹65,000', movement: 'Quartz', caseSize: '44mm', dialColor: 'Blue', style: 'Casual', material: 'Titanium', caseHeight: '11mm', strap: 'Rubber' },
  { id: 4, name: 'Tudor Black Bay', image: img4, mrp: '₹2,10,000', movement: 'Automatic', caseSize: '41mm', dialColor: 'Red', style: 'Diver', material: 'Steel', caseHeight: '14mm', strap: 'NATO' },
  { id: 5, name: 'Tag Heuer Carrera', image: img5, mrp: '₹3,90,000', movement: 'Automatic', caseSize: '43mm', dialColor: 'Silver', style: 'Dress', material: 'Steel', caseHeight: '12mm', strap: 'Leather' },
  { id: 6, name: 'Casio G-Shock', image: img6, mrp: '₹15,000', movement: 'Digital', caseSize: '45mm', dialColor: 'Black', style: 'Sport', material: 'Plastic', caseHeight: '16mm', strap: 'Resin' },
];

const filterOptions = {
  movement: ['Automatic', 'Quartz', 'Digital', 'Mechanical'],
  caseSize: ['40mm', '41mm', '42mm', '43mm'],
  dialColor: ['Black', 'Blue', 'Silver', 'Red'],
  style: ['Sport', 'Dress', 'Diver', 'Casual'],
  material: ['Steel', 'Titanium', 'Plastic', 'Gold'],
  caseHeight: ['11mm', '12mm', '13mm', '14mm'],
  strap: ['Leather', 'Steel', 'Rubber', 'Resin']
};

function Rolex() {
  const [filters, setFilters] = useState({});
  const [sortOrder, setSortOrder] = useState('Relevance');
  const [scrollIndex, setScrollIndex] = useState(0);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const [openSections, setOpenSections] = useState(() =>
    Object.keys(filterOptions).reduce((acc, key) => ({ ...acc, [key]: false }), {})
  );  

  const toggleFilter = (category, value) => {
    setFilters(prev => {
      const existing = prev[category] || [];
      const newValues = existing.includes(value)
        ? existing.filter(v => v !== value)
        : [...existing, value];
      return { ...prev, [category]: newValues };
    });
  };

  const applyFilters = (watches) => {
    return watches.filter(watch =>
      Object.entries(filters).every(([category, selectedValues]) =>
        selectedValues.length === 0 || selectedValues.includes(watch[category])
      )
    );
  };

  const toggleSection = (sectionKey) => {
    setOpenSections(prev => ({
      ...prev,
      [sectionKey]: !prev[sectionKey]
    }));
  };

  const applySorting = (watches) => {
    const sorted = [...watches];
    switch (sortOrder) {
      case 'Price: Low to High':
        return sorted.sort((a, b) => getPrice(a.mrp) - getPrice(b.mrp));
      case 'Price: High to Low':
        return sorted.sort((a, b) => getPrice(b.mrp) - getPrice(a.mrp));
      default:
        return sorted; // Relevance or Best Selling (default order)
    }
  };

  const getPrice = (mrp) => parseInt(mrp.replace(/[^0-9]/g, ''));

  const filteredData = applySorting(applyFilters(initialWatchData));

  const youMayAlsoLike = initialWatchData.slice(scrollIndex, scrollIndex + 5);

  return (
    <div>
      <style>{`
      .body {
        font-family: 'Poppins', sans-serif;
      }

        .watch-image {
          width: 100%;
          aspect-ratio: 1 / 1;
          object-fit: cover;
          transition: transform 0.3s ease-in-out;
        }

        .link{
          text-decoration: none !important;
        }

        .card:hover .watch-image {
          transform: translateY(-10px);
        }

        .card {
          border: none !important;
          
        }

        .card-body {
          text-align: center;
        }

        .mrp {
          font-weight: 500;
          font-size: 1.22rem;
          margin-bottom: 0.25rem;
        }

        .whywear-section {
          width: 100%;
          position: relative;
          overflow: hidden;
          max-height: 100vh;
        }

        .whywear-img {
          width: 100%;
          height: 300px;
          object-fit: cover;
          object-position: center;
          filter: brightness(0.75);
        }

        .overlay-content {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(37, 36, 36, 0.7);
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          z-index: 1;
        }

        .subheadline {
          font-family: 'Poppins', sans-serif;
          font-weight: 400;
          color: white;
          font-size: 2rem;
          letter-spacing: 5px;
          text-transform: uppercase;
        }

        .row.gx-0 { /* Target the specific row with gx-0 class */
          padding-left: 2rem; /* Adjust this value to control the spacing on the left */
        }

        .filter-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: black;
          font-family: 'Poppins', sans-serif;
        }

        .filter-panel {
          padding: 1rem;
          margin-bottom: 1rem;
          font-family: 'Poppins', sans-serif;
          font-weight: 400;
        }

        .filter-toggle-icon {
          transition: transform 0.3s ease-in-out;
        }

        .filter-toggle-icon.open {
          transform: rotate(180deg);
        }

        .filter-panel button {
          color: black;
          display: flex;
          align-items: center;
          padding-left: 0;
          font-weight: bold;
          font-size: 1rem;
          text-decoration: none;
          justify-content: space-between;
        }

        .filter-panel button span {
          margin-left: 8px;
        }

        .filter-panel button:focus {
          outline: none;
        }

        .filter-panel div {
          padding-left: 20px;
        }

        .form-select{
          background-color: #252525;
          color: #ffffff;
          font-family: 'Poppins', sans-serif;
        }

        @media (max-width: 767.98px) {
          .sidebar-filters {
            order: 2;
            margin-top: 1rem;
            margin-left: 0;
            padding-left: 1rem;
          }

          .sort-dropdown {
            order: 1;
            margin-bottom: 1rem;         
          }
        }

        @media (max-width: 767.98px) {
          .filter-title {
            display: none;
          }

          .sidebar-filters {
            padding-right: 1rem;
          }
        }

        .carousel-scroll {
          display: flex;
          overflow-x: auto;
          scroll-behavior: smooth;
          gap: 1rem;
        }

        .carousel-controls {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .carousel-btn {
          border: none;
          background: none;
          font-size: 1.5rem;
        }
      `}</style>

      <div className="whywear-section">
        <img src={banner} alt="Why Wear Watches" className="whywear-img" />
        <div className="overlay-content">
          <div className="subheadline">Watches</div>
        </div>
      </div>


      <div className="container mt-4">
        <button
          className="btn btn-outline-dark w-100 text-start"
          onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Filters
          <span className="float-end">
            <i className={`bi ${mobileFilterOpen ? 'bi-chevron-up' : 'bi-chevron-down'}`}></i>
          </span>
        </button>

        {mobileFilterOpen && (
          <div className="mt-3">
            {Object.entries(filterOptions).map(([key, values]) => (
              <div className="filter-panel" key={key}>
                <button
                  className="btn border-0 p-0 text-start w-100"
                  type="button"
                  onClick={() => toggleSection(key)}
                >
                  {key.replace(/^\w/, c => c.toUpperCase())}
                  <span className={`filter-toggle-icon ${openSections[key] ? 'open' : ''}`}>
                    <i className="bi bi-chevron-down"></i>
                  </span>
                </button>
                {openSections[key] && (
                  <div className="pt-2">
                    {values.map(option => (
                      <div key={option} className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          checked={filters[key]?.includes(option) || false}
                          onChange={() => toggleFilter(key, option)}
                          id={`desktop-${key}-${option}`}
                        />
                        <label className="form-check-label" htmlFor={`desktop-${key}-${option}`}>
                          {option}
                        </label>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="container-fluid py-5">
        <div className="row gx-0">
          {/* Product Grid */}
          <div className="col-lg-12">
            <div className="d-flex justify-content-end sort-dropdown mb-3 me-3">
              <select
                className="form-select w-auto"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <option>Relevance</option>
                <option>Best Selling</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
            <div className="row row-cols-2 row-cols-md-4 g-4">
              {filteredData.map(watch => (
                <div className="col" key={watch.id}>
                  <Link to="/watch_sku" className="link"><div className="card h-100">
                    <img src={watch.image} className="card-img-top watch-image" alt={watch.name} />
                    <div className="card-body">                      
                      <h5 className="card-title">{watch.name}</h5>
                      <p className="mrp">{watch.mrp}</p>
                    </div>
                  </div></Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rolex;
