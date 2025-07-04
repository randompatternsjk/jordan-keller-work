const plugin = require('@tailwindcss/typography');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,mdx,md}'],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            h1: {
              fontWeight: 'bold',
              fontSize: '2.5rem', // Adjust size
              color: '#ECECEC', // Custom color
            },
            a: {
              color: '#A3E635', // Custom link color
              '&:hover': {
                color: '#84CC16', // Hover color
              },
            },
            p: {
              textAlign: 'justify', // Justify paragraphs
              color: '#ff0000', // Custom paragraph color
              lineHeight: '2.4',
            },
          },
        },
      },
    },
  },
  plugins: [plugin],
};
