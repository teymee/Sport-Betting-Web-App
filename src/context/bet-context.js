import React, { createContext } from 'react'


export const BetContext = createContext()

function BetProvider({children}) {
      const betslip = []
      return (
            <BetContext.Provider value={
                  betslip
            }>
                  {children}
            </BetContext.Provider>
      )
}

export default BetProvider
