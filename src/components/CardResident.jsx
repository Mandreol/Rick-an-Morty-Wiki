import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/cardResident.css";

const CardResident = ({ url }) => {
	const [resident, setResident] = useState();
	useEffect(() => {
		axios
			.get(url)
			.then((res) => setResident(res.data))
			.catch((err) => console.log(err));
	}, []);

	return (
		<article className="card-resident">
			<header
				className="card-resident_header"
				style={{ backgroundImage: "url(./fondeHeader.jpg)" }}>
				<img src={resident?.image} alt="" />

				<div className="header-status">
					{resident?.status === "Alive" ? (
						<div className="circle" style={{ backgroundColor: "green" }}></div>
					) : resident?.status === "Dead" ? (
						<div className="circle" style={{ backgroundColor: "red" }}></div>
					) : (
						<div className="circle" style={{ backgroundColor: "yellow" }}></div>
					)}

					<span>{resident?.status}</span>
				</div>
			</header>
			<section className="card-footer">
				<h3>{resident?.name}</h3>
				<ul>
					<li>
						<span>Species: </span>
						{resident?.species}
					</li>
					<li>
						<span>Origin: </span>
						{resident?.origin.name}
					</li>
					<li>
						<span>Episodes where appear: </span>
						{resident?.episode.length}
					</li>
				</ul>
			</section>
		</article>
	);
};

export default CardResident;
