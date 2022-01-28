import React, { useContext, useEffect, useState } from "react";
import Betslip from "./Betslip";

import { BetContext } from "../../context/bet-context";
import "./right.css";

function RightSidebar() {
	const [finalBetSlip, setFinalBetSlip] = useState([])
	const bet = useContext(BetContext);
	

	useEffect(()=>{
		setFinalBetSlip([...bet])
	},[bet,finalBetSlip])


	let betslip
	if(finalBetSlip.length > 0){
		
		 betslip = finalBetSlip.map((bet) => {
			return <Betslip slip={bet} />;
		});
	}
	

	return (
		<div className="right-side">
			<div className="betslip-header">
				<h5>Betslip</h5>
				<h5>Cashout</h5>
			</div>

			<div className="betslips">{finalBetSlip.length !== 0 && betslip}</div>
		</div>
	);
}

export default RightSidebar;
