import darkMode from '../dummy/DarkMode';

const defaultColors = {
  // PRIMARY: '#5D2DFF',
  PRIMARY: '#00599d',
  PRIMARY_TEXT: 'white',
  SHOW_MORE: '#3db6fc',
};

const colorsDark = {
  ...defaultColors,
  isDark: true,
  BACKGROUND: 'black',
  TEXT: 'white',
  GRAY: 'grey',
};
const colors = {
  ...defaultColors,
  isDark: false,
  BACKGROUND: 'white',
  TEXT: 'black',
  GRAY: 'grey',
};

export default darkMode ? colorsDark : colors;
