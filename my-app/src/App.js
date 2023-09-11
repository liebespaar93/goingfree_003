import React, { useEffect, useState } from "react";

function App() {
	const [loading, setLoading] = useState(true);
	const [coins, setCoins] = useState([]);
	useEffect(() => {
		let src = "https://api.coinpaprika.com/v1/tickers";
		fetch(src)
			.then((res) => res.json())
			.then((data) => { setCoins(data); setLoading(false) })
	}, [])

	return (
		<div className="App">
			<h1>The Coins! {coins.length}</h1>
			{loading ? <strong>Loading...</strong> :
				<select>
					{coins.map(
						(value, index) => {
							return <option key={index}> {value.symbol}: ${value.quotes.USD.price}</option>;
						})}
				</select>
			}
		</div>
	);
}

export default App;
