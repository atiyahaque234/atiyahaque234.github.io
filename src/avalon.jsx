import React from "react";
import "./styles/1avalon.css";
import { useNavigate } from "react-router-dom";

function Avalon() {
  const navigate = useNavigate();

  const onGoToMainPage = () => {
    navigate("/");
  };

  return (
    <div>
      <button onClick={onGoToMainPage}>Avalon Super Tehe</button>
    </div>
  );
}

export default Avalon;
