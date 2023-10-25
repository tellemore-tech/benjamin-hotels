import { BenjaminHotelsIcon } from '@/icons/icons';
import { Box, Text, Link } from '@chakra-ui/react';

const NotFound = () => {
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
      color={'background.light'}
      letterSpacing={'0.15em'}
    >
      <BenjaminHotelsIcon fontSize={'180px'} color={'background.light'} />
      <Text>Sorry page not found.</Text>
      <Link href="/" textDecoration={'underline'}>
        Go home
      </Link>
    </Box>
  );
};

export default NotFound;
