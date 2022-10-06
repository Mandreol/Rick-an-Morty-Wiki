import React from "react";
import "../styles/location.css";

const Location = ({ location }) => {
	return (
		<article className="location">
			<h1>{location?.name}</h1>
			<ul>
				<li>
					<span>Type: </span>
					{location?.type}
				</li>
				<li>
					<span>Dimension: </span>
					{location?.dimension}
				</li>
				<li>
					<span>Population: </span>
					{location?.residents?.length}
				</li>
			</ul>
		</article>
	);
};

export default Location;
