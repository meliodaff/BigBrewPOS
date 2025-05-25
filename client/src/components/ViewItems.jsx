import { useEffect, useState } from "react";
import formatAddOnName from "../services/formatAddOnName";
const ViewItems = (props) => {
  return (
    <>
      <div
        className="modal"
        tabIndex="-1"
        style={{ display: "block", backgroundColor: "rgba(0, 0, 0, .5 )" }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Items</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={props.onClose}
              ></button>
            </div>
            <div className="modal-body items-modal">
              <div className="items-grid">
                {props.cart.length > 0 ? (
                  props.cart.map((item, index) => (
                    <div className="item-container" key={index}>
                      <img
                        className="item-image"
                        src={item.drinkImage}
                        alt="Drink"
                      />
                      <div className="item-details">
                        <b className="item-name" style={{ fontSize: "large" }}>
                          {item.drinkName}
                        </b>
                        <b className="item-size">{item.drinkSize}</b>
                        <div className="item-add-ons">
                          {Object.entries(item.drinkAddOns).map(
                            ([key, value], index) => (
                              <div key={index}>
                                {value > 0
                                  ? `${value}x ${formatAddOnName(key)}`
                                  : null}
                              </div>
                            )
                          )}
                          {/* <div>
                            {item.drinkAddOns.extraShot
                              ? `${item.drinkAddOns.extraShot}x Extra Shot`
                              : null}
                          </div>
                          <div>
                            {item.drinkAddOns.pearl
                              ? `${item.drinkAddOns.pearl}x Pearl`
                              : null}
                          </div>
                          <div>
                            {item.drinkAddOns.crystal
                              ? `${item.drinkAddOns.crystal}x Crystal`
                              : null}
                          </div>
                          <div>
                            {item.drinkAddOns.creamCheese
                              ? `${item.drinkAddOns.creamCheese}x Cream Cheese`
                              : null}
                          </div>
                          <div>
                            {item.drinkAddOns.creamPuff
                              ? `${item.drinkAddOns.creamPuff}x Cream Puff`
                              : null}
                          </div>
                          <div>
                            {item.drinkAddOns.cheesecake
                              ? `${item.drinkAddOns.cheesecake}x Cheesecake`
                              : null}
                          </div>
                          <div>
                            {item.drinkAddOns.crushedOreo
                              ? `${item.drinkAddOns.crushedOreo}x Crushed Oreo`
                              : null}
                          </div>
                          <div>
                            {item.drinkAddOns.coffeeJelly
                              ? `${item.drinkAddOns.coffeeJelly}x Coffee Jelly`
                              : null}
                          </div>
                          <div>
                            {item.drinkAddOns.whippedCream
                              ? `${item.drinkAddOns.whippedCream}x Whipped Cream`
                              : null}
                          </div> */}
                        </div>
                        <div>₱{item.price}</div>
                        <button className="edit-button">Edit</button>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No Items</p>
                )}
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-start">
              <button
                type="button"
                className="btn btn-primary"
                onClick={props.myFunc}
              >
                Save changes
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={props.onClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewItems;
