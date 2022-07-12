import React from "react";
import { FiShoppingCart } from "react-icons/fi";

const CTA = ({ text, onClick, icon }) => {
  return (
    <button onClick={onClick} className="flex spb cta">
      <FiShoppingCart className="buy" />
      {text}
    </button>
  );
};
export default CTA;
