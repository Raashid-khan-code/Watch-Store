

function FAQs() {
  return (
    <div style={{ fontFamily: 'Poppins, sans-serif' }}>

      <div className="container my-5">
        <h2 className="text-center mb-5">Frequently Asked Questions</h2>

        {/* Section 1: Orders & Shipping */}
        <h4 className="mb-4 text-center">Orders & Shipping</h4>
        <div className="accordion accordion-flush mx-auto" id="accordionOrders" style={{ maxWidth: '800px' }}>
          <div className="accordion-item border-bottom">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#order1" aria-expanded="false" aria-controls="order1">
                How do I track my order?
              </button>
            </h2>
            <div id="order1" className="accordion-collapse collapse" data-bs-parent="#accordionOrders">
              <div className="accordion-body">
                You will receive a shipping confirmation email with a tracking link once your order has shipped.
              </div>
            </div>
          </div>

          <div className="accordion-item border-bottom">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#order2" aria-expanded="false" aria-controls="order2">
                Can I change my shipping address after placing an order?
              </button>
            </h2>
            <div id="order2" className="accordion-collapse collapse" data-bs-parent="#accordionOrders">
              <div className="accordion-body">
                Changes are possible only before your order has been shipped. Please contact customer service immediately.
              </div>
            </div>
          </div>

          <div className="accordion-item border-bottom">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#order3" aria-expanded="false" aria-controls="order3">
                What are the shipping costs?
              </button>
            </h2>
            <div id="order3" className="accordion-collapse collapse" data-bs-parent="#accordionOrders">
              <div className="accordion-body">
                Shipping is free for standard delivery. Express shipping may incur additional charges.
              </div>
            </div>
          </div>

          <div className="accordion-item border-bottom">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#order4" aria-expanded="false" aria-controls="order4">
                Which countries do you ship to?
              </button>
            </h2>
            <div id="order4" className="accordion-collapse collapse" data-bs-parent="#accordionOrders">
              <div className="accordion-body">
                We ship internationally to most countries. You can see the full list during checkout.
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Product Information */}
        <h4 className="mt-5 mb-4 text-center">Product Information</h4>
        <div className="accordion accordion-flush mx-auto" id="accordionProduct" style={{ maxWidth: '800px' }}>
          <div className="accordion-item border-bottom">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#product1" aria-expanded="false" aria-controls="product1">
                Are the watches authentic?
              </button>
            </h2>
            <div id="product1" className="accordion-collapse collapse" data-bs-parent="#accordionProduct">
              <div className="accordion-body">
                Yes, all our watches are 100% authentic and come with original warranty and packaging.
              </div>
            </div>
          </div>

          <div className="accordion-item border-bottom">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#product2" aria-expanded="false" aria-controls="product2">
                Do the watches come with a warranty?
              </button>
            </h2>
            <div id="product2" className="accordion-collapse collapse" data-bs-parent="#accordionProduct">
              <div className="accordion-body">
                Yes, each timepiece comes with a manufacturer's international warranty, usually between 2-5 years.
              </div>
            </div>
          </div>

          <div className="accordion-item border-bottom">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#product3" aria-expanded="false" aria-controls="product3">
                What if the watch stops working?
              </button>
            </h2>
            <div id="product3" className="accordion-collapse collapse" data-bs-parent="#accordionProduct">
              <div className="accordion-body">
                If the watch stops working within warranty, contact us or the brand’s service center for repairs.
              </div>
            </div>
          </div>

          <div className="accordion-item border-bottom">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#product4" aria-expanded="false" aria-controls="product4">
                Are waterproof watches covered under warranty?
              </button>
            </h2>
            <div id="product4" className="accordion-collapse collapse" data-bs-parent="#accordionProduct">
              <div className="accordion-body">
                Water damage is covered only if the watch is marked as water-resistant and was used according to specifications.
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Returns & Refunds */}
        <h4 className="mt-5 mb-4 text-center">Returns & Refunds</h4>
        <div className="accordion accordion-flush mx-auto" id="accordionReturns" style={{ maxWidth: '800px' }}>
          <div className="accordion-item border-bottom">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#return1" aria-expanded="false" aria-controls="return1">
                What is your return policy?
              </button>
            </h2>
            <div id="return1" className="accordion-collapse collapse" data-bs-parent="#accordionReturns">
              <div className="accordion-body">
                We offer a 14-day return window from the delivery date. Items must be unworn and in original packaging.
              </div>
            </div>
          </div>

          <div className="accordion-item border-bottom">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#return2" aria-expanded="false" aria-controls="return2">
                How do I initiate a return?
              </button>
            </h2>
            <div id="return2" className="accordion-collapse collapse" data-bs-parent="#accordionReturns">
              <div className="accordion-body">
                Contact our customer support team with your order details. They will guide you through the return process.
              </div>
            </div>
          </div>

          <div className="accordion-item border-bottom">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#return3" aria-expanded="false" aria-controls="return3">
                When will I receive my refund?
              </button>
            </h2>
            <div id="return3" className="accordion-collapse collapse" data-bs-parent="#accordionReturns">
              <div className="accordion-body">
                Refunds are processed within 5-7 business days after receiving and inspecting the returned product.
              </div>
            </div>
          </div>

          <div className="accordion-item border-bottom">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#return4" aria-expanded="false" aria-controls="return4">
                Are shipping fees refundable?
              </button>
            </h2>
            <div id="return4" className="accordion-collapse collapse" data-bs-parent="#accordionReturns">
              <div className="accordion-body">
                Shipping charges are non-refundable unless the return is due to our error or a defective product.
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default FAQs;
