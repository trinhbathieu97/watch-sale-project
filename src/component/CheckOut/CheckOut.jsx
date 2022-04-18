import React from "react";
import "./CheckOut.scss";
import checkOut from "../../imgApp/CheckOut.png";
import playment from "../../imgApp/PlayMent.png";
import conmfin from "../../imgApp/Comfim.png";
import { Link } from "react-router-dom";

const CheckOut = () => {
  return (
    <div className="CheckOut">
      <div className="CheckOut_hitory">
        <div className="icon_checkOut">
          <img src={checkOut} alt="" />
          <div>1. Checkout</div>
        </div>
        <div className="boder"></div>
        <div className="icon_checkOut-of">
          <Link to="/payment">
            {" "}
            <img src={playment} alt="" />{" "}
          </Link>
          <div>2. Payment</div>
        </div>
        <div className="boder"></div>
        <div className="icon_checkOut-of">
          <img src={conmfin} alt="" />
          <div>3. Confirmation</div>
        </div>
      </div>
      <div className="Detail_checkOut">
        <div className="Detail_Order">
          <div className="Detail_Order-pricer">
            <div className="Detail_Order-title">Detail Order</div>
            <div className="Detail_Order-subtotal">
              <div className="Order_name-code">
                <p>Subtotal</p>
                <p>Shipping Cost</p>
                <p>Promo Code</p>
                <p>Packaging</p>
              </div>
              <div className="Order_name-code">
                <p>Rp 2.152.000</p>
                <p>Rp 500.000</p>
                <p>INDONESIA</p>
                <p>Rp 50.000</p>
              </div>
            </div>
            <div className="total_money">
              <p>Grand Total</p>
              <h3>Rp 2.702.000</h3>
            </div>
          </div>
          <div style={{ opacity: "0" }}>.</div>
        </div>
        <div className="Address">
          <div className="Detail_address">
            <div className="Detail_address-title">Billing Address</div>
            <div className="info_address">
              <p>Fullname</p>
              <input type="text" placeholder="Ex: Rasyidin Arsyad Nasution" />
            </div>
            <div className="info_address">
              <p>Email Address</p>
              <input type="text" placeholder="Ex: rasyid.arsyad@gmail.com" />
            </div>
            <div className="info_address">
              <p>Phone Number</p>
              <input type="text" placeholder="Ex: 089111888999" />
            </div>
            <div className="info_address">
              <p>Shipping Address</p>
              <input
                type="text"
                placeholder="Ex: Patriot Street Number 666, Ngaklik, Sleman"
              />
            </div>
            <div className="info_address">
              <p>Country</p>
              <select>
                <option>United State of America (USA)</option>
              </select>
            </div>
            <div className="info_address">
              <p>State/Province</p>
              <select>
                <option>California</option>
              </select>
            </div>
            <div className="info_address info_City-Zip ">
              <div className="info_address-City">
                <p>State/Province</p>
                <select>
                  <option>California</option>
                </select>
              </div>
              <div className="Zip_Code">
                <p>State/Province</p>
                <input type="text" placeholder="Ex: 94024" />
              </div>
            </div>
            <div className="info_address">
              <p>Choose Courier</p>
              <select>
                <option>DHL</option>
              </select>
            </div>
          </div>
          <div className="PlaceMyOrder">
            <button className="Continue_Shopping">Continue Shopping</button>

            <button className="Place_My-Order">Place My Order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
