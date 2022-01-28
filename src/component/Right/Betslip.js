import React, { useContext } from "react";
import { BetContext } from "../../context/bet-context";
import "./right.css";

function Betslip({ slip }) {
      const bet = useContext(BetContext)
	const team = slip.fixture;
	const odds = slip.finalOdd[slip.odd];
      

      const removeBetslip = ()=>{
            const isExist = bet.findIndex((el) => {
			return el.id === slip.id;
		});

          bet.splice(isExist, 1)
      }

	let winner;

	switch (slip.odd) {
		case 0:
			winner = "Home";
			break;

		case 1:
			winner = "Draw";
			break;
		case 2:
			winner = "Away";
			break;

		default:
			break;
	}

	return (
		<div className="betslip">
			<div className="tick">&#10003;</div>
			<div className="detail">
				<p className="winner">{winner}</p>
				<p className="fixture">{`${team[0]} v ${team[1]}`}</p>
				<p className="xg">1X2</p>
			</div>

			<div>
				<div className="cancel"  onClick={removeBetslip}>&#x2715;</div>
				<p>{odds}</p>
			</div>
		</div>
	);
}

export default Betslip;
