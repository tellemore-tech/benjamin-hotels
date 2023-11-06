import { SimpleCardProps } from '@/utils/types';
import { Box, Text } from '@chakra-ui/react';

const PropertyRevealCard = ({
  title,
  description,
  url,
  image,
  settings,
  isDesktop,
}: SimpleCardProps) => {
  const handleNavigate = () => {
    if (url) {
      window.open(url, '_blank');
    }
  };
  return (
    <Box
      onClick={() => handleNavigate()}
      sx={{
        height: '267px',
        pt: '120px',
        cursor: url ? 'pointer' : 'default',
        position: 'relative',
        display: 'flex',
        flexDir: 'column',
        alignItems: 'center',
        backgroundColor: 'background.dark',
        backgroundImage: `url(/OptimizedAssets/${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: settings?.focalPoint
          ? `${settings?.focalPoint[0]} ${settings?.focalPoint[1]}`
          : 'center, center',
        gap: '6px',
        '&:before': {
          content: `'${title}'`,
          letterSpacing: '.15em',
          display: isDesktop ? 'flex' : 'none',
          pt: '120px',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          maxHeight: 'calc(100% - 120px)',
          backgroundColor: 'background.dark',
          color: 'white',
          textAlign: 'center',
          fontSize: '15px',
          fontWeight: 700,
          position: 'absolute',
          top: 0,
          left: 0,
          transition: 'opacity .2s ease',
          zIndex: 2,
          textTransform: 'uppercase',
        },
        '&:hover:before': {
          opacity: 0,
        },
      }}
    >
      <Text
        sx={{
          color: 'white',
          textAlign: 'center',
          textTransform: 'uppercase',
          fontSize: '15px',
          fontWeight: 700,
          textShadow: '0px 2px 2px rgba(0, 0, 0, 0.25)',
          letterSpacing: '.15em',
          zIndex: 1,
        }}
      >
        {title}
      </Text>
      {description && (
        <Box
          sx={{
            fontFamily: "'Actor', sans-serif",
            color: 'white',
            textAlign: 'center',
            fontSize: '14px',
            fontWeight: 400,
            letterSpacing: '0.19em',
            textShadow: '0px 2px 2px rgba(0, 0, 0, 0.50)',
            zIndex: 1,
            '& p em': {
              fontStyle: 'normal',
              fontSize: '14px',
              textTransform: 'uppercase',
              lineHeight: 2,
            },
          }}
          dangerouslySetInnerHTML={{ __html: description }}
        />
      )}
      <Box
        sx={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          transition: 'opacity .2s ease',
        }}
      />
    </Box>
  );
};

export default PropertyRevealCard;
