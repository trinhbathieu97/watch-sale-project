import React from "react";
import "./Product.scss";
import product1 from "../../imgApp/product_1.png";

const ListProducts = () => {
  return (
    <div className="ListProduct_all">
      <div className="ListProduct">
        <div className="type_ListProduct">
          <div className="title_product">Maple Series</div>
          <div className="detail_product">
            <div className="img_product">
              <img src={product1} alt="" />
            </div>
            <div className="name_pricer-prodyct">
              <div className="name_product">Way Kambas Maple</div>
              <div className="pricer_product">Rp 1.280.000</div>
            </div>
          </div>
        </div>

        <div className="type_ListProduct">
          <div className="title_product">Maple Series</div>
          <div className="detail_product">
            <div className="img_product">
              <img src={product1} alt="" />
            </div>
            <div className="name_pricer-prodyct">
              <div className="name_product">Way Kambas Maple</div>
              <div className="pricer_product">Rp 1.280.000</div>
            </div>
          </div>
        </div>

        <div className="type_ListProduct">
          <div className="title_product">Maple Series</div>
          <div className="detail_product">
            <div className="img_product">
              <img src={product1} alt="" />
            </div>
            <div className="name_pricer-prodyct">
              <div className="name_product">Way Kambas Maple</div>
              <div className="pricer_product">Rp 1.280.000</div>
            </div>
          </div>
        </div>
      </div>
      <div className="SeeMore">
        <div className="like__"></div>
        <button>See More</button>
        <div className="like__"></div>
      </div>
    </div>
  );
};

export default ListProducts;
