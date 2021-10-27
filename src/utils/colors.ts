import { extendTheme } from 'native-base'

const colors = extendTheme({

  fonts: {
    regular: 'Arimo-Regular',
    medium: 'Arimo-Medium',
  },

  colors: {
    grey: {
      50: '#636363'
    },
    
    background: {
      50: '#ffffff'
    },

    white: {
      50: '#ffffff'
    },
    
    blueLow: {
      50: '#C6DDEE'
    },

    blue: {
      50: '#1692F7'
    },
    
  },
})

export { colors }
