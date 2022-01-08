import React from "react";
import Match from "./Match";

function Matchday({ day, games }) {
	let dayNum = day.split(" ");

	const game = games.filter((item) => {
		const date = new Date(item.commence_time).toDateString().split(" ");
		return dayNum[2] === date[2];
	});

     const finalGame = game.map((item)=>{
           return <Match details={item} teams={item.teams} />
     })

	return (
		<>
			<div className="match">
				<h5>{day}</h5>
                        {finalGame}
			</div>
		</>
	);
}

export default Matchday;
