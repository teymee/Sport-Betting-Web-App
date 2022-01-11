import React, { useContext } from "react";
import Betslip from "./Betslip";

import { BetContext } from "../../context/bet-context";
import "./right.css";

function RightSidebar() {
	const bet = useContext(BetContext);

	const betslip = bet.map((bet) => {
		return <Betslip slip={bet} />;
	});

	return (
		<div className="right-side">
			<div className="betslip-header">
				<h5>Betslip</h5>
				<h5>Cashout</h5>
			</div>

			<div className="betslips">{betslip}</div>
		</div>
	);
}

export default RightSidebar;
