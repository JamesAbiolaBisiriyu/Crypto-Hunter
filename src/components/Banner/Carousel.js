import React, { useState, useEffect } from 'react'
import { TrendingCoins } from '../../config/api'
import axios from 'axios'
import {CryptoState} from "../../CryptoContext"
import {} from '../../config/api'


const Carousel = () => {
  const [trending, setTrending] = useState([]);
  const { currency } = CryptoState()
  const fetchTrendingCoins =async () => {
    const { data } = await axios.get(TrendingCoins(currency));
    setTrending(data);
    console.log(trending);
  };

useEffect(() => {
  fetchTrendingCoins();
}, [currency]);

  return (
    
    <div className='carousel'>

     Carousel
      
    </div>
  )
}

export default Carousel