import './App.css'
import { Box, Center } from '@chakra-ui/react'
import NavBar from './NavBar'
import WeatherProvider from './Context/WeatherProvider'
import Main from './WeatherCard/Main'

function App() {


  return (
    <>

      <Center className='w-full h-screen bg-gray-500'>
      <Box className='w-5/6 mx-auto h-4/6 rounded-2xl p-6 bg-gray-600' boxShadow={'12px 12px 12px gray'}>
        <Center
          className=' ' >
          <NavBar />
        </Center>
        <Box
          className='font-thin'
        >
          <Main />
        </Box>
      </Box>

      </Center>

    </>
  )
}

export default App
