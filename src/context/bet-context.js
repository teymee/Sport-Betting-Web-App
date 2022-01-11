import React, { createContext, useState } from 'react'


export const BetContext = createContext()

function BetProvider({children}) {
      
      const [betslips, setBetslips] = useState([])

      const localBetslip = localStorage.getItem('betslip')

      if(localBetslip){
                  setBetslips(localBetslip)
      }
    
      localStorage.setItem('betslip', betslips)
      return (
            <BetContext.Provider value={
                  betslips
            }>
                  {children}
            </BetContext.Provider>
      )
}

export default BetProvider
