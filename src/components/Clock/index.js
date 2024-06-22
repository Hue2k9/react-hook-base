import React, { useState } from 'react'
import ClockAction from './ClockAction'

export default function Clock() {
    const [showClock, setShowClock] = useState(true);

  return (
   <div>
    {showClock && <ClockAction/>}
    <button onClick={()=> setShowClock(false)}>Hide clock</button>
   </div>
  )
}
