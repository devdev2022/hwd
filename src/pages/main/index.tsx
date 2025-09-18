import React, { useContext, useEffect } from "react";

import { useLocation, useNavigate } from "react-router-dom";
import GlobalModalContext from "../../contexts/GlobalModalContext";

const Main = () => {
  const { openMessage, openModal } = useContext(GlobalModalContext);

  const handleOpenMessage = () => {
    openMessage("serverConnectionFail");
  };

  const handleOpenModal = () => {
    openModal({
      body: <div>커스텀 모달 내용</div>,
      className: "custom-class",
    });
  };

  return (
    <div>
      <div>테스트</div>
      <button onClick={handleOpenMessage}>메시지 모달 열기</button>
      <button onClick={handleOpenModal}>커스텀 모달 열기</button>
    </div>
  );
};

export default Main;
