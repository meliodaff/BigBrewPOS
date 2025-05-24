const ViewItems = (props) => {
  console.log(props.cart);
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
            <div className="modal-body">
              <div className="items-grid">
                {props.cart.map((item, index) => (
                  <div className="item-container" key={index}>
                    <img
                      className="item-image"
                      src={item.drinkImage}
                      alt="Drink"
                    />
                    <div className="item-details">
                      <div className="item-name">{item.drinkName}</div>
                      <div className="item-add-ons">
                        {item.drinkAddOns.extraShot
                          ? `${item.drinkAddOns.extraShot}x Extra Shot`
                          : null}
                        {item.drinkAddOns.pearl
                          ? `${item.drinkAddOns.pearl}x Pearl`
                          : null}
                        {item.drinkAddOns.crystal
                          ? `${item.drinkAddOns.crystal}x Crystal`
                          : null}
                        {item.drinkAddOns.creamCheese
                          ? `${item.drinkAddOns.creamCheese}x Cream Cheese`
                          : null}
                        {item.drinkAddOns.creamPuff
                          ? `${item.drinkAddOns.creamPuff}x Cream Puff`
                          : null}
                        {item.drinkAddOns.cheesecake
                          ? `${item.drinkAddOns.cheesecake}x Cheesecake`
                          : null}
                        {item.drinkAddOns.crushedOreo
                          ? `${item.drinkAddOns.crushedOreo}x Crushed Oreo`
                          : null}
                        {item.drinkAddOns.coffeeJelly
                          ? `${item.drinkAddOns.coffeeJelly}x Coffee Jelly`
                          : null}
                        {item.drinkAddOns.whippedCream
                          ? `${item.drinkAddOns.whippedCream}x Whipped Cream`
                          : null}
                      </div>
                      <button className="edit-button">Edit</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={props.onClose}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={props.myFunc}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewItems;
