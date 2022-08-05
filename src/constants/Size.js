import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export default {
  PADDING: 10,
  FONTSIZE: 14,
  WIDTH: width,
  HEIGTH: height,
  ICON: width * 0.14,
  HEADER_FOOTER_SIZE: height * 0.07,
};
