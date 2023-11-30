import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
// import Crypto from './Crypto';
// import App from './cleanUp';
import App from './coinConverter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //  <React.StrictMode>
      // {/* <App />  */}
      //{/* <Crypto /> */}
      // <App />
    // </React.StrictMode>,
);

//StrictMode는 create-react-app로 설치했을 때 기본적으로 생성되는 태그로
// 해당 태그로 감싸져 있는 경우 자손까지 검사한다해서 두 번 실행된다고 합니다.
// React.StrictMode 태그를 지우시고 실행하면 한번실행됨
