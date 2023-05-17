import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
//버튼에 기능개발을 해보자 & 리액트 state변경하는 법 dsdjdjd
function App() {
  let [글제목, b] = useState(["남자코트 추천", "강남 우동맛집", "파이썬독학"]);
  let [따봉, 따봉변경] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      <div className="list">
        <h4>
          {글제목[0]}<span onClick={() => {따봉변경(따봉+1);}}>👍</span>{따봉}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
