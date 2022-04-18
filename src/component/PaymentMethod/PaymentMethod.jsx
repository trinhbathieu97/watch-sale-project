import "./PaymentMethod.scss";
import React from "react";
import method1 from "../../imgApp/img_payment_1.png";
import method2 from "../../imgApp/img_payment_2.png";
import method3 from "../../imgApp/img_payment_3.png";
import method4 from "../../imgApp/img_payment_4.png";
import method5 from "../../imgApp/img_payment_5.png";
import method6 from "../../imgApp/img_payment_6.png";
import method7 from "../../imgApp/img_payment_7.png";
import method8 from "../../imgApp/img_payment_8.png";
import method9 from "../../imgApp/img_payment_9.png";
import method10 from "../../imgApp/img_payment_10.png";

const PaymentMethod = () => {
  return (
    <div className="PaymentMethod_All">
      <div className="PaymentMethod">
        <div className="PaymentMethod_title">Payment Method</div>
        <div className="PaymentMethod_list">
          <div className="PaymentMethod_cicilan">
            <div className="PaymentMethod_cicilan-item">
              <div className="cicilan_item-radio">
                <input type="radio" name="Method" />
                <span>BNI Cicilan 0%</span>
              </div>
              <div className="cicilan_item-img">
                <img src={method1} alt="" />
              </div>
            </div>
            <div className="PaymentMethod_cicilan-item">
              <div className="cicilan_item-radio">
                <input type="radio" name="Method" />
                <span>Mandiri Cicilan 0%</span>
              </div>
              <div className="cicilan_item-img">
                <img src={method2} alt="" />
              </div>
            </div>
            <div className="PaymentMethod_cicilan-item">
              <div className="cicilan_item-radio">
                <input type="radio" name="Method" />
                <span>Bank Transfer</span>
              </div>
              <div className="cicilan_item-img">
                <img src={method3} alt="" />
              </div>
            </div>
            <div className="PaymentMethod_cicilan-item">
              <div className="cicilan_item-radio">
                <input type="radio" name="Method" />
                <span>Credit Card</span>
              </div>
              <div className="cicilan_item-img">
                <img src={method4} alt="" />
                <img src={method5} alt="" />
              </div>
            </div>
          </div>
          {/* ================================= */}
          <div className="PaymentMethod_credit-cart">
            <div className="PaymentMethod_credit-itemS">
              <div className="credit_item-radio">
                <input type="radio" name="Method" />
                <span>
                  Credit Card Cicilan 0% (Danamon, UOB & Standard Chartered)
                </span>
              </div>
              <div className="credit_item-img">
                <img className="credit_item-imgX3" src={method6} alt="" />
                <img className="credit_item-imgX3" src={method7} alt="" />
                <img src={method8} alt="" />
              </div>
            </div>
            <div className="PaymentMethod_credit-item">
              <div className="credit_item-radio">
                <input type="radio" name="Method" />
                <span>GO-PAY</span>
              </div>
              <div className="credit_item-img">
                <img src={method9} alt="" />
              </div>
            </div>
            <div className="PaymentMethod_credit-item">
              <div className="credit_item-radio">
                <input type="radio" name="Method" />
                <span>Krdivo</span>
              </div>
              <div className="credit_item-img">
                <img src={method10} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Proceed_Payment">
        <button>Proceed Payment</button>
      </div>
    </div>
  );
};

export default PaymentMethod;
