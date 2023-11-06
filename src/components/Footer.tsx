import { HotelIcon } from '@/icons/icons';
import { WrapperProps } from '@/utils/types';
import { Box, Link as ChakraLink, Input, Button, Text } from '@chakra-ui/react';

interface FooterProps extends WrapperProps {
  onPrivacy: () => void;
}

interface NavItemProps extends WrapperProps {
  name: string;
  href?: string;
}
const NavItem = ({ name, href, isDesktop }: NavItemProps) => {
  return (
    <ChakraLink
      href={href}
      color={'background.dark'}
      fontSize={isDesktop ? '10px' : '14px'}
      fontWeight={'400'}
      letterSpacing={'.19em'}
      _hover={{
        textDecoration: 'underline',
      }}
    >
      {name}
    </ChakraLink>
  );
};

const Footer = ({ isDesktop, onPrivacy }: FooterProps) => {
  return (
    <Box
      display={'flex'}
      flexDirection={isDesktop ? 'row' : 'column'}
      justifyContent={'space-between'}
      alignItems={isDesktop ? 'end' : 'center'}
      p={isDesktop ? '40px' : '16px'}
      bg={'background.light'}
      gap={'40px'}
      overflow={'hidden'}
      py={isDesktop ? '40px' : '60px'}
      textAlign={isDesktop ? 'left' : 'center'}
      fontWeight={'400'}
      letterSpacing={'.15em'}
    >
      <Box
        display={'flex'}
        gap={isDesktop ? '40px' : '4px'}
        order={isDesktop ? 1 : 2}
        flexDirection={isDesktop ? 'row' : 'column'}
        alignItems={isDesktop ? 'start' : 'center'}
      >
        <HotelIcon
          marginTop={isDesktop ? 0 : '40px'}
          fontSize={'52px'}
          color={'brand.800'}
          order={isDesktop ? 0 : 2}
        />
        <Box display={'flex'} flexDir={'column'} gap={'4px'}>
          <NavItem
            name="Contact"
            href="mailto:info@benjaminhotels.ca"
            isDesktop={isDesktop}
          />
          <NavItem
            name="Press"
            href="mailto:press@benjaminhotels.ca"
            isDesktop={isDesktop}
          />
          <NavItem
            name="Career"
            href="mailto:careers@benjaminhotels.ca"
            isDesktop={isDesktop}
          />
        </Box>
        <ChakraLink
          onClick={() => onPrivacy()}
          color={'background.dark'}
          fontSize={isDesktop ? '10px' : '14px'}
          fontWeight={'200'}
          _hover={{
            textDecoration: 'underline',
          }}
        >
          Privacy Policy
        </ChakraLink>
      </Box>
      <Box
        display={'flex'}
        flexDirection={'column'}
        order={isDesktop ? 2 : 1}
        maxWidth={isDesktop ? 'none' : '500px'}
        width={isDesktop ? 'auto' : '80vw'}
        marginBottom={isDesktop ? 0 : '20px'}
      >
        <Text
          fontSize={'10px'}
          color={'background.dark'}
          fontWeight={400}
          textTransform={'uppercase'}
          marginBottom={isDesktop ? 0 : '10px'}
        >
          Join our mailing list
        </Text>
        <Box
          display={'flex'}
          flexDirection={isDesktop ? 'row' : 'column'}
          gap={'20px'}
          width={isDesktop ? '464px' : '100%'}
        >
          <Input
            fontFamily={'novecento-sans-wide'}
            fontWeight={100}
            letterSpacing={'0.19em'}
            fontSize={'10px'}
            h={'27px'}
            variant="flushed"
            placeholder="First Name"
            color={'background.dark'}
            value={'EMAIL'}
            cursor={'not-allowed'}
            disabled
            _disabled={{ opacity: 0.6 }}
          />
          <Button
            variant={'solidBrand'}
            height={'27px'}
            fontSize={'10px'}
            fontWeight={'200'}
            letterSpacing={'.15em'}
            paddingX={'20px'}
            _hover={{ opacity: '.8' }}
          >
            Coming Soon
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
