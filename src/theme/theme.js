import { createMuiTheme } from '@material-ui/core/styles'

const temaClaro = createMuiTheme(({
    palette: {
        type: 'light',
        primary: {
          main: '#318e29',
        },
        secondary: {
          main: 'rgb(220, 0, 78)',
        },
        background: {
          default: '#83af7f',
          paper: '#eff5ef',
        },
      },    
}))

const temaEscuro = createMuiTheme(({
    palette: {
        type: 'dark',
        primary: {
          main: '#90caf9',
        },
        secondary: {
          main: '#f48fb1',
        },
        background: {
          default: '#212121',
          paper: '#424242',
        },
      },
}))

export { temaClaro, temaEscuro }