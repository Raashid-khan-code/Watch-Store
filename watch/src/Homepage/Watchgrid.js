import React from 'react';
import { Link } from 'react-router-dom';

// 6 separate image paths (all use the same image for now)
import img1 from '../img/Watch Grid 1.jpg';
import img2 from '../img/Watch Grid 2.jpg';
import img3 from '../img/Watch Grid 3.jpg';
import img4 from '../img/Watch Grid 4.jpg';
import img5 from '../img/Watch Grid 5.jpg';
import img6 from '../img/Watch Grid 6.jpg';

const watchData = [
  { id: 1, name: 'Rolex Sea-Dweller', image: img1, mrp: '₹ 15,80,000' },
  { id: 2, name: 'Omega Speedmaster Moonwatch Professional', image: img2, mrp: '₹ 8,40,000' },
  { id: 3, name: 'Grand Seiko Heritage Automatic', image: img3, mrp: '₹ 4,95,000' },
  { id: 4, name: 'Vacheron Constantin Overseas', image: img4, mrp: '₹ 32,10,000' },
  { id: 5, name: 'Ballon Bleu de Cartier', image: img5, mrp: '₹ 17,00,000' },
  { id: 6, name: 'Patek Philippe Grand Complication', image: img6, mrp: '₹ 1,40,38,000' },
];

function WatchGrid() {
  return (
    <>
      <style>{`
        .watch-image {
          width: 100%;
          aspect-ratio: 1 / 1;
          object-fit: cover;
          transition: transform 0.3s ease-in-out;
        }

        .watchgrid-heading {
          text-align: center;
          margin-bottom: 2rem;
        }

        .watchgrid-subheadline {
          font-size: 1.3rem;
          font-weight: 400;
          font-family: 'Poppins', sans-serif;
          color:rgb(26, 25, 25);
        }

        .watchgrid-headline {
          font-size: 2.2rem;
          font-weight: 400;
          font-family: 'Poppins', sans-serif;
          color:rgb(26, 25, 25);
        }

        .link{
          text-decoration: none;
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
          font-size: 1rem;
          margin-bottom: 0.25rem;
        }

        @media (max-width: 767.98px) {
          .row-cols-sm-2 > * {
            flex: 0 0 auto;
            width: 50%;
          }
        }
      `}</style>

      <div className="container py-5">
        <div className="watchgrid-heading">
          <p className="watchgrid-subheadline">Timeless elegance, curated for you</p>
          <h2 className="watchgrid-headline">Discover iconic watches from the world’s finest brands</h2>
        </div>
        <div className="row row-cols-2 row-cols-md-3 g-4">
          {watchData.map((watch) => (
            <div className="col" key={watch.id}>
              <Link to="/watch_sku" className="link"><div className="card h-100">
                <img src={watch.image} className="card-img-top watch-image" alt={watch.name} />
                <div className="card-body">
                  <p className="mrp">{watch.mrp}</p>
                  <h5 className="card-title">{watch.name}</h5>
                </div>
              </div></Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default WatchGrid;
