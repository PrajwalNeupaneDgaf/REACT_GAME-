import './App.css'
import { Box , Center, } from '@chakra-ui/react'
import Search from './assets/NavBar/Search'
import Date from './assets/NavBar/Date'


function NavBar() {


    return (
        <>
            <Box className='w-full h-22 p-1'>
                <Center display={'flex'}
                justifyContent={'space-between'}
                 >
                    <Box className='text-3xl font-thin'>
                        Weather API
                    </Box>
                    <Search />
                    <Date/>
                </Center>
            </Box>

        </>
    )
}

export default NavBar
