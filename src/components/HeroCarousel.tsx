import { PreviewData } from '@/utils/getPropertyPreviewsData';
import { Box } from '@chakra-ui/react';
import HeroCarouselItem from './HeroCarouselItem';
import { useKeenSlider } from 'keen-slider/react';
import { HotelIcon } from '@/icons/icons';

const HeroCarousel = () => {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      renderMode: 'performance',
      drag: true,
      slides: {
        perView: 1,
        spacing: 0,
      },
    },

    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 6000);
        }
        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener('mouseout', () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on('dragStarted', clearNextTimeout);
        slider.on('animationEnded', nextTimeout);
        slider.on('updated', nextTimeout);
      },
    ],
  );
  return (
    <Box
      ref={sliderRef}
      className="keen-slider"
      sx={{
        height: '80vh',
        width: '100vw',
        maxW: '2000px',
        display: 'flex',
        overflow: 'hidden',
        margin: 'auto',
        position: 'relative',
      }}
    >
      {PreviewData.map((i) => (
        <HeroCarouselItem
          key={i.slug}
          slug={i.slug}
          title={i.title}
          image={i.image}
          settings={i.settings}
          onNext={() => {
            instanceRef.current?.next();
          }}
          onPrev={() => {
            instanceRef.current?.prev();
          }}
        />
      ))}
      <Box
        sx={{
          position: 'absolute',
          top: 'calc(50% - 120px)',
          left: 'calc(50% - 120px)',
          zIndex: '10',
        }}
      >
        <HotelIcon
          fontSize={'240px'}
          color={'background.light'}
          dropShadow={'0px 4px 25px -6px rgba(0, 0, 0, 0.30)'}
          sx={{
            filter: 'drop-shadow(0px 4px 10px rgb(0, 0, 0, .3))',
          }}
        />
      </Box>
    </Box>
  );
};

export default HeroCarousel;
