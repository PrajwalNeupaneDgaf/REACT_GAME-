import { Box, Center, Flex } from '@chakra-ui/react'
import React, { useState , useContext,useEffect} from 'react'
import UseWeatherContext from '../Context/weather'

function Temp() {
    const [temp, setTemp] =useState('')
    const [Feel, setFeel] =useState('')
    const [max, setMax] =useState('')
    const [Min, setMin] =useState('')

    const {weatherData} =  useContext(UseWeatherContext)

    useEffect(()=>{
        setTemp(weatherData?.main?.temp)
        setFeel(weatherData?.main?.feels_like)
        setMax(weatherData?.main?.temp_max)
        setMin(weatherData?.main.temp_min)

    },[weatherData])
  return (
   <>
  
   <Flex className='font-sans text-white font-semibold'>
     <Box>
     <h1 className='text-2xl mr-4'>
            Temperature: {temp}°c
        </h1>
        <h1 className='text-2xl'>
            Feels Like: {Feel}°c
        </h1>

     </Box>
       
        <Box>
        <h1 className='text-2xl'>
            Max: {max}°c
        </h1>
        <h1 className='text-2xl'>
            Min: {Min}°c
        </h1>
        </Box>
       

   </Flex>
  
   </>
  )
}

export default Temp