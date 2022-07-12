import React from "react";
import { AiOutlinePlayCircle } from "react-icons/ai";

const CTA = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className="flex spb sec">
      <AiOutlinePlayCircle />
      {text}
    </button>
  );
};
export default CTA;