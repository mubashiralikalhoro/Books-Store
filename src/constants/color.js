import darkMode from '../dummy/DarkMode';

const colorsDark = {
  PRIMARY: '#5D2DFF',
  BACKGROUND: 'black',
  TEXT: 'white',
  SHOW_MORE: '#3db6fc',
  GRAY: 'grey',
};
const colors = {
  PRIMARY: '#5D2DFF',
  BACKGROUND: 'white',
  TEXT: 'black',
  SHOW_MORE: '#3db6fc',
  GRAY: 'grey',
};

export default darkMode ? colorsDark : colors;
