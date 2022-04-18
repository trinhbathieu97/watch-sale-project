import React from "react";
import "./Advertising.scss";
import discover1 from "../../imgApp/discover_1.svg";
import discover2 from "../../imgApp/discover_2.svg";
const Advertising = () => {
  return (
    <div className="Advertising">
      <div className="Advertising_product">
        <div className="Advertising_product-name">
          <div>
            Luxurious <span>Eyewear</span>
          </div>
          <p>
            See the beauty of exotic world with the <br /> luxurious glasses
          </p>
        </div>
        <div className="discover_Now">
          <div className="discover_node">
            <div>Discover Now</div>
          </div>
          <div className="discover_node-img">
            <img src={discover1} alt="" />
          </div>
        </div>
      </div>
      <div className="Advertising_product">
        <div className="Advertising_product-name">
          <div>
            Comfortable <span> Watches</span>
          </div>
          <p>
            Feels the balancing function and beauty in <br />
            our wooden watches
          </p>
        </div>
        <div className="discover_Now">
          <div className="discover_node">
            <div>Discover Now</div>
          </div>
          <div className="discover_node-img-2 ">
            <img src={discover2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertising;
