import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [myMoney, setMyMoney] = useState("");
  const [bitCoin, setBitCoin] = useState({});
  const onChange = (e) => {
    setMyMoney(e.target.value);
    console.log(bitCoin);
  };
  useEffect(() => {
    fetch(`https://api.coinpaprika.com/v1/tickers`)
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
        setBitCoin(json[0]);
      });
  }, []);
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {/* 입력값에 따라서 얼마만큼의 비트코인을 살 수 있는지 알려줌 */}
      {loading ? null : (
        <>
          <h3>내가 가지고 있는 금액을 적어주세요!</h3>
          <input
            type="text"
            value={myMoney}
            placeholder="원 단위로 적어주세요"
            onChange={onChange}
          />
          <div>
            내 돈으로 살 수 있는 비트코인:{" "}
            {myMoney / 1358 / bitCoin.quotes.USD.price}
          </div>
        </>
      )}
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select>
          {coins.map((coin) => (
            <option key={coin.id}>
              {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default App;