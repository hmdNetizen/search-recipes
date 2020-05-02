import React from "react";

const Alert = ({ alert }) => {
  return (
    Object.keys(alert).length !== 0 && (
      <div style={styleAlert} className={`alert ${alert.type}`}>
        <i className="fas fa-exclamation-circle mr-2"></i>
        {alert.message}
      </div>
    )
  );
};

const styleAlert = {
  margin: "0 10px",
};

export default Alert;
