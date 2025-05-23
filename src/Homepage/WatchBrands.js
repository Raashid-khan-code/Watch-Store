import rolex from '../img/Rolex.jpg';
import jlc from '../img/Omega.jpg';
import omega from '../img/Jaeger LeCoultre.jpg';
import cartier from '../img/Cartier.jpg';
import vc from '../img/Vacheron Constantin.jpg';
import longines from '../img/Longines.jpg';
import tudor from '../img/Tudor.jpg';
import tissot from '../img/Tissot.jpg';
import seiko from '../img/Seiko.jpg';
import orient from '../img/Orient.jpg';
import casio from '../img/Casio.jpg';
import timex from '../img/Timex.jpg';
// Import other logos here...

const logos = [rolex, jlc , omega, cartier, vc , longines , tudor , tissot , seiko , orient , casio , timex];

function WatchBrands() {
  return (
    <div className="marquee-wrapper">
      <style>{`
        .marquee-wrapper {
          width: 100%;
          background-color: #ffffff;
          padding: 20px 0;
          overflow: hidden;
          text-align: center;
        }

        .headline {
          font-family: 'Poppins', sans-serif;
          font-weight: 500;
          font-size: 20px;
          text-transform: uppercase;
          margin-bottom: 15px;
          color: #252525; /* Change to #fff if dark bg */
        }

        .marquee-track {
          display: flex;
          width: fit-content;
          animation: scroll-left 25s linear infinite;
        }

        .brand-logo {
          height: 70px;
          width: auto;
          margin: 0 20px;
          object-fit: contain;
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        /* Responsive tweak */
        @media (max-width: 768px) {
            .brand-logo {
                height: 55px;
                margin: 0 12px;
            }

            .headline {
                font-size: 16px;
                text-transform: uppercase;
                font-weight: 500;
                color: #252525;
            }
        }
      `}</style>

      <div className="headline">Discover iconic watches from the world's finest brands</div>

        <div className="marquee-container">
            <div className="marquee-track">
                {logos.map((logo, index) => (
                    <img key={index} src={logo} alt={`brand-${index}`} className="brand-logo" />
                ))}
                {logos.map((logo, index) => (
                    <img key={`dup-${index}`} src={logo} alt={`brand-dup-${index}`} className="brand-logo" />
                ))}
            </div>
        </div>
    </div>
  );
}

export default WatchBrands;
