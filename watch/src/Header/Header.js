import logo from '../img/watchLogo.jpg';
import search from '../img/search.png';
import cart from '../img/cart.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';


function Main_Menu() {
    const [showSearch, setShowSearch] = useState(false);
    const [isSearchVisible, setIsSearchVisible] = useState(false);

    const toggleSearch = () => {
        if (!showSearch) {
            setShowSearch(true);
            setTimeout(() => setIsSearchVisible(true), 10);
        } else {
            setIsSearchVisible(false);
            setTimeout(() => setShowSearch(false), 400); // Duration matches slideUp
        }
    };

    return (
        <div className="container-fluid border border-bottom-1" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}>
            <style>{`
                .nav-link {
                  position: relative;
                  font-weight: 400;
                  color: #252525;                  
                }

                .nav-link::after, .dropdown-toggle::after {
                    content: '';
                    position: absolute;
                    left: 0;
                    bottom: -2px;
                    width: 100%;
                    height: 2px;
                    background-color: black;
                    transform: scaleX(0);
                    transition: transform 0.3s ease-in-out;
                }
                .nav-link:hover::after, .dropdown-toggle:hover::after {
                    transform: scaleX(1);
                    border-width: 2px;
                    height: 2px;
                }

                .navbar-toggler:focus,
                .navbar-toggler:active {
                    box-shadow: none;
                    outline: none;
                    border: none;
                }

                @media (max-width: 991px) {
                    .nav-link::after, .dropdown-toggle::after {
                        display: none;
                    }

                    .desktop-aboutus {
                        display: none; !important;
                    }
                }

                @media (max-width: 991px) {
                    .desktop-aboutus-content a {
                        display: none !important;
                    }
                }

                @media (min-width: 992px) {
                    .mobile-aboutus a {
                        display: none;
                    }
                }

                .search-icon-col {
                    justify-content: end !important;
                }
                    
                @keyframes slideDown {
                    from {
                        transform: translateY(-100%);
                        opacity: 0;
                    }
                    to {
                        transform: translateY(0);
                        opacity: 1;
                    }
                }

                @keyframes slideUp {
                    from {
                        transform: translateY(0);
                        opacity: 1;
                    }
                    to {
                        transform: translateY(-100%);
                        opacity: 0;
                    }
                }

                .search-overlay {
                    width: 100%;
                    background: white;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 1040;
                    border: none;
                    border-style: none;
                    border-width: 0;
                    overflow: hidden;     
                }

                .slide-down {
                    animation: slideDown 0.6s ease forwards;
                }

                .slide-up {
                    animation: slideUp 0.6s ease forwards;
                }

                .search-box {
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;                    
                    padding: 10px 20px;
                    background: white;
                }

                .search-box input {
                    border: none;
                    outline: none;
                    flex-grow: 1;
                    padding: 10px;
                    font-size: 20px;
                    background: transparent;
                }

                .close-btn {
                    background: none;
                    border: none;
                    font-size: 24px;
                    cursor: pointer;
                    width: 1em;
                    height: 1em;
                    position: relative;
                }

                .close-btn::before, .close-btn::after {
                    content: '';
                    position: absolute;
                    left: 0;
                    top: 20px;
                    width: 100%;
                    height: 2px;
                    background-color: #252525;
                    transform-origin: center;
                }

                .close-btn::before {
                    transform: rotate(45deg);
                }

                .close-btn::after {
                    transform: rotate(-45deg);
                }
            `}
            </style>

            <div className="row align-items-stretch">

                {/* Column 1: Navigation Menu */}
                <div className="col-4 d-flex align-items-center justify-content-center" style={{ height: '103px' }}>
                    <nav className="navbar navbar-expand-lg w-100">
                        <div className="container-fluid">
                            <button 
                                className="navbar-toggler border-0" 
                                type="button" 
                                data-bs-toggle="offcanvas" 
                                data-bs-target="#offcanvasNavbar" 
                                aria-controls="offcanvasNavbar"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            {/* Standard Navbar for Desktop */}
                            <div className="collapse navbar-collapse d-none d-lg-flex justify-content-center" id="navbarNavDropdown">
                                <ul className="navbar-nav text-uppercase">
                                    <li className="nav-item">
                                        <Link to="collection" className="nav-link fs-5">Collection</Link>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle fs-5" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Brands<i className="bi bi-chevron-down"></i>
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><Link to="watches" className="dropdown-item">Rolex</Link></li>
                                            <li><Link to="watches" className="dropdown-item">Omega</Link></li>
                                            <li><Link to="watches" className="dropdown-item">Casio</Link></li>
                                            <li><Link to="watches" className="dropdown-item">Frédérique Constant</Link></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="collection" className="nav-link fs-5">Men</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="collection" className="nav-link fs-5">Women</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>

                {/* Column 2: Logo */}
                <div className="col-4 text-center d-flex align-items-center justify-content-center">
                    <Link to="/">
                        <img src={logo} width="100" height="101" alt="Logo" />
                    </Link>
                </div>

                {/* Column 3:  */}
                <div className="col-2 d-flex align-items-center justify-content-center desktop-aboutus-content" style={{ height: '103px' }}></div>

                {/* Column 4: About Us Menu Item (Visible only on Desktop) Search Icon  Cart Icon */}

                <div className="col-2 d-flex align-items-center justify-content-end gap-3 pe-4" style={{ height: '103px' }}>
                    <div className="desktop-aboutus-content">
                      <Link to="aboutus" className="nav-link fs-5 text-uppercase">About Us</Link>
                    </div>
                    <img src={search} width="25" height="25" alt="search" style={{ cursor: 'pointer' }} onClick={toggleSearch} />
                    <img src={cart} width="30" height="30" alt="cart" style={{ cursor: 'pointer' }} data-bs-toggle="offcanvas" data-bs-target="#offcanvasCart" aria-controls="offcanvasCart" />
                </div>

                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasCart" aria-labelledby="offcanvasCartLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasCartLabel">Your Cart</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            {/* Cart contents go here */}
                            <p>Your cart is currently empty.</p>
                        </div>
                    </div>

            </div>
            
            {showSearch && (
                <div className={`search-overlay ${isSearchVisible ? 'slideDown' : 'slideUp'}`}>
                    <div className="search-box">
                         <img src={search} width="13" height="13" alt="search" style={{ cursor: 'pointer' }} onClick={toggleSearch} />
                         <input type="text" placeholder="Search..." />
                         <button type="button" className="btn-close" aria-label="Close" onClick={toggleSearch}></button>
                     </div>
                </div>
            )}

            {/* Offcanvas Navigation for Mobile */}
            <div className="offcanvas offcanvas-start border-0" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header justify-content-start ps-3">
                    <button type="button" className="close-btn" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <ul className="navbar-nav text-uppercase">
                        <li className="nav-item">
                            <Link to="/collection" className="nav-link fs-5">Collection</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link to="watches" className="nav-link dropdown-toggle fs-5" role="button" data-bs-toggle="collapse" data-bs-target="#mobileDropdown" aria-expanded="false">
                                Brands <i className="bi bi-chevron-down"></i>
                            </Link>
                            <ul className="collapse list-unstyled" id="mobileDropdown">
                                <li><Link to="watches" className="dropdown-item">Rolex</Link></li>
                                <li><Link to="watches" className="dropdown-item">Omega</Link></li>
                                <li><Link to="watches" className="dropdown-item">Casio</Link></li>
                                <li><Link to="watches" className="dropdown-item">Frédérique Constant</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link to="/collection" className="nav-link fs-5">Men</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/collection" className="nav-link fs-5">Women</Link>
                        </li>
                        <li className="nav-item mobile-aboutus">
                            <Link to="/aboutus" className="nav-link fs-5">About Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Main_Menu;