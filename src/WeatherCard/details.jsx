import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { getName } from 'country-list'
import { Box, Center } from '@chakra-ui/react'
import UseWeatherContext from '../Context/weather'

function Details() {
    const[Country , setCountry] = useState('')
    const[ City, setCity] = useState('')
    const[ Sunrise, setSunrise] = useState('')
    const[ Sunset, setSunset] = useState('')

    const {weatherData} =  useContext(UseWeatherContext)

    useEffect(()=>{
        setCountry(weatherData?.sys?.country)
        setSunrise(weatherData?.sys?.sunrise)
        setSunset(weatherData?.sys?.sunset)
        setCity(weatherData?.name)

    },[weatherData])
  return (
   <>
   <Center 
   className='text-3xl font-thin text-yellow-100 font-serif'
   >
    <Box>
        <h1 className='mt-4'>Country : {getName(Country)}</h1>
        <h1 className='mt-4'>City : {City}</h1>
        <h1 className='mt-4'>Sunrise : {new Date(Sunrise * 1000).toLocaleTimeString()} </h1>
        <h1 className='mt-4'>Sunset : {new Date(Sunset * 1000).toLocaleTimeString()} </h1>
    </Box>

   </Center>
   </>
  )
}

export default Details