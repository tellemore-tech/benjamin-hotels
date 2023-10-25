import { BenjaminHotelsIcon } from '@/icons/icons';
import { Box, Spinner } from '@chakra-ui/react';

const Loading = () => {
  return (
    <Box
      width="100vw"
      height="100vh"
      backgroundColor="background.dark"
      display={'flex'}
      flexDirection={'column'}
      gap={'40px'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <BenjaminHotelsIcon fontSize={'180px'} color={'background.light'} />
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="white"
        color="background.dark"
        size="xl"
      />
    </Box>
  );
};

export default Loading;
