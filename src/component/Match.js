import React, { useContext } from "react";
import { BetContext } from "../context/bet-context";
import "./center.css";

function Match({ details, teams }) {
	const bet = useContext(BetContext);

	const rearrangeTeam = (team, home) => {
		let newTeams = [];
		for (let i = 0; i < team.length; i++) {
			if (team[i] === home) {
				newTeams.splice(0, 0, team[i]);
			} else {
				newTeams.splice(1, 0, team[i]);
			}
		}

		return newTeams;
	};

	const rearrangeOdds = (odds) => {
		let homeOdd = odds[1];
		let drawOdd = odds[2];
		let awayOdd = odds[0];

		let newOdd = [homeOdd, drawOdd, awayOdd];
		return newOdd;
	};

	let fixture = rearrangeTeam(teams, details.home_team);
	let finalOdd = rearrangeOdds(details.sites[0].odds.h2h);
	const insertBet = (odd) => {
		bet.push({
			fixture,
			odd,
			finalOdd,
		});
		console.log(bet);
	};

	const team = fixture.map((item) => {
		return <p>{item}</p>;
	});

	const odds = finalOdd.map((item, index) => {
		return (
			<span onClick={() => insertBet(index)}>
				{Number.parseFloat(item).toPrecision(3)}
			</span>
		);
	});
	return (
		<div className="match-details">
			<span className="kick-off">20:45</span>
			<div className="teams">{team}</div>

			<div className="odds">{odds}</div>
		</div>
	);
}

export default Match;
