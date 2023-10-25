import { WrapperProps } from '@/utils/types';
import { Box, Image, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

export type PageTopperProps = {
  homePage?: boolean;
  historyPage?: boolean;
  heroImage?: string;
  heroFocus: string;
  heroTitle?: string;
  pageTitle: string;
  pageDescription: string;
};

const PageTopper = ({ isDesktop }: WrapperProps) => {
  return (
    <>
      <Box
        position={'relative'}
        width={'100%'}
        zIndex={2}
        maxW={isDesktop ? 'none' : '500px'}
        margin={'auto'}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.25,
            duration: 0.3,
          }}
          viewport={{ once: true, amount: 0.6 }}
        >
          <Box
            display={'flex'}
            flexDir={'column'}
            w={'100%'}
            alignContent={'center'}
            alignItems={'center'}
            flexWrap={'nowrap'}
            pt={isDesktop ? '80px' : '40px'}
            pb={'20px'}
            color={'brand.800'}
            gap={'36px'}
          >
            <Image
              src="\Logos-and-Icons\PNG\BH-Name-Linen.png"
              alt="Benjamin Hotels Logo"
              width={isDesktop ? '331px' : '240px'}
            />
            <Box
              sx={{
                display: 'flex',
                flexDir: 'column',
                textAlign: 'center',
                maxW: '750px',
                fontSize: '15px',
                color: 'white',
              }}
            >
              <Text fontWeight={400} fontSize={'15px'} letterSpacing={'.11em'}>
                Benjamin Hotels is a collection of properties in Kingston,
                Ontario committed to style, revitalization, and a modern
                approach to hospitality. With thoughtful craftsmanship and
                curated designs, experiences are transformed and expectations
                are redefined. A visit to one of our properties is not just a
                ‘stay’ in Kingston – it’s the experience you take home.
              </Text>
            </Box>
          </Box>
        </motion.div>
      </Box>
    </>
  );
};

export default PageTopper;
