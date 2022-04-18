import "./Confirmation.scss";
import React from "react";
import checkOut from "../../imgApp/CheckOut_1.png";
import playment from "../../imgApp/PlayMent.png";
import conmfin from "../../imgApp/Comfim_1.png";
import Confirmation_img from "../../imgApp/img_confirmation.png";
import clock from "../../imgApp/Confirmation_img_1.png";
import car from "../../imgApp/Confirmation_img_2.png";

const Confirmation = () => {
  return (
    <div className="Confirmation">
      <div className="Payment_hitory">
        <div className="icon_Payment">
          <img src={checkOut} alt="" />
          <div>1. Checkout</div>
        </div>
        <div className="boder"></div>
        <div className="icon_Payment">
          <img src={playment} alt="" />
          <div>2. Payment</div>
        </div>
        <div className="boder"></div>
        <div className="icon_Payment-of">
          <img src={conmfin} alt="" />
          <div>3. Confirmation</div>
        </div>
      </div>
      <div className="Confirmed_Order">
        <div className=" Confirmed_Order-img">
          <div className=" Order_img-item">
            <img src={Confirmation_img} alt="" />
            <h3>Order Confirmed</h3>
            <p>
              Your order have been confirmed, please wait and track your order
            </p>
            <button>Go to track page</button>
          </div>
        </div>
        <div className="Confirmed_Order-payment">
          <div className="Order_payment-days">
            <div className="payment_days-img">
              <img src={clock} alt="" />
              <p>10 days delivery</p>
            </div>
            <div className="payment_days-img">
              <img src={car} alt="" />
              <p>10 days delivery</p>
            </div>
          </div>
          <div className="payment_Way-Kambas">
            <h3>Way Kambas Mini Ebony</h3>
            <p>2 x IDR 1.024.000</p>
            <h3>Sikka (Ebony & Mapple)</h3>
            <p>1 x IDR 1.264.000</p>
          </div>
          <div className="Subtotal">
            <h3>Subtotal</h3>
            <h3>Rp 2.152.000</h3>
          </div>
          <div className="Subtotal">
            <h3>Subtotal</h3>
            <h3>Rp 500.000</h3>
          </div>
          <div className="Subtotal">
            <h3>Packaging</h3>
            <h3>Rp 50.000</h3>
          </div>
          <div className="Grand_Total">
            <h3>Grand Total</h3>
            <h1>Rp 2.702.000</h1>
          </div>
          <div className="Shipping_Address">
            <h3>Shipping Address</h3>
            <h4>18 Richardson Drive Fountain Valley, CA 92708</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
