import banner1 from '../img/Banner 1.jpg';
import banner2 from '../img/Banner 2.jpg';
import banner2Mobile from '../img/Banner 2 Mobile.jpg';
import banner3 from '../img/Banner 3.jpg';
import banner4 from '../img/Banner 4.jpg';
import { Link } from 'react-router-dom';

function Banner() {
  return (
    <div className="container-fluid px-0">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');

        .carousel-item img {
          object-fit: cover;
          width: 100%;
          height: 600px;
          position: relative;
          z-index: 0;
        }

        .position-relative {
          position: relative;
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          background-color: #403f3f;
          opacity: 0.7;
          z-index: 1;
        }

        .banner-content {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          color: white;
          font-family: 'Poppins', sans-serif;
          font-weight: 350;
          letter-spacing: 2px;
          z-index: 2;
          padding: 0 1rem;
          width: 100%;
          max-width: 800px;
        }

        .banner-subheadline {
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
        }

        .banner-headline {
          font-size: 2rem;
          margin-bottom: 1.5rem;
        }

        .banner-btn {
          background-color: white;
          color: black;
          padding: 0.75rem 2rem;
          font-size: 1rem;
          letter-spacing: 2px;
          border: none;
          border-radius: 5px;
          transition: all 0.3s ease-in-out;
        }

        .banner-btn:hover {
          background-color: transparent;
          color: white;
          border: 1px solid white;
        }

        @media (max-width: 1080px) {
          .banner-subheadline { font-size: 1rem; }
          .banner-headline { font-size: 1.5rem; }
          .banner-btn { padding: 0.6rem 1.5rem; font-size: 0.95rem; }
        }
      `}</style>

      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-pause="false">
        <div className="carousel-indicators">
          {[0, 1, 2, 3].map(index => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={index}
              className={index === 0 ? 'active' : ''}
              aria-current={index === 0 ? 'true' : undefined}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>

        <div className="carousel-inner text-uppercase">
          {/* Banner 1 */}
          <div className="carousel-item active" data-bs-interval="4400">
            <div className="position-relative">
              <div className="overlay"></div>
              <img src={banner1} className="d-block w-100 img-fluid" alt="Slide 1" />
              <div className="banner-content">
                <div className="banner-subheadline">Discover Timeless Elegance</div>
                <div className="banner-headline">Introducing the GMT Calibre</div>
              </div>
            </div>
          </div>

          {/* Banner 2 (with mobile/desktop swap) */}
          <div className="carousel-item" data-bs-interval="4400">
            <div className="position-relative">
              <div className="overlay"></div>
              <div className="d-none d-md-block">
                <img src={banner2} className="w-100 img-fluid" alt="Slide 2 Desktop" />
              </div>
              <div className="d-block d-md-none">
                <img src={banner2Mobile} className="w-100 img-fluid" alt="Slide 2 Mobile" />
              </div>
              <div className="banner-content">
                <div className="banner-subheadline">Crafted for the Journey</div>
                <div className="banner-headline">Explore the New Season Drop</div>
                <Link to="/watches"><button className="banner-btn text-uppercase">Shop Now</button></Link>
              </div>
            </div>
          </div>

          {/* Banner 3 */}
          <div className="carousel-item" data-bs-interval="4400">
            <div className="position-relative">
              <div className="overlay"></div>
              <img src={banner3} className="d-block w-100 img-fluid" alt="Slide 3" />
              <div className="banner-content">
                <div className="banner-subheadline">Limited Editions Await</div>
                <div className="banner-headline">Elevate Your Collection</div>
                <Link to="/collection"><button className="banner-btn text-uppercase">View Collection</button></Link>
              </div>
            </div>
          </div>

          {/* Banner 4 */}
          <div className="carousel-item" data-bs-interval="4400">
            <div className="position-relative">
              <div className="overlay"></div>
              <img src={banner4} className="d-block w-100 img-fluid" alt="Slide 4" />
              <div className="banner-content">
                <div className="banner-subheadline">Inspired by Precision</div>
                <div className="banner-headline">Timepieces Reimagined</div>
                <Link to="/collection"><button className="banner-btn text-uppercase">View Collection</button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
