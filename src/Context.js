// context API 
// useContext hooks

// context (warehouse)
// provider (delivery boy)
// consumer / (useContext( you ))

import React, { useState, useEffect, useContext } from "react";

export const API_URL = `http://www.omdbapi.com/?apikey=727bbdc1`;

const AppContext = React.createContext();

// we need to create a provider function

const AppProvider = ({children}) => {

    const [isLoading, setisLoading] = useState(true)
    const [movie, setmovie] = useState([])
    const [isError, setisError] = useState({ show: "false", msg: "" })
    const [query, setquery] = useState("avengers")

    const getMovies = async(url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);

            if(data.Response === "True") {
                setisLoading(false);
                setisError({
                    show: false,
                    msg: "",
                });
                setmovie(data.Search);
            }
            else {
                setisError({
                    show: true,
                    msg: data.Error,
                }
                )
            }

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        let timerOut = setTimeout(() => {
            getMovies(`${API_URL}&s=${query}`);
        }, 500);
        return () => clearTimeout(timerOut);
    }, [query]);

    return <AppContext.Provider value={{ isLoading, isError, movie, query, setquery }}>
        {children}
        </AppContext.Provider>
}

// global custom hooks
const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider, useGlobalContext }