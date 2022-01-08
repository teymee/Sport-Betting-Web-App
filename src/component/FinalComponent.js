import React from 'react'
import CenterSection from './CenterSection'
import LeftSidebar from './LeftSidebar'
import RightSidebar from './RightSidebar'

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
