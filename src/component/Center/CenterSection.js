import React, { useEffect, useState } from "react";
import axios from "axios";
import "./center.css";
import Match from "./Match";
import { useParams } from "react-router-dom";
import Matchday from "./Matchday";

function CenterSection() {
	const league = useParams("name");
	const [games, setGames] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(true);
		const CancelToken = axios.CancelToken;
		const source = CancelToken.source();

		const options = {
			method: "GET",
			url: "https://odds.p.rapidapi.com/v1/odds",
			params: {
				sport: league.name !== {} ? league.name : "soccer_epl",
				region: "uk",
				mkt: "h2h",
				dateFormat: "iso",
				oddsFormat: "decimal",
			},
			headers: {
				"x-rapidapi-host": "odds.p.rapidapi.com",
				"x-rapidapi-key": "0855b1cdf7msh52ad89e9f432c3fp126a9ejsncb3cac95c3da",
			},
		};
		

		axios
			.request(options)
			.then(function (response) {
				setGames(response.data.data);
				setIsLoading(false);
			})
			.catch(function (error) {
				console.error(error);
			});

			return () => {
				// cancel the request before component unmounts
				source.cancel();
			    };
		
	}, [league]);


	const arraySort = (arr) => {
		let date = [];

		for (let i = 0; i < arr.length; i++) {
			const day = new Date(arr[i].commence_time).toDateString();
			date.push(day);
		}

		let unique = [...new Set(date)];

		return unique;
	};

	const content = arraySort(games).map((item, index) => {
		return <Matchday day={item} key={index} games={games} />;
	});

	

	return (
		<div className="center">
			<div className="mini-header">
				<div className="online">
					<span className="ball"></span>
					<h4>Upcoming Matches</h4>
				</div>

				<ul>
					<li>Home</li>
					<li>Draw</li>
					<li>Away</li>
				</ul>
			</div>

			<div className="matches">
				{!isLoading && content}
			</div>
		</div>
	);
}

export default CenterSection;
