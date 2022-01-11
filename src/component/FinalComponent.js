import React from 'react'
import CenterSection from './Center/CenterSection'
import LeftSidebar from './Left/LeftSidebar'
import RightSidebar from './Right/RightSidebar'

function FinalComponent() {
      return (
            <div  className="focus">
                  <LeftSidebar/>
                  <CenterSection/>
                  <RightSidebar/>
            </div>
      )
}

export default FinalComponent
