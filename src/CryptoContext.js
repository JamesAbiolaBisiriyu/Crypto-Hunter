import { createContext, useContext, useState } from 'react'

const Crypto = createContext()
const CryptoContext = ({children}) => {
  const [currency, setcurrency] = useState('EUR')
  const [symbol, setSymbol] = useState()
  return (
    <Crypto.Provider>
      {children}

    </Crypto.Provider>
  )
}

export default CryptoContext;
export const CryptoState = () => {
  return useContext(Crypto);
}