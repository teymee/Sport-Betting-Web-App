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
		// setIsLoading(true)
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
				"x-rapidapi-key": "71738864camshf00d52195179bb5p1c78dfjsn8fd7877ce2ec",
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



		const content = arraySort(games).map((item) => {
			// return arraySort(item)
			return <Matchday day={item} key={item.id} games={games} />;
		});
	
		

	// !isLoading && console.log(arraySort(games))

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

				{/* <div className="match">
					<h5>15/01 Saturday</h5>
					<div className="match-details">
						<span className="kick-off">20:45</span>
						<div className="teams">
							<p>Gent</p>
							<p>KV Kortrijk</p>
						</div>

						<div className="odds">
							<span>1.52</span>
							<span>1.52</span>
							<span>1.52</span>
						</div>
					</div>
				</div> */}
			</div>
		</div>
	);
}

export default CenterSection;
