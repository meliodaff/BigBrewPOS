const RemoveModal = (props) => {
  return (
    <>
      <div
        className="modal"
        tabIndex="-1"
        style={{
          display: "block",
          backgroundColor: "rgba(0,0,0,.5)",
          paddingTop: "50%",
        }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header text-bg-danger">
              <h5 className="modal-title">Remove item</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={props.onClose}
                style={{ color: "white" }}
              ></button>
            </div>
            <div className="modal-body">
              <p>
                Are you sure you want to remove{" "}
                <b>{props.drinkName || "N / A"}</b>? <br />
              </p>
            </div>
            <div className="modal-footer d-flex justify-content-start">
              <button
                type="button"
                className="btn btn-danger"
                onClick={props.handleRemove}
              >
                Confirm
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

export default RemoveModal;
