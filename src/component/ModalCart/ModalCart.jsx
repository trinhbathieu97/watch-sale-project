import React from "react";
import "./ModalCart.scss";
import { Modal, Button } from "antd";
import CartImg_1 from "../../imgApp/modal_cart1.png";
import { DeleteOutlined } from "@ant-design/icons";

const ModalCart = ({ visible, setVisible }) => {
  return (
    <div>
      <Modal
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={1170}
        footer={null}
        closable={false}
      >
        <div className="list_modal-cart">
          <div className="Cart_modal-item">
            <div className="modal_item-imgPricer">
              <div className="item_img">
                <img src={CartImg_1} alt="" />
              </div>
              <div className="item_payment">
                <h4>Way Kambas Mini Ebony</h4>
                <p className="modal_pricer-sale">Rp 1.280.000</p>
                <h3>Rp 1.024.000</h3>
                <p className="Custom">Custom Engrave</p>
                <p className="Happy ">“Happy | Birthday | from”</p>
              </div>
            </div>
            <div className="modal_item-payment">
              <h5>Select Packaging</h5>
              <select name="" id="">
                <option value="">Wooden Packaging (Rp 50.000)</option>
              </select>
              <div className="modal_quantity">
                <button className="next_prven">-</button>
                <p className="quantity_item">2</p>
                <button className="next_prven">+</button>
                <h3>Rp 2.048.000</h3>
                <button className="Modal_delete">
                  <DeleteOutlined />
                </button>
              </div>
            </div>
          </div>

          {/* ================== */}
          <div className="Cart_modal-item">
            <div className="modal_item-imgPricer">
              <div className="item_img">
                <img src={CartImg_1} alt="" />
              </div>
              <div className="item_payment">
                <h4>Way Kambas Mini Ebony</h4>
                <p className="modal_pricer-sale">Rp 1.280.000</p>
                <h3>Rp 1.024.000</h3>
                <p className="Custom">Custom Engrave</p>
                <p className="Happy ">“Happy | Birthday | from”</p>
              </div>
            </div>
            <div className="modal_item-payment">
              <h5>Select Packaging</h5>
              <select name="" id="">
                <option value="">Wooden Packaging (Rp 50.000)</option>
              </select>
              <div className="modal_quantity">
                <button className="next_prven">-</button>
                <p className="quantity_item">2</p>
                <button className="next_prven">+</button>
                <h3>Rp 2.048.000</h3>
                <button className="Modal_delete">
                  <DeleteOutlined />
                </button>
              </div>
            </div>
          </div>

          {/* =================== */}
          <div className="KodePromo">
            <div className="KodePromo_voucher">
              <h3>Kode Promo</h3>
              <input type="text" value="INDONESIA" />
              <h3>35% OFF</h3>
            </div>

            <div className="KodePromo_voucher-price">
              <h3 className="Subtotal">Subtotal</h3>
              <div className="price_item">
                <p>Rp 3.312.000</p>
                <h3>Rp 2.152.000</h3>
              </div>
            </div>
          </div>
          <button className="modal_chekout">Checkout</button>
        </div>
      </Modal>
    </div>
  );
};

export default ModalCart;
