import React, { useContext } from 'react'
import { useState, useEffect } from 'react'
import { Input , Box , Button} from '@chakra-ui/react'
import UseWeatherContext from '../../Context/weather'

function Search() {
    const [searchTerm, setSearchTerm] = useState('')
    const {setSearch} = useContext(UseWeatherContext)

    const HandleClick = ()=>{
        setSearch(searchTerm)
    }
  return (
    <>
    <Box
    className='border-solid border-black  border p-1 rounded-xl w-96'
    >
    <Input value={searchTerm} onChange={(e)=>{
        setSearchTerm(e.target.value)
    }}
    className='w-80 text-2xl outline-none font-thin my-auto bg-transparent'
    placeholder='Search The Location'
    >
    
    </Input>
    <Button
    onClick={searchTerm? HandleClick:null}

    className='text-2xl my-auto mx-auto'
    >
        🔎
    </Button>

    </Box>
    </>
  )
}

export default Search