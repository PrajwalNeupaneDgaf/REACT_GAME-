import { Box, Center,Flex } from '@chakra-ui/react'
import React, { useState , useEffect, useContext} from 'react'
import UseWeatherContext from '../Context/weather'

function WeatherDis() {
    const [weatherDetail , setWeatherDetail]= useState('')
    const [weatherDisc , setWeatherDisc]= useState('')
    const [iconurl,seticonurl] = useState(``)

    const {weatherData} =  useContext(UseWeatherContext)

    useEffect(()=>{
      setWeatherDetail(weatherData?.weather[0]?.main)
      setWeatherDisc(weatherData?.weather[0]?.description)
      seticonurl(`http://openweathermap.org/img/wn/${weatherData?.weather[0]?.icon}@2x.png`)  

    },[weatherData])
  return (
   <>
   
   <Flex
   className='text-3xl font-bold'>
    <img src={iconurl} alt="" height={'100'} width={'100'} />
   <Center
   className='flex flex-col'
   >
    <Box
    className='text-3xl font-bold text-yellow-200'>
        {weatherDetail}
    </Box>
  <Box
  className='text-xl font-thin'>
    {weatherDisc}
  </Box>
   
   </Center>
    
   </Flex>
   
   
  
   </>
  )
}

export default WeatherDis