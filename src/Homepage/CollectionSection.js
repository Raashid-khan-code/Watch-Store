import React from 'react';
import img1 from '../img/HCS 1.jpg';
import img2 from '../img/HCS 2.jpg';
import img3 from '../img/HCS 3.jpg';
import img4 from '../img/HCS 4.jpg';
import img5 from '../img/HCS 5.jpg';
import img6 from '../img/HCS 6.jpg';
import img7 from '../img/HCS 7.jpg';
import img8 from '../img/HCS 8.jpg';
import { Link } from 'react-router-dom';

const collections = [
  { id: 1, name: 'Quartz', image: img1 },
  { id: 2, name: 'Chronograph', image: img2 },
  { id: 3, name: 'Dive Watches', image: img3 },
  { id: 4, name: 'Automatic', image: img4 },
  { id: 5, name: 'Luxury GMTs', image: img5 },
  { id: 6, name: 'Dress Watches', image: img6 },
  { id: 7, name: 'Hybrid', image: img7 },
  { id: 8, name: 'World Time', image: img8 },
];

function CollectionSection() {
  return (
    <>
      <style>{`
        .collection-section {
          background-color: #000;
          color: #fff;
          padding: 4rem 0;
        }

        .collection-heading {
          text-align: center;
          margin-bottom: 2rem;
        }

        .collection-subheadline {
          font-size: 1.3rem;
          font-weight: 300;
          font-family: 'Poppins', sans-serif;
          color: #ffffff;
        }

        .collection-headline {
          font-size: 2.2rem;
          font-weight: 300;
          font-family: 'Poppins', sans-serif;
          color: #ffffff;
        }

        .collection-image-container {
          position: relative;
          overflow: hidden;
          height: 300px; /* Increased height */
          border-radius: 8px;
        }

        .collection-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease-in-out;
        }

        .collection-overlay {
          position: absolute;
          inset: 0;
          background-color: rgba(0, 0, 0, 0.3);
          transition: background-color 0.4s ease-in-out;
        }

        .collection-name {
          position: absolute;
          bottom: 1rem;
          left: 1rem;
          font-family: 'Poppins', sans-serif;
          font-size: 1.1rem;
          font-weight: 300;
          color: white;
        }

        .collection-name::after {
          content: "";
          display: block;
          height: 2px;
          background: white;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease-in-out;
        }

        .collection-image-container:hover .collection-name::after {
          transform: scaleX(1);
        }

        .collection-image-container:hover .collection-image {
          transform: scale(1.08);
        }

        .collection-image-container:hover .collection-overlay {
          background-color: rgba(0, 0, 0, 0.5);
        }

        @media (max-width: 767.98px) {
          .collection-image-container {
            height: 250px; /* Increased for mobile */
          }
          .collection-wrapper {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
      `}</style>

      <section className="collection-section">
        <div className="container-fluid px-md-5 collection-wrapper">
          <div className="collection-heading">
            <p className="collection-subheadline">Shop from our latest collection of watches</p>
            <h2 className="collection-headline">Explore Timeless Styles Like Dive, Chronograph, Vintage & More</h2>
          </div>
          <div className="row row-cols-2 row-cols-md-4 g-4">
            {collections.map((col) => (
              <div className="col" key={col.id}>
                <Link to="/watches"><div className="collection-image-container">
                  <img src={col.image} alt={col.name} className="collection-image" />
                  <div className="collection-overlay"></div>
                  <span className="collection-name">{col.name}</span>
                </div></Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default CollectionSection;
