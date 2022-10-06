import { useEffect, useState } from "react";
import axios from "axios";
const useFetch = (URL) => {
	const [res, setResponse] = useState();
	useEffect(() => {
		axios
			.get(URL)
			.then((res) => setResponse(res.data))
			.catch((err) => console.log(err));
	}, []);
	return res;
};

export default useFetch;
