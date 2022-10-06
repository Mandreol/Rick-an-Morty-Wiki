import { useState, useEffect } from "react";
import "./App.css";
import getRandomNumbrer from "./utils/getRandomNumbrer";
import Location from "./components/Location";
import useFetch from "./Hooks/useFetch";
import axios from "axios";
import CardResident from "./components/CardResident";
import FilterList from "./components/FilterList";
import Error from "./components/Error";

function App() {
	const [location, setLocation] = useState("");
	const [searchInput, setSearchInput] = useState("");
	const [suggestedList, setsuggestedList] = useState();
	const [hasError, setHasError] = useState(false);
	useEffect(() => {
		let id = getRandomNumbrer();
		if (searchInput) {
			id = searchInput;
		}
		const url = `https://rickandmortyapi.com/api/location/${id}`;
		axios
			.get(url)
			.then((res) => {
				setHasError(false);
				setLocation(res.data);
			})
			.catch(() => setHasError(true));
		document.getElementById("idLocation").value = "";
	}, [searchInput]);

	const handleSumit = (e) => {
		e.preventDefault();
		setSearchInput(e.target.idLocation.value);
	};
	const handleChange = (e) => {
		if (e.target.value === "") {
			return setsuggestedList();
		} else {
			const url = `https://rickandmortyapi.com/api/location?name=${e.target.value}`;
			axios
				.get(url)
				.then((res) => setsuggestedList(res.data.results))
				.catch((err) => console.log(err));
		}
	};

	return (
		<div className="App">
			<div className="header">
				<img src="./rick-and-morty-31013.png" alt="" />
				<form onSubmit={handleSumit}>
					<button className="button">Search</button>
					<input
						className="input"
						id="idLocation"
						type="text"
						onChange={handleChange}
						placeholder="Enter the location"
					/>

					{document.getElementById("idLocation")?.value !== "" ? (
						<FilterList
							suggestedList={suggestedList}
							setSearchInput={setSearchInput}
						/>
					) : null}
				</form>
			</div>
			<div className="body">
				{hasError ? (
					<Error />
				) : (
					<>
						<Location location={location} />
						<div className="card-container">
							{location?.residents?.map((url) => (
								<CardResident url={url} key={url} />
							))}
						</div>
					</>
				)}
			</div>
		</div>
	);
}

export default App;
