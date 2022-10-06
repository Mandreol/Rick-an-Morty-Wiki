import React from "react";
import "../styles/filterList.css";

const FilterList = ({ suggestedList, setSearchInput }) => {
	const handleClick = (id) => setSearchInput(id);

	return (
		<ul className="filterList">
			{suggestedList?.map((location) => (
				<li key={location.id} onClick={() => handleClick(location.id)}>
					{location.name}
				</li>
			))}
		</ul>
	);
};

export default FilterList;
