import "./App.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "./component/Box";

function App() {
  const count = useSelector((state) => state.count);
  let id = useSelector((state) => state.id);
  let pw = useSelector((state) => state.pw);

  const dispatch = useDispatch();
  const increase = () => {
    dispatch({ type: "INCREMENT", payload: { num: 5 } });
  };
  const decrement = () => {
    dispatch({ type: "DECREMENT", payload: { num: 5 } });
  };
  const login = () => {
    dispatch({ type: "LOGIN", payload: { id: "hi", pw: "123" } });
  };
  return (
    <div>
      <h1>리덕스 연습하기</h1>
      <h2>
        하이 {id} <br />
        당신의 id: {id}, pw:{pw}
      </h2>
      <h1> 결과 {count} (5씩증가 또는 감소합니다)</h1>
      <button onClick={increase}>증가</button>
      <button onClick={decrement}>감소</button>
      <button onClick={login}>login</button>
      <Box />
    </div>
  );
}

export default App;
