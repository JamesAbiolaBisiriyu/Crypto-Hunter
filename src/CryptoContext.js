import { createContext, useContext, useEffect, useState } from 'react'

const Crypto = createContext();
const CryptoContext = ({children}) => {
  const [currency, setCurrency] = useState('EUR')
  const [symbol, setSymbol] = useState("USD");

 useEffect(() => {
  if (currency=== "EUR") setSymbol('#')
  else if (currency==="USD") setSymbol("$");
 }, [currency]);


  return (
    <Crypto.Provider value={{currency, symbol, setCurrency}}>
      {children}

    </Crypto.Provider>
  )
}

export default CryptoContext;
export const CryptoState = () => {
  return useContext(Crypto);
}