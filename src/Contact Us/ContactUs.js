

function Contact() {
  return (
    <div>
      <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '80vh', fontFamily: 'Poppins, sans-serif' }}>
        <div className="card p-4 shadow-sm" style={{ width: '100%', maxWidth: '600px', borderRadius: '20px' }}>
          <h2 className="text-center mb-2">Contact Us</h2>
          <p className="text-center mb-4" style={{ fontSize: '14px' }}>Please let us know how we can help you</p>

          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label"><h6>Name</h6></label>
              <input
                type="text"
                id="name"
                className="form-control"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label"><h6>Email</h6></label>
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="form-label"><h6>Message</h6></label>
              <textarea
                id="message"
                className="form-control"
                placeholder="Enter your message"
                rows="4"
              ></textarea>
            </div>

            <div className="text-center">
              <button type="submit" className="btn custom-btn">Submit</button>
            </div>
          </form>
        </div>
      </div>

      {/* Inline style for the button customization */}
      <style>{`
        .custom-btn {
          background-color: transparent;
          color: black;
          border: 2px solid black;
          padding: 10px 30px;
          font-weight: 500;
          border-radius: 30px;
          transition: all 0.3s ease-in-out;
        }
        .custom-btn:hover {
          background-color: black;
          color: white;
        }
      `}</style>
    </div>
  );
}

export default Contact;
