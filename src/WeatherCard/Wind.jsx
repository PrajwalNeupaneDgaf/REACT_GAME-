import { Box, Center, Flex } from '@chakra-ui/react'
import React, { useState, useEffect, useContext } from 'react'
import UseWeatherContext from '../Context/weather'

function Wind() {
  const [speed, setSpeed] = useState('1.54')
  const [degree, setDegree] = useState('160')

  const {weatherData} =  useContext(UseWeatherContext)

  useEffect(()=>{
    setSpeed(weatherData?.wind?.speed)
    setDegree(weatherData?.wind?.deg)   

},[weatherData])

  return (
    <>
      <Flex
        className='text-3xl font-bold'>
        <img src='https://clipground.com/images/wind-logo-png-9.png' alt="" height={'100'} width={'100'} />
        <Center
          className='flex flex-col'
        >
          <Box
            className='text-3xl font-bold text-yellow-200'>
            Speed:{speed}
          </Box>
          <Box
            className='text-2xl font-thin text-yellow-200'>
            Degree:{degree}°
          </Box>

        </Center>

      </Flex>

    </>
  )
}

export default Wind