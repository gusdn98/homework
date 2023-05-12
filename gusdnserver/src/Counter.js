import React, { useState } from "react";
import "./Styles/Home.css";

function Counter() {
  const [number, setNumber] = useState(0);
  const [color, setFont] = useState([]);

  const change = ["blue", "red", "gold", "black"];

  const onIncrease = () => {
    setNumber(number + 1);
  };
  const onDecrease = () => {
    setNumber(number - 1);
  };
  const onChange = () => {
    const i = Math.floor(Math.random() * change.length);
    setFont(change[i]);
  };
  return (
    <div className="headerContainer button" style={{ fontSize: `30px` }}>
      <h1 className="home" style={{ color: color }}>
        {number}
      </h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
      <button onClick={onChange}>무작위 색 변경</button>
    </div>
  );
}

export default Counter;
//교수님 시작화면에 숫자가시작할때 흰색이여서 안보여가지고 home.css에서 색깔을 검은색을주고 입혀봣는데 왜 색깔이 안바뀌죠 ㅜ.ㅜ //
