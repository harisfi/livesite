module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'editor-desktop': 'url(../images/illustration-editor-desktop.svg)',
        'pattern-circles': 'url(../images/bg-pattern-circles.svg)',
        'laptop-desktop': 'url(../images/illustration-laptop-desktop.svg)'
      },
      backgroundPosition: {
        '66-c': '-66% center',
        '155c': '155% center',
        '8080': '-80% 80%',
        '50300': '50% 300%'
      },
      backgroundSize: {
        '60': '60%',
        '70': '70%',
        '150': '150%'
      },
      borderRadius: {
        'intr': '7rem'
      },
      colors: {
        'primary': {
          'lr': 'hsl(356, 100%, 66%)',
          'vlr': 'hsl(355, 100%, 74%)',
          'vdb': 'hsl(208, 49%, 24%)'
        },
        'neutral': {
          'gb': 'hsl(240, 2%, 79%)',
          'vgb': 'hsl(207, 13%, 34%)',
          'vdb': 'hsl(240, 10%, 16%)'
        },
        'grads': {
          'ivl': 'hsl(13, 100%, 72%)',
          'il': 'hsl(353, 100%, 62%)',
          'bvg': 'hsl(237, 17%, 21%)',
          'bvd': 'hsl(237, 23%, 32%)'
        }
      }
    },
    fontFamily: {
      'Ubuntu': ['Ubuntu', 'sans-serif'],
      'Overpass': ['Overpass', 'sans-serif']
    }
  },
  variants: {
    extend: {
      display: ['group-hover'],
      fontWeight: ['hover'],
      transform: ['group-focus'],
      rotate: ['group-hover']
    },
  },
  plugins: [],
}
