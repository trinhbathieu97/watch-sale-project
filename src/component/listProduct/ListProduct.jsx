import React from "react";
import "./Product.scss";
import product1 from "../../imgApp/product_1.png";
import product2 from "../../imgApp/product_2.png";
import product3 from "../../imgApp/product_3.png";
import product4 from "../../imgApp/product_4.png";
import product5 from "../../imgApp/product_5.png";
import product6 from "../../imgApp/product_6.png";
import product7 from "../../imgApp/product_7.png";
import product8 from "../../imgApp/product_8.png";
import product9 from "../../imgApp/product_9.png";

const itemMapleSeries = [
  {
    img: product1,
    name: "Way Kambas Maple",
    pricer: "Rp 1.280.000",
  },
  {
    img: product2,
    name: "Kaili",
    pricer: "Rp 950.000",
  },
  {
    img: product1,
    name: "Sunda",
    pricer: "Rp 1.170.000",
  },
];
const itemEbonySeries = [
  {
    img: product4,
    name: "Mori",
    pricer: "Rp 950.000",
  },
  {
    img: product5,
    name: "Tomia Ebony",
    pricer: "Rp 960.000",
  },
  {
    img: product6,
    name: "Alor",
    pricer: "Rp 1.170.000",
  },
];
const itemFeatured = [
  {
    img: product7,
    name: "Sikka (Ebony & Maple)",
    pricer: "Rp 1.198.000",
  },
  {
    img: product8,
    name: "Lore Walnut",
    pricer: "Rp 1.280.000",
  },
  {
    img: product9,
    name: "Way Kambas Limited Edition",
    pricer: "Rp 1.170.000",
  },
];

const ListProducts = () => {
  return (
    <div className="ListProduct_all">
      <div className="ListProduct">
        {/* ===== */}
        <div className="type_ListProduct">
          <div className="title_product">Maple Series</div>
          {itemMapleSeries.map((item) => (
            <div className="detail_product">
              <div className="img_product">
                <img src={item.img} alt="" />
              </div>
              <div className="name_pricer-prodyct">
                <div className="name_product">{item.name}</div>
                <div className="pricer_product">{item.pricer}</div>
              </div>
            </div>
          ))}
        </div>
        {/* ==== */}
        <div className="type_ListProduct">
          <div className="title_product">Ebony Series</div>
          {itemEbonySeries.map((item) => (
            <div className="detail_product">
              <div className="img_product">
                <img src={item.img} alt="" />
              </div>
              <div className="name_pricer-prodyct">
                <div className="name_product">{item.name}</div>
                <div className="pricer_product">{item.pricer}</div>
              </div>
            </div>
          ))}
        </div>
        {/* ================= */}
        <div className="type_ListProduct">
          <div className="title_product">Featured</div>
          {itemFeatured.map((item) => (
            <div className="detail_product">
              <div className="img_product">
                <img src={item.img} alt="" />
              </div>
              <div className="name_pricer-prodyct">
                <div className="name_product">{item.name}</div>
                <div className="pricer_product">{item.pricer}</div>
              </div>
            </div>
          ))}
        </div>
        {/* ====================== */}
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
