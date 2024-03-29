// import React from 'react'
// import  { useEffect} from 'react';
// import { useState } from 'react'
// import { CoinList } from '../config/api';
// import axios from 'axios';
// import { CryptoState } from '../CryptoContext';
// import { AppBar, Container, Link, TextField, ThemeProvider, Toolbar, Typography, createTheme } from '@mui/material';

// const CoinsTable = () => {
//   const [coins, setCoins] = useState([]);
//   // const [loading, setLoading] = useState(false);

// const { currency } = CryptoState();


//   const fetchCoins = async () => {
//     // setLoading(true)
//     const { data } = await axios.get(CoinList(currency));
   
//    setCoins(data);
//     // setLoading(false);
//     const [search, setSearch] = useState();
// console.log(coins);

// useEffect(() => {
//  fetchCoins()
// }, [currency]);


// const darkTheme = createTheme({

//   palette: {
//     primary: {
//       main: '#fff',
//     },
//     mode: "dark",
//     },
// });


//   return (
    
//     <ThemeProvider theme={darkTheme}>
//     <AppBar color='transparent' position='static'>
//       <Container style={{display: 'flex', textAlign: 'center'}}>
//         <Toolbar>
//           <Link className='home' to= '/' style={{textDecoration:'none'}}>
//           <Typography       variant='h4' style={{  margin:18,  fontFamily:'Montserrat'}}>Crypto Prices by Market Cap</Typography></Link>
//          <TextField label = 'Search for a Crypto Currency....'
//          variant='outlined'
//          style={{marginBottom: 20, width: '100%'}}
//          onChange={e=>setSearch(e.target.value)}/>
//         </Toolbar>
//       </Container>
//     </AppBar>
//     </ThemeProvider>

//   )
// }
// }

// export default CoinsTable



import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
    Container,
    LinearProgress,
    Pagination,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    Typography,
    createTheme,
} from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { CryptoState } from '../CryptoContext';
import { useNavigate } from 'react-router-dom';
import { numberWithCommas } from './Banner/Carousel';
import { CoinList } from '../config/api';

const CoinsTable = () => {
    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);
    const navigate = useNavigate();

    const { currency, symbol } = CryptoState();


    const paginationStyle = {
        ul: {
            "& .MuiPaginationItem-root": {
                color: "gold",
            },
        },
    };




    useEffect(() => {
        const fetchCoins = async () => {
            setLoading(true);
            try {
                const { data } = await axios.get(CoinList(currency));
                setCoins(data);
            } catch (error) {
                console.error('Axios error:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchCoins();
    }, [currency]);

    const darkTheme = createTheme({
        palette: {
            primary: {
                main: '#fff',
            },
            type: 'dark',
            text: {
                primary: '#fff',
            },
        },
    });

    const handleSearch = () => {
        return coins.filter(
            (coin) =>
                coin.name.toLowerCase().includes(search) ||
                coin.symbol.toLowerCase().includes(search)
        );
    };

    return (
        <ThemeProvider theme={darkTheme}>
            <Container style={{ textAlign: 'center' }}>
                <Typography variant="h4" style={{ margin: 18, fontFamily: 'Montserrat' }}>
                    Cryptocurrency Prices by Market Cap
                </Typography>
                <TextField
                    label="Search For a Crypto Currency.."
                    variant="outlined"
                    style={{ marginBottom: 20, width: '100%' }}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <TableContainer>
                    {loading ? (
                        <LinearProgress style={{ backgroundColor: 'gold' }} />
                    ) : (
                        <Table>
                            <TableHead style={{ backgroundColor: '#EEBC1D' }}>
                                <TableRow>
                                    {['Coin', 'Price', '24h Change', 'Market Cap'].map((head) => (
                                        <TableCell
                                            style={{
                                                color: 'black',
                                                fontWeight: 700,
                                                fontFamily: 'Montserrat',
                                            }}
                                            key={head}
                                            align={head === 'Coin' ? 'left' : 'right'}
                                        >
                                            {head}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {handleSearch()
                                    .slice((page - 1) * 10, (page - 1) * 10 + 10)
                                    .map((row) => {
                                        const profit = row.price_change_percentage_24h > 0;
                                        return (
                                            <TableRow
                                                onClick={() => {
                                                    console.log('Clicked!', row.id);
                                                    navigate(`/coins/${row.id}`);
                                                }}

                                                style={{
                                                    cursor: 'pointer',
                                                    '&:hover': {
                                                        backgroundColor: '#131111 !important', // Adding !important to ensure it takes precedence
                                                    },
                                                }}

                                                key={row.name}
                                            >
                                                <TableCell
                                                    component="th"
                                                    scope="row"
                                                    style={{
                                                        display: 'flex',
                                                        gap: 15,
                                                    }}
                                                >
                                                    <img
                                                        src={row?.image}
                                                        alt={row.name}
                                                        height="50"
                                                        style={{ marginBottom: 10 }}
                                                    />
                                                    <div
                                                        style={{ display: 'flex', flexDirection: 'column' }}
                                                    >
                                                        <span
                                                            style={{
                                                                textTransform: 'uppercase',
                                                                fontSize: 22,
                                                            }}
                                                        >
                                                            {row.symbol}
                                                        </span>
                                                        <span style={{ color: 'dark-grey' }}>{row.name}</span>
                                                    </div>
                                                </TableCell>
                                                <TableCell align="right">
                                                    {symbol} {numberWithCommas(row.current_price.toFixed(2))}
                                                </TableCell>
                                                <TableCell
                                                    align="right"
                                                    style={{
                                                        color: profit ? 'rgb(14, 203, 129)' : 'red',
                                                        fontWeight: 500,
                                                    }}
                                                >
                                                    {profit && '+'}
                                                    {row.price_change_percentage_24h.toFixed(2)}%
                                                </TableCell>
                                                <TableCell align='right'>
                                                    {symbol}{' '}
                                                    {numberWithCommas(
                                                        row.market_cap.toString().slice(0, -6)
                                                    )}
                                                    M
                                                </TableCell>
                                            </TableRow>
                                        );
                                    })}
                            </TableBody>
                        </Table>
                    )}
                </TableContainer>
                <Pagination
                    count={Math.ceil(handleSearch().length / 10)}
                    style={{
                        padding: 20,
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",

                    }}
                    classes={{ ul: paginationStyle.pagination }}
                    onChange={(_, value) => {
                        setPage(value);
                        window.scroll(0, 450);
                    }}
                />
            </Container>
        </ThemeProvider>
    );
};

export default CoinsTable;

