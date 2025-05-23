import mens from '../img/MensWatch.jpg';
import womens from '../img/WomensWatch.jpg';
import { Link } from 'react-router-dom';

function GenderCollection() {
    return (
        <div className="container-fluid gender-collection-container">
            <style>{`
                .gender-collection-container {
                    min-height: 950px;
                    padding: 0 12px;
                }

                .gender-section {
                    height: 950px;
                    position: relative;
                    overflow: hidden;
                    padding: 0;
                    background-color: black;
                }

                .gender-image-wrapper {
                    height: 100%;
                    width: 100%;
                    position: relative;
                }

                .gender-img {
                    height: 100%;
                    width: 100%;
                    object-fit: cover;
                    transition: transform 0.5s ease;
                    transform-origin: center center;
                    will-change: transform;
                    backface-visibility: hidden;
                }

                .gender-img:hover {
                    transform: scale(0.95);
                }

                .gender-btn {
                    position: absolute;
                    left: 40px;
                    bottom: 40px;
                    padding: 12px 24px;
                    font-family: 'Poppins', sans-serif;
                    font-weight: 400;
                    font-size: 1rem;
                    background-color: white;
                    color: black;
                    border: 1px solid white;
                    border-radius: 8px;
                    transition: all 0.3s ease-in-out;
                }

                .gender-btn:hover {
                    background-color: transparent;
                    color: white;
                    border-color: white;
                }

                /* Mobile view */
                @media (max-width: 768px) {
                    .gender-section {
                        min-height: 700px;
                        background-color: black;
                    }

                    .gender-btn {
                        left: 50%;
                        transform: translateX(-50%);
                        bottom: 30px;
                        text-align: center;
                        padding: 10px 16px; /* Slightly smaller padding */
                        white-space: nowrap; /* Prevent text wrap */
                    }

                    .gender-img:hover {
                        transform: none; /* Disable zoom-out on mobile */
                    }
                }
            `}</style>

            <div className="row">
                <div className="col-sm-6 gender-section" id="mens">
                    <div className="gender-image-wrapper">
                        <img src={mens} className="gender-img" alt="Men's Collection" />
                        <Link to="/watches"><button className="gender-btn">Shop Men's Watches</button></Link>
                    </div>
                </div>
                <div className="col-sm-6 gender-section" id="womens">
                    <div className="gender-image-wrapper">
                        <img src={womens} className="gender-img" alt="Women's Collection" />
                        <Link to="/watches"><button className="gender-btn">Shop Women's Watches</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GenderCollection;
