import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(1223);
    fetch(`https://api.coinpaprika.com/v2/tickers`)
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, []);
  return (
    <div>
      <h1>The Coins!</h1>
      {loading ? <strong>Loading...</strong> : null}
    </div>
  );
}

export default App;
