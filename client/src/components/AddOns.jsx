import { use, useState } from "react";

const AddOns = ({ milkTea, onClose }) => {
  const [size, setSize] = useState("Medio");
  const [addOns, setAddOns] = useState([]);
  return (
    <>
      <div
        className="modal"
        tabIndex="-1"
        style={{ display: "block", backgroundColor: "rgba(0, 0, 0, .5)" }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Ons for {milkTea}</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={onClose}
              ></button>
            </div>
            <div className="modal-body">
              <h3>Sizes:</h3>
              <div className="sizes-container">
                <input
                  type="checkbox"
                  className="size-checkbox"
                  checked={size === "Medio"}
                  onChange={() => {
                    setSize((prev) => (prev === "Medio" ? "" : "Medio"));
                  }}
                />
                <div className="size">Medio</div>
                <input
                  type="checkbox"
                  className="size-checkbox"
                  checked={size === "Grande"}
                  onChange={() => {
                    setSize((prev) => (prev === "Grande" ? "" : "Grande"));
                  }}
                />
                <div className="size">Grande</div>
              </div>
              <div className="divider-add-ons"></div>

              <h3>Add Ons:</h3>
              <div className="add-ons-container">
                <input type="checkbox" className="add-ons-checkbox" />
                <div className="add-ons-name">Pearl</div>
                <input type="checkbox" className="add-ons-checkbox" />
                <div className="add-ons-name">Crystal</div>
                <input type="checkbox" className="add-ons-checkbox" />
                <div className="add-ons-name">Cream Cheese</div>
                <input type="checkbox" className="add-ons-checkbox" />
                <div className="add-ons-name">Cream Puff</div>
                <input type="checkbox" className="add-ons-checkbox" />
                <div className="add-ons-name">Cheesecake</div>
                <input type="checkbox" className="add-ons-checkbox" />
                <div className="add-ons-name">Crushed Oreo</div>
                <input type="checkbox" className="add-ons-checkbox" />
                <div className="add-ons-name">Coffee Jelly</div>
                <input type="checkbox" className="add-ons-checkbox" />
                <div className="add-ons-name">Whipped Cream</div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={onClose}
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddOns;
