import React from "react";
import "./Input.css";
import { useNavigate } from "react-router-dom";

const Input = ({ handleSubmit, handleSearch, inputSearch }) => {
  let navigate = useNavigate();
  return (
    <form onSubmit={(e) => handleSubmit(e, navigate)}>
      <input
        type="text"
        placeholder="Recherchez un film"
        onChange={handleSearch}
        value={inputSearch}
        className="Input"
        autoFocus
      />
    </form>
  );
};

export default Input;
