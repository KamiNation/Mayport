/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "customBlue": "rgba(87, 102, 119, 1)",
        "customWhite": "rgba(247, 247, 247, 1)",
        "customRed": "rgba(242, 0, 6, 1)",
        "customBlack": "rgba(51, 51, 51, 1)",
        "customGray": "rgba(154, 154, 154, 1)",
        "custom2White": "rgba(255, 255, 255, 1)",
        "custom3White": "rgba(239, 237, 237, 1)",
        "customBrown": "rgba(117, 106, 106, 1)",
        "custom2Brown": "rgba(190, 190, 190, 1)",
      },
      height: {
        "72": "72px",
        "59": "59px",
        "750": "750px",
        "112": "112px",
        "489": "489px",
        "88": "88px",
        "24": "24px",
        "6.6": "6.6px",
        "300": "300px",
        "39": "39px",
        "267": "267px",
        "400": "200px"
      },
      width: {
        "680": "680px",
        "883": "883px",
        "990": "990px",
        "142": "142px",
        "1512": "1512px",
        "190": "190.94px",
        "531": "531px",
        "367": "367px",
        "24": "24px",
        "8.4": "8.4px",
        "408": "399px",
        "91": "91px",
        "360": "320px",
        "397": "300px"
      },
      backgroundImage: {
        "home": "url('../../assets/homeIndex.jpeg')"
      },
      fontSize: {
        '48': ['48px', {
          lineHeight: '54px',
          fontWeight: '700',
        }],
        '28': ['28px', {
          lineHeight: '36px',
          fontWeight: '400'
        }],
        '30': ['30px', {
          lineHeight: '40px',
          fontWeight: '400'
        }],
        '32': ['32px', {
          lineHeight: '40px',
          fontWeight: '400'
        }],
        '20': ['20px', {
          lineHeight: '26px',
          fontWeight: '400'
        }],
        '14': ['14px', {
          lineHeight: '16.8px',
          fontWeight: '400'
        }],
        '20v1': ['20px', {
          lineHeight: '32px',
          fontWeight: '400'
        }],
        '16': ['16px', {
          lineHeight: '19.2px',
          fontWeight: '400'
        }],
        '56': ['56px', {
          lineHeight: '64px',
          fontWeight: '700'
        }],

      },
      borderRadius: {
        "207": "207px"
      },
      opacity: {
        "70": '70%'
      },
      clipPath: {
        topPolygon : "polygon(100% 0%, 100% 50%, 100% 100%, 57% 100%, 25% 50%, 0 0);"
      },

    },
    screens: {
      'sm': { 'min': '320px', 'max': '480px' },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': { 'min': '481px', 'max': '650px' },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': { 'min': '651px', 'max': '768px' },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': { 'min': '768px', 'max': '1024px' },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': { 'min': '1024px' },
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [
    import('tailwind-clip-path')
  ],
}