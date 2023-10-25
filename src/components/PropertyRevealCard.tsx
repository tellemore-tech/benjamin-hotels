import { SimpleCardProps } from '@/utils/types';
import { Box, Text } from '@chakra-ui/react';
import { navigate } from 'gatsby';

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
      navigate(url);
    }
  };
  return (
    <Box
      onClick={() => handleNavigate()}
      sx={{
        cursor: url ? 'pointer' : 'default',
        position: 'relative',
        display: 'flex',
        flexDir: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'background.dark',
        backgroundImage: `url(/OptimizedAssets/${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: settings?.focalPoint
          ? `${settings?.focalPoint[0]}, ${settings?.focalPoint[1]}`
          : 'center, center',
        gap: '6px',
        '&:before': {
          content: `'${title}'`,
          letterSpacing: '.15em',
          display: isDesktop ? 'flex' : 'none',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          backgroundColor: 'background.dark',
          color: 'white',
          textAlign: 'center',
          fontSize: '14px',
          fontWeight: 700,
          position: 'absolute',
          top: 0,
          left: 0,
          transition: 'opacity .2s ease',
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
          fontSize: '14px',
          fontWeight: 700,
          textShadow: '0px 2px 2px rgba(0, 0, 0, 0.50)',
          letterSpacing: '.15em',
        }}
      >
        {title}
      </Text>
      {description && (
        <Box
          sx={{
            color: 'white',
            textAlign: 'center',
            fontSize: '12px',
            fontWeight: 700,
            letterSpacing: '0.19em',
            textShadow: '0px 2px 2px rgba(0, 0, 0, 0.50)',
            maxW: '300px',
          }}
          dangerouslySetInnerHTML={{ __html: description }}
        />
      )}
    </Box>
  );
};

export default PropertyRevealCard;
