import "./Payment.scss";
import React from "react";
import checkOut from "../../imgApp/CheckOut_1.png";
import playment from "../../imgApp/PlayMent_2.png";
import conmfin from "../../imgApp/Comfim.png";
import PaymentMethod from "../PaymentMethod/PaymentMethod";
import { Link } from "react-router-dom";
const Payment = () => {
  return (
    <div className="Payment">
      <div className="Payment_hitory">
        <div className="icon_Payment">
          <img src={checkOut} alt="" />
          <div>1. Checkout</div>
        </div>
        <div className="boder"></div>
        <div className="icon_Payment-of">
          <img src={playment} alt="" />
          <div>2. Payment</div>
        </div>
        <div className="boder"></div>
        <div className="icon_Payment">
          <Link to="/confirmation">
            <img src={conmfin} alt="" />
          </Link>
          <div>3. Confirmation</div>
        </div>
      </div>
      {/* ========= */}
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
          <div className="Payment_Detail">
            <div className="Payment_Detail-time">
              <div>Payment Detail</div>
              <p>11:55:55</p>
            </div>
            <p>
              Please make a payment according with the limit time specified,
              starting from now
            </p>
          </div>
        </div>
        <div className="Payment_Order-Detail">
          <div className="Order_Detail">
            <div className="Order_Detail-title">Order Detail</div>
            <div className="Order_Number">
              <div className="Order_Number-item">Order Number</div>
              <div className="Order_Number-detail">
                <div className="Order_Number-detail-singlenumber">
                  <div>MTAWEB-3A86D4DB</div>
                  <div className="Order_Number-copy">COPY</div>
                </div>
                <p>Always remember Order Number for easy tracking</p>
              </div>
            </div>
            <div className="Order_Number">
              <div className="Order_Number-item">Purchase Date</div>
              <div className="Order_Number-detail">
                <div className="Number_detail-time">2019-11-07 14:01:48</div>
              </div>
            </div>
            <div className="Order_Number">
              <div className="Order_Number-item">Items</div>
              <div className="Order_Number-detail">
                <div className="Number_detail-time">Way Kambas Mini Ebony</div>
                <p className="Number_detail-IDR">2 x IDR 1.024.000</p>
                <div className="Number_detail-time">Sikka (Ebony & Mapple)</div>
                <p className="Number_detail-IDR">1 x IDR 1.264.000</p>
              </div>
            </div>
            <div className="Order_Number">
              <div className="Order_Number-item">Name</div>
              <div className="Order_Number-detail">
                <div className="Number_detail-time">
                  Rasyidin Arsyad Nasution
                </div>
              </div>
            </div>
            <div className="Order_Number">
              <div className="Order_Number-item">Phone</div>
              <div className="Order_Number-detail">
                <div className="Number_detail-time">+18911188899</div>
              </div>
            </div>
            <div className="Order_Number">
              <div className="Order_Number-item">Email</div>
              <div className="Order_Number-detail">
                <div className="Number_detail-time">
                  rasyid.arsyad@gmail.com
                </div>
              </div>
            </div>
            <div className="Order_Number">
              <div className="Order_Number-item">Shipping Address</div>
              <div className="Order_Number-detail">
                <div className="Number_detail-time">18 Richardson Drive</div>
                <div className="Number_detail-time">
                  Fountain Valley, CA 92708
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PaymentMethod />
    </div>
  );
};

export default Payment;
