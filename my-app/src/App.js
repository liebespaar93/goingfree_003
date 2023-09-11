import React, { useState } from "react";

function App() {

	const [toDo, setToDo] = React.useState("");
	const [toDos, setToDos] = React.useState([]);
	const onChange = (event) => setToDo(event.target.value);
	const onSubmit = (event) => {
		event.preventDefault();
		if (toDo === "")
			return;
		setToDos((self) => { return [toDo, ...self]});
		setToDo("");
		console.log(toDo, toDos);
	}

	return (
		<div className="App">
			<form onSubmit={onSubmit}>
				<h1>Doc ({toDos.length})</h1>
				<input onChange={onChange}
					value={toDo}
					placeholder="write" />
				<button>button</button>
			</form>
			<hr />
			<div>
				{toDos.map((value, index) => <li key={index}>{value}</li>)}
			</div>
		</div>
	);
}

export default App;
