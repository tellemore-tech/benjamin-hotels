import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  // Since `gatsby-plugin-typescript` is automatically included in Gatsby you
  // don't need to define it here (just if you need to change the options)
  jsxRuntime: 'automatic',
  plugins: [
    {
      resolve: '@chakra-ui/gatsby-plugin',
      options: {
        resetCSS: true,
      },
    },
  ],
};

export default config;
