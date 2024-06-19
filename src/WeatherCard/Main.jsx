import React, { useContext, useEffect } from 'react'
import WeatherDis from './WeatherDis'
import Details from './details'
import { Flex,Box, Center } from '@chakra-ui/react'
import Temp from './temp'
import Wind from './Wind'
import UseWeatherContext from '../Context/weather'

function Main() {  
  const {weatherData , error} = useContext(UseWeatherContext)
  useEffect(()=>{
    handleOpen()
  },[weatherData])
  const handleOpen  = ()=>{
    console.log(weatherData)
  }
  if(!weatherData.main){
    return(
      <>
      <Center className='text-white font-sans text-4xl mt-32 h-full'>
      <h1>
        {error? `Search Other -- City Not Found` : "Loading---"}

      </h1>
      </Center>
      </>
    )
  }
   
  return (
    <>
    <Details/>
    <Flex
    className='justify-around'
    >
    <Box>
    <WeatherDis/>
    </Box>
    <Box
    className='my-auto'>
    <Temp/> 
    </Box>
    <Box className='my-auto'>
      <Wind/>
    </Box>
    </Flex>
    
    </>
  )
}

export default Main