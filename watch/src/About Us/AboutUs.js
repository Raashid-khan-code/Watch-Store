
import ABbanner from '../img/Why Wear Watch.jpg';
import ABpic1 from '../img/About Us Img 1.jpg';
import ABpic2 from '../img/About Us Img 2.jpg';

function AboutUs(){
  return(
    <div className="container-fluid about-us-section px-3 px-md-5 py-5">

    <style>{`
    .about-title {
      font-family: 'Poppins', sans-serif;
      font-size: 3.5rem;
      font-weight: 500;
      letter-spacing: 1.5px;
      line-height: 1.4;
      color: #252525;
    }
    
    .about-paragraph {
      font-family: 'Poppins', sans-serif;
      font-size: 1.125rem;
      font-weight: 400;
      line-height: 1.9;
      color: #252525;
    }
    
    .banner-img {
      width: 100%;
      height: 500px;
      object-fit: cover;
    }
    
    .about-side-img {
      width: 100%;
      height: auto;
      max-height: 300px;
      object-fit: cover;
      border-radius: 12px;
    }
    .quote-section {
      margin-top: 40px;
    }

    .about-quote {
      font-family: 'Poppins', sans-serif;
      font-size: 1.5rem;
      font-style: italic;
      font-weight: 400;
      color: #555;
    }

    .about-quote-subtext {
      font-family: 'Poppins', sans-serif;
      font-size: 1rem;
      color: #777;
      margin-top: 10px;
    }

    @media (max-width: 768px) {
      .about-title {
        font-size: 2rem;
      }
    
      .about-paragraph {
        font-size: 1rem;
        line-height: 1.8;
      }
    
      .banner-img {
        height: 300px;
      }
    
      .about-side-img {
        max-height: 200px;
      }

      .about-quote {
        font-size: 1.25rem;
      }
    }      

  `}</style>
      <img src={ABbanner} className="img-fluid banner-img mb-4" alt="About Banner" />

      <h1 className="text-center text-uppercase about-title mb-4">About Us</h1>

      <p className="about-paragraph mb-4">
        For as long as I can remember, watches have been more than just accessories to me—they are symbols of art,
        engineering, and timeless elegance. My fascination began with admiring the intricate details of a simple
        wristwatch and quickly grew into a passion for exploring the stories behind every ticking hand. Collecting
        watches became more than a hobby; it turned into a lifelong journey of discovering the craftsmanship,
        innovation, and history woven into every piece.
      </p>

      <div className="row align-items-center mb-4">
        <div className="col-md-6 mb-3 mb-md-0">
          <img src={ABpic1} className="img-fluid rounded about-side-img" alt="Left Side" />
        </div>
        <div className="col-md-6">
          <p className="about-paragraph">
            Over the years, my collection has become a treasure trove of unique designs and diverse timepieces, each one with its own story to tell. From vintage classics with decades of history to modern marvels boasting cutting-edge technology, I find joy in uncovering the character and legacy behind each watch. Exploring different brands, styles, and movements constantly fuels my curiosity, deepening my appreciation for the artistry of horology.
          </p>
        </div>
      </div>

      <div className="row align-items-center">
        <div className="col-md-6 order-md-2 mb-3 mb-md-0">
          <img src={ABpic2} className="img-fluid rounded about-side-img" alt="Right Side" />
        </div>
        <div className="col-md-6 order-md-1">
          <p className="about-paragraph">
            This React.js project is a tribute to that passion. It merges my enthusiasm for watches with my interest in web development, creating a digital space to celebrate everything I love about timepieces. Through this platform, I hope to share my journey, showcase my admiration for the world of watches, and inspire others to embrace the beauty and craftsmanship of these timeless creations. It’s my way of giving back to the community that continues to inspire me and of inviting others to dive into the timeless charm of watches.
          </p>
        </div>
        
      </div>

      <p className="about-paragraph mt-4">
        Whether you're a fellow collector, a casual admirer, or someone just starting their horological journey, I hope this space sparks a sense of curiosity and wonder. Time is a constant in our lives, but the way we capture it—through these intricate masterpieces—is anything but ordinary. Here's to appreciating the details, embracing the craft, and celebrating the ticking stories that connect us all.
      </p>

      <div className="quote-section text-center mt-5">
        <blockquote className="about-quote">
          "Time is what we want most, but what we use worst." — William Penn
        </blockquote>
        <p className="about-quote-subtext">Tick by tick, click by click—cherishing every moment.</p>
      </div>
    </div>

  );
}

export default AboutUs;