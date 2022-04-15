import "./DetailProduct.scss";
import DetailProduct1 from "../../imgApp/mothty1.png";
import DetailProduct2 from "../../imgApp/detail_product2.png";
import DetailProduct3 from "../../imgApp/detail_product3.png";
import React from "react";

const DetailProduct = () => {
  return (
    <div className="DetailProduct">
      <div className="DetailProduct_title">Relate Products</div>
      <div className="DetailProduct_list">
        <div className="DetailProduct_list-item">
          <div className="DetailProduct_img">
            <img src={DetailProduct1} alt="" />
          </div>
          <div className="DetailProduct_pricer">
            <h4 className="pricer_name">Singo Maple</h4>
            <p className="pricer_sale">Rp 1.500.000</p>
            <h4 className="pricer_now">Rp 1.264.000</h4>
          </div>
          <div className="Off_sale">20% OFF</div>
        </div>

        {/* ======= */}
        <div className="DetailProduct_list-item">
          <div className="DetailProduct_img">
            <img src={DetailProduct2} alt="" />
          </div>
          <div className="DetailProduct_pricer">
            <h4 className="pricer_name">Sikka (Ebony & Maple)</h4>
            {/* <p className="pricer_sale">Rp 1.500.000</p> */}
            <h4 className="pricer_now">Rp 1.264.000</h4>
          </div>
          <div className="Off_NEW">NEW</div>
        </div>
        {/* ======== */}

        <div className="DetailProduct_list-item">
          <div className="DetailProduct_img">
            <img src={DetailProduct3} alt="" />
          </div>
          <div className="DetailProduct_pricer">
            <h4 className="pricer_name">Sunda</h4>
            {/* <p className="pricer_sale">Rp 1.500.000</p> */}
            <h4 className="pricer_now">Rp 1.170.000</h4>
          </div>
        </div>
        {/* ======== */}

        <div className="DetailProduct_list-item">
          <div className="DetailProduct_img">
            <img src={DetailProduct1} alt="" />
          </div>
          <div className="DetailProduct_pricer">
            <h4 className="pricer_name">Singo Maple</h4>
            <p className="pricer_sale">Rp 1.200.000</p>
            <h4 className="pricer_now">Rp 960.000</h4>
          </div>
          <div className="Off_sale">25% OFF</div>
        </div>
        {/* ======== */}
      </div>
    </div>
  );
};

export default DetailProduct;
