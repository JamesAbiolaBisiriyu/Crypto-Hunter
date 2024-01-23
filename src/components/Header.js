import { AppBar, Container, MenuItem, Select, Toolbar, Typography, createTheme, ThemeProvider } from '@mui/material'
// import { createTheme } from '@mui/system';
import React from 'react'
import { Link } from 'react-router-dom'






const Header = () => {
  const darkTheme = createTheme({

    palette: {
      primary: {
        main: '#fff',
      },
      mode: "dark",
      },
  });
  return (
    <ThemeProvider theme={darkTheme}>
    <AppBar color='transparent' position='static'>
      <Container>
        <Toolbar>
          <Link className='home' to= '/' style={{textDecoration:'none'}}>
          <Typography       variant='h6' style={{flex:1, color:'gold', fontWeight:'bold', fontFamily:'Montserrat', cursor:'pointer'}}>Crypto Hunter</Typography></Link>
          <Select variant='outlined' 
          style={{
            width:100,
            height: 40,
            marginRight:15,
          }}>
            <MenuItem value={'USD'}>USD</MenuItem>
            <MenuItem value={'EUR'}>EURO</MenuItem>
          </Select>
        </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider>
  )
}

export default Header