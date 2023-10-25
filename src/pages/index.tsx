import { useEffect, useState } from 'react';
import ContentWrapper from '@/components/ContentWrapper';
import { Head as SEO } from '@/components/Head';
import { Box, useMediaQuery } from '@chakra-ui/react';
import '../styles/global.css';
import Footer from '@/components/Footer';
import BookingWidgetContainer from '@/components/BookingWidgetContainer';
import PropertiesGrid from '@/components/PropertiesGrid';
import HeroCarousel from '@/components/HeroCarousel';
import PageTopper from '@/components/PageTopper';
import PrivacyModal from '@/components/PrivacyModal';
import Loading from '@/components/Loading';

export default function Home() {
  const [modal, setModal] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [isDesktop] = useMediaQuery('(min-width: 1200px)');
  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  });
  return (
    <Box as={'main'}>
      <SEO>
        <title>Benjamin Hotels</title>
        <meta
          name="description"
          content="Benjamin Hotels is a collection of properties in Kingston, Ontario committed to style, revitalization, and a modern approach to hospitality. With thoughtful craftsmanship and curated designs, experiences are transformed and expectations are redefined. A visit to one of our properties is not just a ‘stay’ in Kingston – it’s the experience you take home."
        />
      </SEO>
      {loading ? (
        <Loading />
      ) : (
        <>
          <HeroCarousel />
          <ContentWrapper isDesktop={isDesktop}>
            <PageTopper isDesktop={isDesktop} />
            <PropertiesGrid isDesktop={isDesktop} />
            <BookingWidgetContainer isDesktop={isDesktop} />
          </ContentWrapper>
          <Footer isDesktop={isDesktop} onPrivacy={() => setModal(true)} />
          <PrivacyModal
            isDesktop={isDesktop}
            isOpen={modal}
            onClose={() => setModal(false)}
          />
        </>
      )}
    </Box>
  );
}
