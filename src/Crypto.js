import { useEffect, useState } from 'react';

function App() {
   const [count, setCount] = useState(0);
   const onClick = () => setCount((val) => val + 1);
   console.log('I run all the time');
   const [keyword, setKeyword] = useState('');
   const onChange = (event) => setKeyword(event.target.value);
   // 두번째 인자인 배열이 비어있음, 처음에만 실행된다.
   useEffect(() => {
      console.log('CALL THE API...');
   }, []);
   // 배열안에 keyword가 변경될 시에 실행시키라는 조건이 있음.
   useEffect(() => {
      if (keyword !== '' && keyword.length > 5) {
         console.log('SERCH FOR', keyword);
      }
   }, [keyword]);
   // 배열안에 count 가 변경될 시에 실행시키라는 조건이 있음.
   useEffect(() => {
      console.log("I run when 'count' changes.");
   }, [count]);
   // count 와 keyword 둘다 변경시
   useEffect(() => {
      console.log("I run when 'count'&'keyword' changes.");
   }, [count, keyword]);

   return (
      <div>
         <input
            value={keyword}
            onChange={onChange}
            type='text'
            placeholder='Serch here...'
         />
         <h1>{count}</h1>
         <button onClick={onClick}>Click me!</button>
      </div>
   );
}

export default App;

// 주의
// <button > tag 안의 onClick 은 이벤트 리스너
// <Button /> 안의 onClick 은 prop

// state가 변경될때마다 component를 다시 실행시키고 싶지 않을때
// 예를들어 외부 api를 참조할 때 한번만 실행하고 그 이후엔 실행시키고 싶지 않을 경우
// useState 대신 useEffect 사용

// 검색창을 만든다고 했을때 input 에 글자가 타입될때마다 state가 변경되어
// component가 실행되게 되는데 사실 검색어가 완성된 후 버튼을 클릭했을 때 변경되고,
// 또 버튼을 여러번 눌러도 검색어의 변경이 있을때만 실행되길 원한다. 이때 useEffet 사용함.

// 참고로 useEffect는 화면이 다 그려지고 나서 실행됩니다. 즉 화면을 먼저 그리고 그다음 실행되요~
// 이건 라이프 사이클이랑 연관이 있는 함수이고, 최초 실행만 할 것이냐, 아님 props, state에 따라(언급한 마법) 렌더링시 다시 그릴것이냐 판단하는 함수인듯 합니다.
// class 문법 라이프 사이클 펑션을 함축해놓은게 useEffect 입니다.

// Memo stops the component from re-rendering if the props haven't changed.
// useEffect runs a function when the props change, or only at the start or end of the component's lifecycle.
