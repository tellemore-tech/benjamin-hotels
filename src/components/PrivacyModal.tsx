import { privacyData } from '@/utils/getPrivacyPolicyData';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  Text,
  ModalCloseButton,
  ModalBody,
  Box,
} from '@chakra-ui/react';

type ModalProps = {
  isDesktop: boolean;
  isOpen: boolean;
  onClose: () => void;
};

const PrivacyModal = ({ isDesktop, isOpen, onClose }: ModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        sx={{
          width: '80%',
          maxWidth: '1248px',
          height: isDesktop ? '80vh' : 'auto',
          maxHeight: '624px',
          borderRadius: 0,
        }}
      >
        <ModalCloseButton fontSize={'md'} color={'background.dark'} />
        <ModalBody display={'flex'} padding={0}>
          {isDesktop && (
            <Box
              sx={{ width: '50%' }}
              backgroundImage={
                'url(/LaurenMiller_TheSmithHotelxAugust20222166.jpg)'
              }
              backgroundPosition={'bottom, center'}
              backgroundSize={'cover'}
              backgroundRepeat={'no-repeat'}
            />
          )}

          <Box
            sx={{
              width: isDesktop ? '50%' : '100%',
              minW: isDesktop ? '600px' : 'none',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              px: isDesktop ? '80px' : '20px',
              py: '40px',
              justifyContent: isDesktop ? 'end' : 'start',
              overflow: 'hidden',
              gap: '30px',
            }}
          >
            <Text
              fontSize={'14px'}
              color={'background.dark'}
              letterSpacing={'0.19em'}
              fontWeight={700}
              textTransform={'uppercase'}
            >
              Privacy Policy
            </Text>
            <Box
              sx={{
                height: '100%',
                maxHeight: '440px',
                overflow: 'auto',
                paddingRight: '8px',
                '& h3': {
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  fontSize: '12px',
                  letterSpacing: '0.12em',
                },
                '& p': {
                  fontFamily: "'Actor', sans-serif",
                  fontSize: '12px',
                  letterSpacing: '0.12em',
                  fontWeight: 700,
                },
                '::-webkit-scrollbar': {
                  width: '10px',
                },
                '::-webkit-scrollbar-track': {
                  boxShadow: 'inset 0 0 4px #ccc9c8',
                  borderRadius: '8px',
                },
                '::-webkit-scrollbar-thumb': {
                  backgroundColor: 'rgba(132, 66, 30, 0.65)',
                  outline: 'none',
                  borderRadius: '8px',
                },
              }}
              dangerouslySetInnerHTML={{ __html: privacyData }}
            />
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default PrivacyModal;
