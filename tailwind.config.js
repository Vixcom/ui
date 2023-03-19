module.exports = {
  mode: 'jit',
  content: ['**/*.html'],
  theme: {
    extend: {
      borderRadius: {
        'full': '10rem',
        'circle': '50%'
      },
      screens: {
        phone: { 'min': '640px', 'max': '767px' },
        tablet: { 'min': '768px', 'max': '1023px' },
        laptop: { 'min': '1024px', 'max': '1279px' },
        tv: { 'min': '1280px', 'max': '1535px' },
        '<2xl': { 'max': '1535px' },
        '<xl': { 'max': '1279px' },
        '<lg': { 'max': '1023px' },
        '<md': { 'max': '767px' },
        '<sm': { 'max': '639px' },
      },
    },
  },
}
