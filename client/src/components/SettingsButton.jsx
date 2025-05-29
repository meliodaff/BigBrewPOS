const SettingsButton = (props) => {
  return (
    <>
      <div className="settings-container">
        <button
          className="settings-button"
          onClick={() => props.setShowSettingsModal(true)}
        >
          <img src="/gear-solid.svg" />
        </button>
      </div>
    </>
  );
};

export default SettingsButton;
