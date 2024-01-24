import React from 'react'
import Carousel from './Carousel'

const Banners = () => {
  return (
    <div style={{
      backgroundImage:"url(./banner2.jpg)", height: 400,
      display:'flex',
      flexDirection:"column",
      paddingTop: 25,
      justifyContent: "space-around",
      
      
    }}>
      <div 
       style={{
        color: "dark-grey",
        textTransform: "capitalize",
        fontFamily:"Montserrat"
      }}>
        <h1>CRYPTO HUNTER</h1>
        <div>Get all the Info regarding your favorite Crypto Currency</div>
      </div>
      <Carousel/>
    </div>
  )
}

export default Banners