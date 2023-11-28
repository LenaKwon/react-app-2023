
import { useState, useEffect } from 'react';

//fetch 한 api 를 개발자도구 network 에 보면 tickers클릭 response보면 받아온 json 있음
function App() {
   const [loading, setLoading] = useState(true);
   const [coins, setCoins] = useState([]);
   useEffect(() => {
      fetch('https://api.coinpaprika.com/v1/tickers')
         .then((response) => response.json())
         .then((json) => {
            setCoins(json);
            setLoading(false);
            // 두 매서드 setCoins와 setLoading 둘다 마지막 then 함수안에 들어감
            //괄호 {} 안썼더니 false 세팅 잘 안됨.
        });    
   }, []);
   return (
      <div>
         <h1>The Coins! {loading? "" :`(${coins.length})`} </h1>
         {loading ? (
            <strong>Loading...</strong>
         ) : (
            <select>
               {coins.map((coin) => (
                  <option>
                     {coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD
                  </option>
               ))}
            </select>
         )}
      </div>
   );
}
export default App;
