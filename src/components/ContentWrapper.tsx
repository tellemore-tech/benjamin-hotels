import { WrapperProps } from '@/utils/types';
import { Box } from '@chakra-ui/react';

interface ContentWrapperProps extends WrapperProps {
  isDesktop: boolean;
}

const ContentWrapper = ({ children, isDesktop }: ContentWrapperProps) => {
  return (
    <Box
      width={'100%'}
      px={isDesktop ? '20px' : '16px'}
      height={'auto'}
      backgroundColor={'background.dark'}
      position={'relative'}
      zIndex={2}
    >
      {children}
    </Box>
  );
};

export default ContentWrapper;
