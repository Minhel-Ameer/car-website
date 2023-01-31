
import React from 'react'
import { useLocation } from 'react-router-dom'
import Header from './component/Header'


const Details = () => {
  const location = useLocation()
  console.log(location.state.val, location.state.post, location.state.img,'21')
  return (
    <div>
      {/* <Header/> */}
      <img style={{heigh:"200px", width:"150px"}} src={location.state.img} alt='logo' className='logo'/>
      <div>{location.state.post[location.state.val].car}</div>
      <div>{location.state.post[location.state.val].car_model}</div>   
          <div>{location.state.post[location.state.val].price}</div>
      
      
    </div>
  )
}

export default Details
