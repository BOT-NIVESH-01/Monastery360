module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Monastery Earth
        primary: {
          DEFAULT: "#8B4513", // saddle-brown
          50: "#FDF8F4", // very light earth
          100: "#F5E6D3", // light earth
          200: "#E8C5A0", // warm earth
          300: "#D4A574", // medium earth
          400: "#B8824A", // darker earth
          500: "#8B4513", // monastery earth
          600: "#7A3C11", // deep earth
          700: "#68330F", // darker monastery
          800: "#562A0D", // rich earth
          900: "#44210A", // deepest earth
        },
        // Secondary Colors - Warm Copper
        secondary: {
          DEFAULT: "#D2691E", // chocolate
          50: "#FDF6F0", // very light copper
          100: "#F7E4D1", // light copper
          200: "#EFC49E", // warm copper
          300: "#E5A46B", // medium copper
          400: "#DB8441", // darker copper
          500: "#D2691E", // warm copper bridge
          600: "#BC5E1B", // deep copper
          700: "#A65318", // darker copper
          800: "#904815", // rich copper
          900: "#7A3D12", // deepest copper
        },
        // Accent Colors - Prayer Flag Orange
        accent: {
          DEFAULT: "#FF6B35", // orange-red
          50: "#FFF4F0", // very light orange
          100: "#FFE4D6", // light orange
          200: "#FFC4A8", // warm orange
          300: "#FF9F7A", // medium orange
          400: "#FF854C", // bright orange
          500: "#FF6B35", // prayer flag orange
          600: "#E55A2B", // deep orange
          700: "#CC4A21", // darker orange
          800: "#B33A17", // rich orange
          900: "#992A0D", // deepest orange
        },
        // Background Colors
        background: "#FEFEFE", // pure canvas
        surface: {
          DEFAULT: "#F8F6F0", // subtle warmth
          50: "#FCFBF8", // lightest surface
          100: "#F8F6F0", // gentle elevation
          200: "#F0EDE5", // soft contrast
          300: "#E8E2D8", // border color
        },
        // Text Colors
        text: {
          primary: "#2C1810", // rich earth
          secondary: "#6B4423", // soft hierarchy
          tertiary: "#8B6F47", // subtle text
          muted: "#A68B6B", // very subtle
        },
        // Status Colors
        success: {
          DEFAULT: "#228B22", // forest-green
          50: "#F0F8F0", // very light green
          100: "#D4F4D4", // light green
          500: "#228B22", // living green
        },
        warning: {
          DEFAULT: "#DAA520", // goldenrod
          50: "#FDF8E8", // very light gold
          100: "#F7E6A3", // light gold
          500: "#DAA520", // mindful gold
        },
        error: {
          DEFAULT: "#CD5C5C", // indian-red
          50: "#FDF4F4", // very light red
          100: "#F5D6D6", // light red
          500: "#CD5C5C", // gentle concern
        },
      },
      fontFamily: {
        // Headlines - Scholarly elegance
        crimson: ['Crimson Text', 'serif'],
        // Body - Clean readability
        sans: ['Source Sans Pro', 'sans-serif'],
        // CTAs - Friendly authority
        lato: ['Lato', 'sans-serif'],
        // Accents - Refined character
        cormorant: ['Cormorant Garamond', 'serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.6rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.3' }],
        '6xl': ['3.75rem', { lineHeight: '1.3' }],
      },
      boxShadow: {
        'subtle': '0 2px 8px rgba(44, 24, 16, 0.1)',
        'modal': '0 8px 32px rgba(44, 24, 16, 0.15)',
        'floating': '0 4px 16px rgba(44, 24, 16, 0.12)',
      },
      borderColor: {
        'gentle': '#E8E2D8', // surface-300
      },
      borderRadius: {
        'gentle': '0.375rem', // 6px
        'gentle-lg': '0.5rem', // 8px
      },
      transitionDuration: {
        'gentle': '300ms',
        'page': '400ms',
      },
      transitionTimingFunction: {
        'gentle': 'ease-out',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 400ms ease-out',
        'slide-up': 'slideUp 400ms ease-out',
        'gentle-bounce': 'gentleBounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        gentleBounce: {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-5px)' },
          '60%': { transform: 'translateY(-3px)' },
        },
      },
    },
  },
  plugins: [],
}