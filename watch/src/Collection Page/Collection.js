import img1 from '../img/CS 1.jpg';
import img2 from '../img/CS 2.jpg';
import img3 from '../img/CS 3.jpg';
import img4 from '../img/CS 4.jpg';
import img5 from '../img/CS 5.jpg';
import img6 from '../img/CS 6.jpg';
import img7 from '../img/CS 7.jpg';
import img8 from '../img/CS 8.jpg';
import img9 from '../img/CS 9.jpg';
import img10 from '../img/CS 10.jpg';
import img11 from '../img/CS 11.jpg';
import img12 from '../img/CS 12.jpg';
import img13 from '../img/CS 13.jpg';
import img14 from '../img/CS 14.jpg';
import img15 from '../img/CS 15.jpg';
import img16 from '../img/CS 16.jpg';
import React from 'react';      
import { Link } from 'react-router-dom';


function Collection(){
  const collections = [
  { id: 1, name: 'Quartz', image: img1 },
  { id: 2, name: 'Automatic', image: img2 },
  { id: 3, name: 'Chronograph', image: img3 },
  { id: 4, name: 'Dress Watches', image: img4 },
  { id: 5, name: 'Divers', image: img5 },
  { id: 6, name: 'Luxury GMTs', image: img6 },
  { id: 7, name: 'Hybrid', image: img7 },
  { id: 8, name: 'Mens', image: img8 },
  { id: 9, name: 'World Time', image: img9 },
  { id: 10, name: 'Pilot', image: img10 },
  { id: 11, name: 'Womens', image: img11 },
  { id: 12, name: 'Limited Editions', image: img12 },
  { id: 13, name: 'All Black Editions', image: img13 },
  { id: 14, name: 'Digital', image: img14 },
  { id: 15, name: 'Moonphase', image: img15 },
  { id: 16, name: 'Reverso', image: img16 },
  ];
  return(
    <div> 
      <style>{`
        .collection-section {
          color: #252525;
          padding: 3rem 0;
        }
      
        .collection-heading {
          text-align: center;
          margin-bottom: 2rem;
        }    

        .collection-headline {
          font-size: 2.2rem;
          font-weight: 400;
          font-family: 'Poppins', sans-serif;
          color: #252525;
        }

        .collection-image-container {
          position: relative;
          overflow: hidden;
          height: 500px; /* Increased height */
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
          bottom: 1.5rem; /* slightly more up from the bottom */
          left: 50%; /* center horizontally */
          transform: translateX(-50%); /* perfect center alignment */
          font-family: 'Poppins', sans-serif;
          font-size: 1.3rem; /* bigger font */
          font-weight: 400; /* a bit bolder */
          color: white;
          text-align: center;
          white-space: nowrap;
        }


        .collection-name::after {
          content: "";
          display: block;
          height: 2.5px;
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
            height: 300px; /* Increased for mobile */
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
    </div>
  );
}

export default Collection;