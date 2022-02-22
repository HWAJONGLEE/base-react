import React from "react";
import ReactDom from "react-dom";


// 컴포넌트 생성 , 이 컴포넌트는 html을 구성한다
// some HTML

const App = () => {
  return <div>HI!</div>;
}

ReactDom.render(<App />, document.querySelector('.container'));