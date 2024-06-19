import React, { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';

function CurrentDate() {
  const [date, setDate] = useState('');

  useEffect(() => {
    const handleDate = () => {
      const d = new Date();
      const formattedDate = d.toDateString();
      setDate(formattedDate);
      console.log(formattedDate);
    };

    handleDate();
  }, []);

  return (
    <Box className='font-thin text-2xl'>
      {date}
    </Box>
  );
}

export default CurrentDate;
