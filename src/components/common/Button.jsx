import React from "react";

function Button(props) {
  const esOperador = (value) => {
    // eslint-disable-next-line
    return isNaN(value) && value !== "." && value !== "=";
  };

  return (
    <div
      className={`btn ${esOperador(props.children) ? "operador" : ""}`}
      onClick={() => {
        props.click(props.children);
      }}
    >
      {props.children}
    </div>
  );
}

export default Button;
