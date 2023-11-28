// 과제 USD 를 BTC 로 전환하기
// input에 20USD 적으면 얼만큼의 Coin을 살 수 있는지 알려주기
// https://api.coinpaprika.com/v1/tickers
// 2개의 useState 추가 (1. usd-input 2. selected-coin)
import { useState, useEffect } from 'react';

function App() {
   //API 가져오기전 맨 처음 loading 보여주기
   const [loading, setLoading] = useState(true);
   const [coins, setCoins] = useState([]);
   const [usd, setUsd] = useState(0);
   const [getCoin, setCoin] = useState(0);
   useEffect(() => {
      fetch('https://api.coinpaprika.com/v1/tickers')
         .then((response) => response.json())
         .then((json) => {
            setCoins(json);
            setLoading(false);
         });
   }, []);
   const onChange = (e) => setUsd(e.target.value);
   //value 가져오려면 선택option에 value값 정해줘야지
   const selectCoin = (e) => setCoin(e.target.value);

   return (
      <div>
         <h1> Coin Converter {loading ? null : `(${coins.length})`} </h1>
         <label htmlFor='inputusd'> Enter amount: </label>
         <input
            id='inputusd'
            type='number'
            placeholder='Enter amount of USD'
            onChange={onChange}
            value={usd}
         />
         <br />
         <h4>select coins you want to convert : </h4>
         {loading ? (
            <strong>Loading...</strong>
         ) : (
            <select onChange={selectCoin}>
               <option key='x'>select coin</option>
               {coins.map((coin, index) => (
                  <option
                     key={index}
                     value={coin.quotes.USD.price}>
                     {coin.name}({coin.symbol}): ${coin.quotes.USD.price.toFixed(2)}
                  </option>
               ))}
            </select>
         )}
         <div>
            <h2>Coins you can buy: {getCoin > 0 ? (usd / getCoin).toFixed(2) : null}</h2>
         </div>
      </div>
   );
}

export default App;
