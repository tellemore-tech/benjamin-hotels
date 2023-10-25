import { extendTheme } from '@chakra-ui/react';

const theme = {
  breakpoints: {
    sm: '600px',
    md: '830px',
    lg: '1280px',
    xl: '1440px',
    '2xl': '1500px',
  },
  fonts: {
    heading: '"novecento-sans-wide", sans-serif',
    body: '"novecento-sans-wide", sans-serif',
  },
  fontSizes: {
    xs: '10px',
    sm: '14px',
    md: '16px',
    lg: '20px',
    xl: '24px',
    '2xl': '28px',
    '3xl': '32px',
    '4xl': '36px',
    '5xl': '40px',
    '6xl': '45px',
    '7xl': '60px',
    '8xl': '72px',
    '9xl': '96px',
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  lineHeights: {
    normal: 'normal',
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: '2',
    3: '.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem',
  },
  letterSpacings: {
    normal: '0.19em',
  },
  colors: {
    background: {
      light: '#F2ECE1',
      dark: '#914F3D',
    },
    brand: {
      primary: '#84421E',
      50: '#fdfaf8',
      100: '#f9ece5',
      200: '#f2d6c7',
      300: '#ecc1aa',
      400: '#df9872',
      500: '#d16b34',
      600: '#ab5527',
      700: '#954a22',
      800: '#84421e',
      900: '#582c14',
    },
    brandAlpha: {
      50: 'rgba(132, 66, 30, 0.04)',
      100: 'rgba(132, 66, 30, 0.06)',
      200: 'rgba(132, 66, 30, 0.10)', // 08
      300: 'rgba(132, 66, 30, 0.17)', // 16
      400: 'rgba(132, 66, 30, 0.24)',
      500: 'rgba(132, 66, 30, 0.36)',
      600: 'rgba(132, 66, 30, 0.48)',
      700: 'rgba(132, 66, 30, 0.65)', // 64
      800: 'rgba(132, 66, 30, 0.8)',
      900: 'rgba(132, 66, 30, 0.92)',
    },
    gray: {
      50: '#fafafa',
      100: '#efeeee',
      200: '#dddbda',
      300: '#ccc9c8',
      400: '#aca7a5',
      500: '#8d8683',
      600: '#726c69', // text light
      700: '#635e5b',
      800: '#585351',
      900: '#3a3735', // text dark
    },
  },
  components: {
    Button: {
      // 1. We can update the base styles
      baseStyle: {
        fontWeight: 'bold', // Normally, it is "semibold"
        borderRadius: 0,
      },
      // 2. We can add a new button size or extend existing
      sizes: {
        lg: {
          h: '48px',
          fontSize: 'md',
          px: '24px',
        },
        md: {
          h: '40px',
          fontSize: 'md',
          px: '16px',
        },
        sm: {
          h: '32px',
          fontSize: 'sm',
          px: '12px',
        },
        sx: {
          h: '24px',
          fontSize: '12px',
          px: '10px',
        },
      },
      // 3. We can add a new visual variant
      variants: {
        // 4. We can override existing variants
        outlineWhite: {
          lineHeight: '1',
          textTransform: 'uppercase',
          bg: 'none',
          borderRadius: 0,
          border: '2px',
          borderColor: 'white',
          color: 'white',
          _hover: {
            backgroundColor: 'brand.800',
          },
          _active: {
            backgroundColor: 'brand.900',
          },
          _focus: {
            outline: 'none',
          },
        },
        outlineBrand: {
          lineHeight: '1',
          textTransform: 'uppercase',
          bg: 'none',
          borderRadius: 0,
          border: '2px',
          borderColor: 'brand.800',
          color: 'brand.800',
          _hover: {
            backgroundColor: 'brandAlpha.300',
          },
          _active: {
            backgroundColor: 'brandAlpha.500',
          },
          _focus: {
            outline: 'none',
          },
        },
        solidBrand: {
          lineHeight: '1',
          textTransform: 'uppercase',
          bg: 'none',
          borderRadius: 0,
          border: '2px',
          borderColor: 'brand.800',
          backgroundColor: 'brand.800',
          color: 'white',
          _hover: {
            backgroundColor: 'brand.900',
            borderColor: 'brand.900',
          },
          _active: {
            backgroundColor: 'brand.800',
            borderColor: 'brand.900',
          },
          _focus: {
            outline: 'none',
          },
        },
        ghostWhite: {
          lineHeight: '1',
          textTransform: 'uppercase',
          bg: 'none',
          borderRadius: 0,
          borderColor: 'none',
          color: 'white',
          _hover: {
            backgroundColor: 'whiteAlpha.300',
          },
          _active: {
            backgroundColor: 'whiteAlpha.500',
          },
          _focus: {
            outline: 'none',
          },
        },
        ghostBrand: {
          lineHeight: '1',
          textTransform: 'uppercase',
          bg: 'none',
          borderRadius: 0,
          borderColor: 'none',
          color: 'brand.800',
          transition: 'all .35s ease-out',
          _hover: {
            backgroundColor: 'brandAlpha.50',
          },
          _active: {
            backgroundColor: 'brandAlpha.200',
          },
          _focus: {
            outline: 'none',
          },
        },
      },
      // 6. We can overwrite defaultProps
      defaultProps: {
        size: 'md', // default is md
        variant: 'outline', // default is solid
      },
    },
  },
};

export default extendTheme(theme);
