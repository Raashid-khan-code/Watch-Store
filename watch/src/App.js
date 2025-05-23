import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Homepage from './Homepage/Homepage';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import AboutUs from './About Us/AboutUs';
import Collection from './Collection Page/Collection';
import ContactUs from './Contact Us/ContactUs';
import Shipping from './Legal/Shipping';
import Returns from './Legal/Returns';
import FAQs from './FAQs/FAQs';
import Terms from './Legal/Terms&Conditions';
import PrivacyPolicy from './Legal/PrivacyPolicy';
import Products from './Collection Page/CollectionProducts';
import ProductSKU from './Collection Page/ProductSKU';

function App() {
  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/watches" element={<Products />} />
        <Route path="/watch_sku" element={<ProductSKU />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/shippingpolicy" element={<Shipping />} />
        <Route path="/returnpolicy" element={<Returns />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />

      </Routes>
      <Footer />
    </Router>

    </>
  );
}

export default App;


