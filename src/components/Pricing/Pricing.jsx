import { RiCheckboxCircleLine } from "react-icons/ri";
import "./Pricing.css";

const Pricing = () => {
  return (
    <div>
      <h1 className="title_pricing">Pricing</h1>
      <div className="pricing-container">
        <div className="pricing-card">
          <div className="content">
            <h4>Basic Plan</h4>
            <h3>10$</h3>
            <p>
              <RiCheckboxCircleLine /> Revised 2 times
            </p>
            <p>
              <RiCheckboxCircleLine /> 8 days finished
            </p>
          </div>
          <button className="pricing-btn">Buy Now</button>
        </div>
        <div className="pricing-card">
          <div className="content">
            <h4>Advanced Plan</h4>
            <h3>50$</h3>
            <p>
              <RiCheckboxCircleLine /> Revised 5 times
            </p>
            <p>
              <RiCheckboxCircleLine /> 6 days finished
            </p>
          </div>
          <button className="pricing-btn">Buy Now</button>
        </div>
        <div className="pricing-card">
          <div className="content">
            <h4>Gold Plan</h4>
            <h3>70$</h3>
            <p>
              <RiCheckboxCircleLine /> Revised 8 times
            </p>
            <p>
              <RiCheckboxCircleLine /> 4 days finished
            </p>
          </div>
          <button className="pricing-btn">Buy Now</button>
        </div>
        <div className="pricing-card">
          <div className="content">
            <h4>Diamond Plan</h4>
            <h3>100$</h3>
            <p>
              <RiCheckboxCircleLine /> Revised 12 times
            </p>
            <p>
              <RiCheckboxCircleLine /> 3 days finished
            </p>
          </div>
          <button className="pricing-btn">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
