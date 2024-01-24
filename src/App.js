import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { BrowserRouter,  Route, Routes  } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Homepage from './Pages/Homepage';
import CoinPage from './Pages/CoinPage';

const App
 = () => {
  return (
   <BrowserRouter>
   <ThemeProvider theme={theme}>
   
   <div style={{backgroundColor: theme.palette.background.default, color:'white',
  minHeight: '10vh',display:"flex",
  height:"40%",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "center"}}>
   <Header/>
   <Routes>
    <Route path='/' element={<Homepage/>} exact />    
    <Route path='/coins' element={<CoinPage/>} />
    </Routes>
   </div>
   </ThemeProvider>   
   
   </BrowserRouter>
  );
}

export default App;
