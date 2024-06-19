import React, { useState } from 'react'
import UseWeatherContext from './weather'
import { useEffect } from 'react';

function WeatherProvider({children}) {
    const [Search, setSearch] = useState('Kathmandu');
    const [weatherData , setData] = useState({})
    const [error , seterror] = useState({})
    useEffect(() => {
        let API = `https://api.openweathermap.org/data/2.5/weather?q=${Search}&units=metric&appid=8837cf22859a15e14eeba93dc57c21ea`;
        console.log(Search)
        fetchapi(API);
    }, [Search]);
    const fetchapi = async (url) => {
        try {
            const res = await fetch(url)
            let data = await res.json()
            setData(data);
        }
        catch (err) {
            seterror(err)
            console.log(err.message)
        }
    }
    return (
        <>
        <UseWeatherContext.Provider value={{weatherData , setSearch ,error}}>
                {children}
            </UseWeatherContext.Provider>
        </>
    )
}

export default WeatherProvider