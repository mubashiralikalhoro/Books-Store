import {Appearance} from 'react-native';
import darkMode from '../dummy/DarkMode';

const defaultColors = {
  //  PRIMARY: '#3399ff',
  PRIMARY: '#00ccff',
  PRIMARY_TEXT: 'white',
  SHOW_MORE: '#3db6fc',
  RED: '#ff1605',
  GREEN: '#18c900',
  FULL_LIGHT_GRAY: '#e6e6e6',
};

const colorsDark = {
  ...defaultColors,
  isDark: true,
  BACKGROUND: 'black',
  TEXT: 'white',
  LIGHT_GRAY: '#5c5e5c',
  GRAY: 'grey',
};
const colors = {
  ...defaultColors,
  isDark: false,
  BACKGROUND: 'white',
  TEXT: 'black',
  LIGHT_GRAY: '#c1c7c2',
  GRAY: 'grey',
};

export default Appearance.getColorScheme() == 'dark' ? colorsDark : colors;
