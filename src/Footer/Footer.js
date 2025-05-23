import { useState } from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    const [showNewsletter, setShowNewsletter] = useState(false);

    return (
        <footer className="container-fluid py-5" style={{ backgroundColor: '#f8f9fa', fontFamily: 'Poppins', fontWeight: '400', color: '#000' }}>
             <style>{`
                .footer-link {
                    color: #000;
                    text-decoration: none;
                    transition: color 0.2s ease-in-out;
                }
                .footer-link:hover {
                    color: #555;
                }
            `}</style>
            
            <div className="container">
                <div className="row gy-4 justify-content-between">
                    {/* Newsletter Section */}
                    <div className="col-md-3 col-12">
                        {/* Mobile View - Dropdown */}
                        <div className="d-block d-md-none">
                            <div
                                className="w-100 p-1 d-flex justify-content-between align-items-center"
                                onClick={() => setShowNewsletter(!showNewsletter)}
                                style={{ cursor: 'pointer' }}
                            >
                                <span className="fw">Newsletter</span>
                                <i className={`bi ${showNewsletter ? 'bi-chevron-up' : 'bi-chevron-down'}`}></i>
                            </div>
                            {showNewsletter && (
                                <div className="mt-3">
                                    <p>Sign up for our newsletter for exclusive content, the latest watch releases, and offers.</p>
                                    <div className="input-group border-bottom">
                                        <input
                                            type="email"
                                            className="form-control border-0 bg-transparent shadow-none px-0"
                                            placeholder="Enter your email"
                                        />
                                        <span className="input-group-text bg-transparent border-0 px-0">
                                            <i className="bi bi-arrow-right"></i>
                                        </span>
                                    </div>
                                    <div className="d-flex gap-3 mt-3">
                                        <i className="bi bi-facebook fs-5"></i>
                                        <i className="bi bi-instagram fs-5"></i>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Desktop View */}
                        <div className="d-none d-md-block pe-md-4">
                            <h5>Newsletter</h5>
                            <p>Sign up for our newsletter for exclusive content, the latest watch releases, and offers.</p>
                            <div className="input-group border-bottom">
                                <input
                                    type="email"
                                    className="form-control border-0 bg-transparent shadow-none px-0"
                                    placeholder="Enter your email"
                                />
                                <span className="input-group-text bg-transparent border-0 px-0">
                                    <i className="bi bi-arrow-right"></i>
                                </span>
                            </div>
                            <div className="d-flex gap-3 mt-3">
                                <i className="bi bi-facebook fs-5"></i>
                                <i className="bi bi-instagram fs-5"></i>
                            </div>
                        </div>
                    </div>

                    {/* Shop */}
                    <div className="col-md-2 col-6">
                        <h5>Shop</h5>
                        <ul className="list-unstyled">
                            <li><Link to="collection" className="footer-link">Collection</Link></li>
                            <li><Link to="watches" className="footer-link">Brands</Link></li>
                            <li><Link to="collection" className="footer-link">Men</Link></li>
                            <li><Link to="collection" className="footer-link">Women</Link></li>
                        </ul>
                    </div>

                    {/* Customer Service */}
                    <div className="col-md-3 col-6">
                        <h5>Customer Service</h5>
                        <ul className="list-unstyled">
                            <li><Link to="shippingpolicy" className="footer-link">Shipping</Link></li>
                            <li><Link to="returnpolicy" className="footer-link">Returns</Link></li>
                            <li><Link to="faqs" className="footer-link">FAQs</Link></li>
                            <li><Link to="contactus" className="footer-link">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div className="col-md-3 col-12">
                        <h5>Legal</h5>
                        <ul className="list-unstyled">
                            <li><Link to="terms" className="footer-link">Terms & Conditions</Link></li>
                            <li><Link to="privacypolicy" className="footer-link">Privacy Policy</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Footer Bottom with full-width border */}
            <div className="mt-5">
                <hr className="m-0" style={{ borderColor: '#000' }} />
                <div className="text-center pt-3">
                    <small>&copy; 2025 GMT Calibre developed by Raashid Khan</small>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
