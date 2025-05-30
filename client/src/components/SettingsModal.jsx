import { useState } from "react";

const SettingsModal = (props) => {
  const [currentMedioCups, setCurrentMedipCups] = useState(props.medioCups);
  const [currentGrandeCups, setCurrentGrandeCups] = useState(props.grandeCups);
  const [currentDomes, setCurrentDomes] = useState(props.domes);

  const handleClick = () => {
    props.setMedioCups(currentMedioCups);
    props.setGrandeCups(currentGrandeCups);
    props.setDomes(currentDomes);
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
            <div className="modal-body settings-body">
              <span>Medio Cups: </span>
              <input
                type="number"
                placeholder="0"
                value={currentMedioCups}
                onChange={(e) => setCurrentMedipCups(e.target.value)}
              />
              <span>Grande Cups: </span>
              <input
                type="number"
                placeholder="0"
                value={currentGrandeCups}
                onChange={(e) => setCurrentGrandeCups(e.target.value)}
              />
              <span>Domes: </span>
              <input
                type="number"
                placeholder="0"
                value={currentDomes}
                onChange={(e) => setCurrentDomes(e.target.value)}
              />
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
                onClick={handleClick}
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

export default SettingsModal;
