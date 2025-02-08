module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Paths to all files using Tailwind
  ],
  theme: {
    extend: {
        screens:{
            'h-xs': { raw: '(max-height: 640px)' }, // Small-height devices
            'h-sm': { raw: '(min-height: 641px)' }, // Medium-small height
            'h-md': { raw: '(min-height: 801px)' }, // Medium height
            'h-lg': { raw: '(min-height: 1025px)' }, // Large height
            'h-xl': { raw: '(min-height: 1281px)' }, // Extra-large height
        },
      keyframes: {
        typing: {
          from: { width: '0' },
          to: { width: '100%' },
        },
        blinkCaret: {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: 'orange' },
        },
        slideInFromLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideOutToLeft: {
          '0%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(-100%)', opacity: '0' },
        },
        slideInFromRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideOutToRight: {
          '0%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(100%)', opacity: '0' },
        },
        slideInFromTop: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideOutToTop: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(-100%)', opacity: '0' },
        },
        slideInFromBottom: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideOutToBottom: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(100%)', opacity: '0' },
        },
        circularMotion: {
          '0%': { transform: 'translate(0, -10px)' },        // Top
          '8.33%': { transform: 'translate(5px, -9px)' },    // Slightly top-right
          '16.67%': { transform: 'translate(9px, -5px)' },   // Top-right
          '25%': { transform: 'translate(10px, 0)' },        // Right
          '33.33%': { transform: 'translate(9px, 5px)' },    // Slightly bottom-right
          '41.67%': { transform: 'translate(5px, 9px)' },    // Bottom-right
          '50%': { transform: 'translate(0, 10px)' },        // Bottom
          '58.33%': { transform: 'translate(-5px, 9px)' },   // Slightly bottom-left
          '66.67%': { transform: 'translate(-9px, 5px)' },   // Bottom-left
          '75%': { transform: 'translate(-10px, 0)' },       // Left
          '83.33%': { transform: 'translate(-9px, -5px)' },  // Slightly top-left
          '91.67%': { transform: 'translate(-5px, -9px)' },  // Top-left
          '100%': { transform: 'translate(0, -10px)' },      // Back to Top
        },
        customBounce: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-5px)' },
        },
        gradientLoop: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        typing: 'typing 3s steps(40, end)',
        blinkCaret: 'blinkCaret 0.75s step-end infinite',
        circularMotion: 'circularMotion 6s linear infinite',
        slideInFromLeft: 'slideInFromLeft 0.7s ease-out',
        slideOutToLeft: 'slideOutToLeft 1.5s ease-in',
        slideInFromRight: 'slideInFromRight 0.7s ease-out',
        slideOutToRight: 'slideOutToRight 1.5s ease-in',
        slideInFromTop: 'slideInFromTop 0.7s ease-out',
        slideOutToTop: 'slideOutToTop 1.5s ease-in',
        slideOutToBottom: 'slideOutToBottom 1.5s ease-in',
        slideInFromBottom: 'slideInFromBottom 0.7s ease-out',
        customBounce: 'customBounce 1s ease infinite',
        gradient: "gradientLoop 15s infinite linear",
      },
      backgroundSize: {
        "400%": "400% 100%", // Ensures smooth movement
      },
    },
  },
  plugins: [],
};
