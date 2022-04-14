import { Tabs } from "antd";
import React from "react";
import detailWatch from "../../imgApp/Detail_watch.png";
import "./DetailTabs.scss";

const { TabPane } = Tabs;
const DetailTabs = () => {
  function callback(key) {
    console.log(key);
  }
  return (
    <div className="Tabs">
      <div className="Tabs_Detail">
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="Detail" key="1">
            <div className="Detail_list-text">
              <div className="list_conten">
                <div>Material</div>
                <p>
                  MATOA Way Kambas - Sumatran Rhino comes with a material form
                  of Makassar Ebony (Diospyros celebica). This wood is chosen to
                  represent the Sumatran Rhino's skin which is designed with an
                  overlap effect on its strap to represent Rhino's skin.
                  Sumatran Rhino has unique skin fold, the skin is fairly thin
                  about 10-16mm, and is soft and pliable.
                </p>
              </div>
              <div className="list_conten">
                <div>Case</div>
                <p>
                  The case on this timepiece is made with Height 12.5mm, Width
                  36mm, Length 33mm and Dial Opening 25mm. The glass is equipped
                  with K1 flat glass to increase the enhanced durability on
                  timepieces as scratch resistant and anti fingerprint. This
                  timepiece is also equipped with Hand Polish Brass Spacer for a
                  longer usage periods.
                </p>
              </div>
              <div className="list_conten">
                <div>Movement</div>
                <p>
                  For the first time, MATOA comes with Seiko Quartz VD78
                  movement with small second function. A small second hand is
                  above 6 o'clock position. This second hand dial is dedicated
                  to Sumatran Rhino whom every second of its life is so precious
                  because whenever Sumatran Rhino goes, it can be threatened by
                  illegal poaching
                </p>
              </div>
              <div className="list_conten">
                <div>Dial</div>
                <p>
                  In the dial, there are double layer of Makassar Ebony Veneer
                  with 3, 9 & 12 o'clock laser cut brass plate index.
                </p>
              </div>
              <div className="list_conten">
                <div>Hand</div>
                <p>
                  The hour, minute & small second hands on MATOA Way Kambas -
                  Sumatran Rhino is outfitted with skeleton hand and brush
                  finished with Gold Matte color. This new design aims at adding
                  a value for this special edition.
                </p>
              </div>
              <div className="list_conten">
                <div>Important to Note</div>
                <p>
                  Wood color on watches is produced from a combination of mature
                  and fresh wood but should not be viewed as a defect. It is a
                  very natural process of wood aging.
                </p>
              </div>
            </div>
          </TabPane>
          <TabPane tab="Warranty" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="Custom Engrave" key="3">
            Content of Tab Pane 3
          </TabPane>
          <TabPane tab="How to Adjust" key="4">
            Content of Tab Pane 3
          </TabPane>
          <TabPane tab="How to Care" key="5">
            Content of Tab Pane 3
          </TabPane>
          <TabPane tab="Gallery" key="6">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </div>
      <div>
        <img src={detailWatch} alt="" />
      </div>
    </div>
  );
};

export default DetailTabs;
