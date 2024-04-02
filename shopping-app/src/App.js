import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
import ProductDetail from "./page/ProductDetail";
import Navbar from "./component/Navbar";
import { useEffect, useState } from "react";
import PrivateRoute from "./route/PrivateRoute";
// 1. 전체상품페이지, 로그인, 상품상세페이지
//1-1. navbar 만들기
//2. 전체 상품페이지에서는 전체 상품을 볼 수 있다.
//3. 로그인 버튼을 누르면 로그인 페이지가 나온다
//4. 상품 디테일을 눌렀으나, 로그인이 안 되어있는 경우에는 로그인페이지 먼저 나오게
//5. 로그아웃 버튼을 클릭하면 로그아웃
//6. 로그아웃되면 상품 디테일페이지 볼수없고 다시 로그인페이지로
//7. 상품검색기능

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<PrivateRoute />} />
      </Routes>
    </div>
  );
}

export default App;
