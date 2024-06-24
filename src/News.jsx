import React, { useEffect, useState } from 'react'
import { Box, IconButton, Paper, Tooltip, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";

const News = () => {
    const [searchInputs, setSearchInputs] = useState("Latest")
    const Searchstart = async () => {
        // part list
        // const url = 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList';
        // const options = {
        //     method: 'GET',
        //     headers: {
        //         'x-rapidapi-key': '76edebff8bmshfd8997a90502bb0p15a708jsnba5d56016f28',
        //         'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
        //     }
        // };

        // try {
        //     const response = await fetch(url, options);
        //     const result = await response.json();
        //     console.log(result);
        //     setNewsData(result)
        // } catch (error) {
        //     console.error(error);
        // }
        const url = `https://google-news13.p.rapidapi.com/search?keyword=${searchInputs}&lr=en-IN`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '76edebff8bmshfd8997a90502bb0p15a708jsnba5d56016f28',
                'x-rapidapi-host': 'google-news13.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            const data=result.items
            setNewsData(data)
        } catch (error) {
            console.error(error);
        }
    }
    const [newsData, setNewsData] = useState([])

    useEffect(() => {
        Searchstart()
    }, [])
    return (
        <>
            <Paper elevation={5} sx={{ height: "60px", padding: "1rem", display: "flex", justifyContent: "space-between", alignItems: "center" }} >
                <Box sx={{ display: { xs: "none", sm: "block" }, flexDirection: "column" }} >
                    <Typography fontSize={"30px"} fontWeight={"700"} sx={{ borderBottom: "2px solid red" }} >Chatpatti</Typography>
                    <Typography >News</Typography>
                </Box>
                <div>
                    <Typography fontSize={"30px"} fontWeight={"700"} sx={{ textDecoration: "underline 3px solid red" }} >{searchInputs} Headlines</Typography>
                </div>
                <Box sx={{ border: "1px solid #000", borderRadius: "25px", padding: "5px", display: { xs: "none", md: "block" } }}>
                    <input type='text' placeholder='Search here...' value={searchInputs} onChange={(e) => setSearchInputs(e.target.value)} style={{ height: "40px", color: "black", paddingInlineStart: "10px", borderRadius: "25px", outline: "none", border: "none" }} />
                    <Tooltip title={"Search"} arrow >
                        <IconButton sx={{ backgroundColor: "#00ff16" }} onClick={Searchstart} >
                            <SearchIcon sx={{ color: "black", fontSize: "25px" }} />
                        </IconButton>
                    </Tooltip>
                </Box>
            </Paper>
            <Paper elevation={3} sx={{ marginTop: "1rem", height: "calc(100%-100px)", padding: "1rem" }} >
            {
                    newsData.map((item) => {
                        return (
                            <>
                                <Paper elevation={5} sx={{ padding: "10px", margin: "1rem" }} >
                                    //body parts list
                                    {/* <div>{item}</div> */}
                                 //news app
                                    <div>
                                        <img src={item.images.thumbnailProxied} alt='Image is Loading...' />
                                    </div>
                                    <div>
                                        <h3>
                                            {item.title}
                                        </h3>
                                        <p>{item.snippet}</p>
                                        <Link to={item.newsUrl}>Read More</Link>
                                    </div>
                                </Paper>
                            </>
                        )
                    })
                }
            </Paper>
        </>
    )
}

export default News