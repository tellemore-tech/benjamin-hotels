import { Box, Flex, Text, useMediaQuery } from '@chakra-ui/react';
import { motion } from 'framer-motion';

interface HeroProps {
  title?: string;
  imgUrl: string;
  imgFocus: string;
}

const Hero = ({ title, imgUrl, imgFocus }: HeroProps) => {
  const [isDesktop] = useMediaQuery('(min-width: 1180px)');
  return (
    <Box
      display={'flex'}
      height={isDesktop ? 'calc(90vh - 88px)' : 'calc(80vh - 64px)'}
      width={'100%'}
      justifyContent={'center'}
      alignContent={'center'}
      bg={'gray.300'}
      flexWrap={'wrap'}
      background={`linear-gradient(180deg, rgba(0, 0, 0, 0.00) 25%, rgba(0, 0, 0, 0.20) 50%, rgba(0, 0, 0, 0.00) 75%), url(${imgUrl})`}
      backgroundColor={'brand.100'}
      backgroundSize={'cover'}
      backgroundPosition={`center ${imgFocus}`}
      backgroundRepeat={'no-repeat'}
      // backgroundAttachment={isDesktop ? 'fixed' : 'local'}
      position={'sticky'}
      top={isDesktop ? 88 : '64px'}
      zIndex={-1}
    >
      {title && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            delay: 0.25,
            duration: 0.4,
          }}
          viewport={{ once: false }}
        >
          {isDesktop ? (
            <Text
              fontSize={'7xl'}
              color={'white'}
              paddingBottom={'80px'}
              textTransform={'uppercase'}
              textShadow={'2px 2px 4px rgba(0, 0, 0, 0.25)'}
            >
              {title}
            </Text>
          ) : (
            <Flex
              flexDirection={'column'}
              alignItems={'center'}
              paddingBottom={'80px'}
            >
              <Text
                lineHeight={1.2}
                fontSize={'5xl'}
                color={'white'}
                textTransform={'uppercase'}
                textShadow={'2px 2px 4px rgba(0, 0, 0, 0.25)'}
              >
                The
              </Text>
              <Text
                lineHeight={1.2}
                fontSize={'6xl'}
                color={'white'}
                textTransform={'uppercase'}
                textShadow={'2px 2px 4px rgba(0, 0, 0, 0.25)'}
              >
                Smith
              </Text>
              <Text
                lineHeight={1.2}
                fontSize={'4xl'}
                color={'white'}
                textTransform={'uppercase'}
                textShadow={'2px 2px 4px rgba(0, 0, 0, 0.25)'}
              >
                Hotel
              </Text>
            </Flex>
          )}
        </motion.div>
      )}
    </Box>
  );
};

export default Hero;
