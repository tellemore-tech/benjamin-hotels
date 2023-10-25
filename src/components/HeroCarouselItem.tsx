import { SimpleCardProps } from '@/utils/types';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Text } from '@chakra-ui/react';

interface HeroCarouselProps extends SimpleCardProps {
  onPrev: () => void;
  onNext: () => void;
}

const HeroCarouselItem = ({
  title,
  image,
  settings,
  onPrev,
  onNext,
}: HeroCarouselProps) => {
  return (
    <Box
      className="keen-slider__slide"
      display={'flex'}
      alignItems={'end'}
      padding={'40px'}
      width={'100vw'}
      height={'100%'}
      backgroundImage={`url(/OptimizedAssets/${image})`}
      backgroundSize={'cover'}
      backgroundPosition={
        settings?.focalPoint
          ? `right  ${settings?.focalPoint[1]} bottom ${settings?.focalPoint[1]}`
          : 'center center'
      }
    >
      <Box
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        gap={'10px'}
        color={'white'}
        fontWeight={'700'}
        textShadow={'0px 4px 4px rgba(0, 0, 0, 0.25)'}
        letterSpacing={'.15em'}
      >
        <ChevronLeftIcon
          fontSize={'24px'}
          onClick={() => onPrev()}
          cursor={'pointer'}
        />
        <Text fontSize={'14px'}>{title}</Text>
        <ChevronRightIcon
          fontSize={'24px'}
          onClick={() => onNext()}
          cursor={'pointer'}
        />
      </Box>
    </Box>
  );
};

export default HeroCarouselItem;
