import React from 'react'
import "./right.css";

function Betslip({slip}) {

      const team = slip.fixture
      const odds = slip.finalOdd[slip.odd]

      return (
            <div className="betslip">
            tick
            <div className="detail">
                  <p className="winner">Home</p>
                  <p className="fixture">{`${team[0]} v ${team[1]}`}</p>
                   <p className="xg">1X2</p>
            </div>
            <div>
                  x
                  <p>{odds}</p>
            </div>

      </div>
      )
}

export default Betslip
