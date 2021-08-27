import {DefaultTheme, configureFonts} from 'react-native-paper';
import customFonts from './fonts';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  fonts: configureFonts(customFonts),
  colors: {
    ...DefaultTheme.colors,
    primary: '#0500EE',
    accent: '#8CEE00',
    font: '#5B5B5B',
    gray: '#F9F9F9',
  },
};

export default theme;
