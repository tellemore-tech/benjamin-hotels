import { Box } from '@chakra-ui/react';
import { WrapperProps } from '@/utils/types';
import { propertyData } from '@/utils/getPropertyData';
import PropertyRevealCard from './PropertyRevealCard';

const PropertiesGrid = ({ isDesktop }: WrapperProps) => {
  return (
    <Box
      w={'100%'}
      bg={'background.light'}
      py={'2px'}
      px={'2px'}
      maxWidth={isDesktop ? '1200px' : '500px'}
      margin={'auto'}
    >
      <Box
        sx={{
          width: 'calc(100% - 2px)',
          height: isDesktop ? '536px' : '1060px',
          display: 'grid',
          gridTemplateColumns: isDesktop ? '50% 50%' : '100%',
          gridRow: 'auto auto',
          gridColumnGap: '2px',
          gridRowGap: '2px',
        }}
      >
        {propertyData.map((i) => (
          <PropertyRevealCard
            isDesktop={isDesktop}
            key={i.slug}
            slug={i.slug}
            title={i.title}
            description={i.description}
            url={i.url}
            image={i.image}
            alt={i.alt}
            settings={i.settings}
          />
        ))}
      </Box>
    </Box>
  );
};

export default PropertiesGrid;
