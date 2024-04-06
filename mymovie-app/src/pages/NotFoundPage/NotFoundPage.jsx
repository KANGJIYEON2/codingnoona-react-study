import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFoundPage.style.css";
const NotFoundPage = () => {
  const navigate = useNavigate();
  const onClickBtn = () => {
    navigate(-1);
  };
  return (
    <div className="error-box">
      <div className="error-box-content">
        <h1>404 ERROR!</h1>
        <h2>페이지를 찾을 수 없습니다...</h2>
        <button onClick={onClickBtn}>뒤로가기</button>
      </div>
      <div className="error-img-box">
        <img
          className="error-img"
          src="https://cdn.pixabay.com/photo/2017/01/31/19/22/comic-characters-2026645_1280.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default NotFoundPage;
