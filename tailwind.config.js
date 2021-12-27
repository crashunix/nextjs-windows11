module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'windows-wallpaper':
          "url('https://img.ibxk.com.br/2021/06/16/16091644721048.jpeg')",
        'edge-logo':
          "url('https://upload.wikimedia.org/wikipedia/pt/thumb/9/98/Microsoft_Edge_logo_%282019%29.svg/1200px-Microsoft_Edge_logo_%282019%29.svg.png')",
        'store-logo':
          "url('https://upload.wikimedia.org/wikipedia/en/thumb/0/08/Microsoft_Store_app_icon.png/768px-Microsoft_Store_app_icon.png')",
        'satoru':
          "url('https://i.pinimg.com/originals/8e/de/53/8ede538fcf75a0a1bd812810edb50cb7.jpg')",
        'netflix-logo':
          "url('https://www.apkmirror.com/wp-content/uploads/2018/06/5b3553d66e5a7.png')",
        'settings-logo':
          "url('https://pbs.twimg.com/media/Ec_jU74XsAQbciQ.png')",
        'mail-logo':
          "url('https://winaero.com/blog/wp-content/uploads/2020/02/Updated-Mail-icon-2020.png')",
        'games-logo':
          "url('https://techcommunity.microsoft.com/t5/image/serverpage/image-id/172674iF0FE324A29E563E9/image-size/large?v=v2&px=999')",
      }),
      colors: {
        'windows': {
          'hard-gray': '#1A1A1A',
          'light-gray': '#2D2D2D',
          'gray': '#232323',
          'blue-300': '#2188D6',
          'blue-200': '#1B98E3',
          'blue-100': '#41C4F8'
        }
      },
      translate: {
        'menu': '110%',
      }
    },
  },
  variants: {
    extend: {
      display: ['group-focus'],
      backgroundColor: ['group-focus'],
    },
  },
  plugins: [],
}
