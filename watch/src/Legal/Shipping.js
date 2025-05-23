

function Shipping() {
  return (
    <div style={{ fontFamily: 'Poppins, sans-serif' }}>
      <div className="container d-flex flex-column align-items-center py-5 px-3 px-sm-5">
        <h1 className="text-center mb-4">Shipping</h1>
        
        <div className="w-100" style={{ maxWidth: "800px" }}>
         
          <p>
            Thank you for shopping with <strong>GMT Calibre</strong>. We strive to offer you a smooth and efficient shipping experience. Please review our shipping policy below:
          </p>

          <h3>Processing Time</h3>
          <ul>
            <li>Orders are processed within 1-2 business days of receipt.</li>
            <li>Orders placed after 3 PM, weekends, or holidays will be processed the next business day.</li>
          </ul>

          <h3>Shipping Methods & Delivery Times</h3>
          <ul>
            <li><strong>Standard Shipping:</strong> 5-7 business days.</li>
            <li><strong>Expedited Shipping:</strong> 2-3 business days.</li>
            <li><strong>Overnight Shipping:</strong> 1 business day (available for select locations).</li>
            <li>*Delivery times are estimates and may vary based on location or external factors such as weather or customs processing.*</li>
          </ul>

          <h3>Shipping Fees</h3>
          <ul>
            <li><strong>Free Standard Shipping:</strong> On orders over $100 within the United States.</li>
            <li><strong>Expedited and Overnight Shipping:</strong> Available at an additional cost, calculated at checkout.</li>
          </ul>

          <h3>International Shipping</h3>
          <ul>
            <li>We offer international shipping to select countries.</li>
            <li>Customs duties, taxes, and import fees are the responsibility of the customer and will be due upon delivery.</li>
            <li>Delivery times for international orders may vary and depend on local customs processing times.</li>
          </ul>

          <h3>Order Tracking</h3>
          <ul>
            <li>Once your order ships, you will receive a tracking number via email to track your shipment.</li>
            <li>Please allow 24-48 hours for tracking updates to appear after shipment.</li>
          </ul>

          <h3>Missing or Damaged Packages</h3>
          <ul>
            <li>If your order is lost or damaged in transit, please contact us immediately at <strong>contact@gmtcalibre.com</strong>.</li>
            <li>We will assist in filing a claim with the carrier and provide a resolution, either through a replacement or refund.</li>
          </ul>

          <h3>Address Accuracy</h3>
          <ul>
            <li>Please ensure your shipping address is correct before completing your purchase.</li>
            <li>We are not responsible for delays or lost packages due to incorrect or incomplete address information.</li>
          </ul>

          <h3>Contact Us</h3>
          <p>If you have any questions regarding our shipping policy, please reach out to us at <strong>[insert your email here]</strong>.</p>
        </div>
      </div>
    </div>
  );
}

export default Shipping;
