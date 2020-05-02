import React from "react";
import loading from "./loading.gif";

const Spinner = () => {
  return (
    <div>
      <img src={loading} alt="spinner" width={70} style={style} />
    </div>
  );
};

const style = {
  display: "block",
  margin: "0 auto",
};

export default Spinner;
