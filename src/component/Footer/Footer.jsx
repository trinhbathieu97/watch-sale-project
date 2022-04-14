import "./Footer.scss";
import React from "react";
import item_1 from "../../imgApp/itemFooter_1.png";
import item_2 from "../../imgApp/itemFooter_2.png";
import item_3 from "../../imgApp/itemFooter_3.png";
import item_4 from "../../imgApp/itemFooter_4.png";
import item_5 from "../../imgApp/itemFooter_5.png";
import item_6 from "../../imgApp/itemFooter_6.png";
import item_7 from "../../imgApp/itemFooter_7.png";
import item_8 from "../../imgApp/itemFooter_8.png";
import item_9 from "../../imgApp/itemFooter_9.png";
import item_10 from "../../imgApp/itemFooter_10.png";
import facebook from "../../imgApp/facebook.png";
import camera from "../../imgApp/camera.png";
import path from "../../imgApp/path.png";
import youtube from "../../imgApp/youtube.png";
import logo from "../../imgApp/MATOA_footer.png";

const item = [
  { img: item_1 },
  { img: item_2 },
  { img: item_3 },
  { img: item_4 },
  { img: item_5 },
  { img: item_6 },
  { img: item_7 },
  { img: item_8 },
  { img: item_9 },
  { img: item_10 },
];

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer_trademark">
        <div className="trademark-list">
          {item.map((items) => (
            <div className="trademark-item">
              <img src={items.img} alt="" />
            </div>
          ))}
        </div>
      </div>
      <div className="ContactInfo">
        <div className="ContactInfo_list">
          <div className="ContactInfo_list-item">
            <div>
              <img src={logo} alt="" />
            </div>
            <div className="ContactInfo_list-Address">Address</div>
            <p>Store & Office</p>
            <p>
              Jl. Setrasari Kulon III, No. 10-12, Sukarasa, Sukasari, Bandung,
              Jawa Barat, Indonesia 40152
            </p>
            <div className="ContactInfo_list-Address">Office Hour</div>
            <p>Monday - Sunday 10.00 - 18.00</p>
          </div>

          <div className="ContactInfo_list-item">
            <div className="ContactInfo_title">Get in touch</div>
            <div className="Phone">
              <div className="Phone_text">Phone</div>
              <div className="Phone_number">022-20277564</div>
            </div>
            <div className="Phone">
              <div className="Phone_text">Service Center</div>
              <div className="Phone_number">0811-233-8899</div>
            </div>
            <div className="Phone">
              <div className="Phone_text">Customer Service</div>
              <div className="Phone_number">0811-235-9988</div>
            </div>
            <div className="Phone_icon">
              <img src={facebook} alt="" />
              <img src={path} alt="" />
              <img src={camera} alt="" />
              <img src={youtube} alt="" />
            </div>
          </div>
          <div className="ContactInfo_list-item">
            <div className="ContactInfo_title">Useful Link</div>
            <ul className="ContactInfo_list-link">
              <li>Warranty & Complaints</li>
              <li>Order & Shipping</li>
              <li>Tracking Order</li>
              <li>About Us</li>
              <li>Repair</li>
              <li>Terms</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div className="ContactInfo_list-item">
            <div className="ContactInfo_title">Campaign</div>
            <ul className="ContactInfo_list-link">
              <li>Mengenal Arti Cukup</li>
              <li>Tell Your Difference</li>
              <li>Waykambas</li>
              <li>Rebrand</li>
              <li>Gallery</li>
              <li>Singo</li>
              <li>Rakai</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
