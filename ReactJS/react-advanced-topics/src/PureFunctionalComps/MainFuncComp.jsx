import React from 'react'
import { useState } from 'react'
import ChildFunc from './ChildFunc'

const MainFuncComp = () => {
    const [count,setCount]=useState(0)
  return (
    <div>
      <button onClick={()=>{setCount(count+1)}}>Click Me</button>
      <h2>You Clicked {count} times</h2>
      <ChildFunc count={count}/>
    </div>
  )
}

export default MainFuncComp
