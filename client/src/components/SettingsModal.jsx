import { useEffect, useState } from "react";
import useFetchOrders from "../services/fetchOrders";
import formatAddOnName from "../services/formatAddOnName";
const SettingsModal = (props) => {
  const [showCups, setShowCups] = useState(true);
  const [showHistory, setShowHistory] = useState(false);
  const { orders, loading, fetchOrders } = useFetchOrders();

  useEffect(() => {
    fetchOrders();
    console.log(orders);
  }, [showHistory]);

  const [currentMedioCups, setCurrentMedipCups] = useState(
    Number(props.medioCups)
  );
  const [currentGrandeCups, setCurrentGrandeCups] = useState(
    Number(props.grandeCups)
  );
  const [currentDomes, setCurrentDomes] = useState(Number(props.domes));

  const [currentStraws, setCurrentStraws] = useState(Number(props.straws));

  const handleClick = () => {
    props.setMedioCups(Number(currentMedioCups));
    props.setGrandeCups(Number(currentGrandeCups));
    props.setDomes(Number(currentDomes));
    props.setStraws(Number(currentStraws));
    props.onClose();
  };
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
              <h5 className="modal-title">Settings</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={props.onClose}
              ></button>
            </div>
            <div className="modal-body" id="modal-for-settings">
              <div className="nav-bar">
                <button
                  className={showCups && "isToggle"}
                  onClick={() => {
                    if (showCups) return;
                    setShowCups(true);
                    setShowHistory(false);
                  }}
                >
                  Cups
                </button>
                <button
                  className={showHistory && "isToggle"}
                  onClick={() => {
                    if (showHistory) return;
                    setShowHistory(true);
                    setShowCups(false);
                  }}
                >
                  History
                </button>
              </div>
              {showHistory && (
                <div>
                  <div className="card-history">
                    {orders.length > 0
                      ? orders.map((item, index) => {
                          return (
                            <div key={index} className="">
                              <div className="first-drink-details">
                                <p className="drink-category">
                                  {item.drinkCategory}
                                </p>
                                <p className="drink-name">{item.drinkName}</p>
                                <p className="drink-size">{item.drinkSize}</p>
                                <p className="drink-price">{item.drinkPrice}</p>
                              </div>
                              <div className="history-add-ons-details">
                                {Object.entries(item.drinkAddOns).map(
                                  ([key, value], index) => (
                                    <div
                                      key={index}
                                      style={{ height: "auto", margin: "0" }}
                                    >
                                      {value > 0
                                        ? `${value}x ${formatAddOnName(key)}`
                                        : null}
                                    </div>
                                  )
                                )}
                              </div>
                            </div>
                          );
                        })
                      : "No History Orders"}
                  </div>
                </div>
              )}
              {showCups && (
                <div
                  className="settings-body"
                  style={{ paddingBottom: "266px" }}
                >
                  <span>Medio Cups: </span>
                  <input
                    type="number"
                    placeholder="0"
                    value={currentMedioCups}
                    onChange={(e) =>
                      setCurrentMedipCups(Number(e.target.value))
                    }
                  />
                  <span>Grande Cups: </span>
                  <input
                    type="number"
                    placeholder="0"
                    value={currentGrandeCups}
                    onChange={(e) =>
                      setCurrentGrandeCups(Number(e.target.value))
                    }
                  />
                  <span>Straws: </span>
                  <input
                    type="number"
                    placeholder="0"
                    value={currentStraws}
                    onChange={(e) => setCurrentStraws(Number(e.target.value))}
                  />
                  <span>Domes: </span>
                  <input
                    type="number"
                    placeholder="0"
                    value={currentDomes}
                    onChange={(e) => setCurrentDomes(Number(e.target.value))}
                  />
                </div>
              )}
            </div>
            <div className="modal-footer d-flex justify-content-start">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleClick}
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

export default SettingsModal;
