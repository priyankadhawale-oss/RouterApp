import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const Mobile = () => {
    const Navigate=useNavigate();
  return (
    <div>Mobile are: 
        <button onClick={()=>Navigate('mobile1')}>Mobile1</button>
        <button onClick={()=>Navigate('mobile2')}>Mobile2</button>
        <button onClick={()=>Navigate('mobile3')}>Mobile3</button>
        <Outlet/>
    </div>
  )
}

export default Mobile