import { Box, Text } from '@chakra-ui/react';
import BookingWidget from './BookingWidget';
import { WrapperProps } from '@/utils/types';

const BookingWidgetContainer = ({ isDesktop }: WrapperProps) => {
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      w={'100%'}
      maxWidth={isDesktop ? '1200px' : '500px'}
      margin={'auto'}
      gap={'40px'}
      py={isDesktop ? '80px' : '40px'}
    >
      <Text
        sx={{
          fontSize: '20px',
          fontWeight: 200,
          color: 'white',
          letterSpacing: '0.08em',
        }}
      >
        Where will you stay?
      </Text>
      <BookingWidget />
    </Box>
  );
};

export default BookingWidgetContainer;
