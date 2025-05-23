import React from 'react';
import banner from '../img/Why Wear Watch.jpg';

function WhyWear() {
  return (
    <>
      <style>{`
        .whywear-section {
          width: 100%;
          position: relative;
          overflow: hidden;
          max-height: 100vh;
        }

        .whywear-img {
          width: 100%;
          height: 500px;
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
          background-color: rgba(255, 255, 255, 0.7);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 1rem;
          text-align: center;
          z-index: 1;
        }

        .subheadline {
          font-family: 'Poppins', sans-serif;
          font-weight: 400;
          color: #000000;
          font-size: 2rem;
          margin-bottom: 1.2rem;
        }

        .content-box {
          max-width: 800px;
          font-family: 'Poppins', sans-serif;
          font-weight: 400;
          color: #000000;
          font-size: 1.25rem;
          line-height: 2;
          font-style: italic;
        }

        @media (max-width: 576px) {
          .subheadline {
            font-size: 1.5rem;
          }
          .content-box {
            font-size: 1.05rem;
            line-height: 1.7;
          }

          /* Fallback for older browsers */
          @supports not (aspect-ratio: 3.84 / 1) {
            .whywear-section {
              height: 0;
              padding-top: 26.04%; /* 1 / 3.84 * 100 = 26.04% */
            }
          }
        }

      `}</style>

      <div className="whywear-section">
        <img src={banner} alt="Why Wear Watches" className="whywear-img"/>
        <div className="overlay-content">
          <div className="subheadline">Why You Should Wear a Watch</div>
          <div className="content-box">
            <p>A watch keeps you punctual with timeless grace,</p>
            <p>A symbol of discipline, precision and timeless taste.</p>
            <p>A whisper of style, a keeper of pace,</p>
            <p>A watch tells time—and shows you care.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhyWear;
