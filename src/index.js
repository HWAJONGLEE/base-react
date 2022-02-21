import React from "react";
import ReactDom from "react-dom";

//유튜브 API key
const API_KEY = 'AIzaSyCi2Rj8dw8QaBv2s937dw_u9sA_v2FgVVo';

// 컴포넌트 생성 , 이 컴포넌트는 html을 구성한다
// some HTML

const App = () => {
  return <div>HI!</div>;
}

ReactDom.render(<App />, document.querySelector('.container'));