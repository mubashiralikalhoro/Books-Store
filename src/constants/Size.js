import {Dimensions, useWindowDimensions} from 'react-native';

const {width, height} = useWindowDimensions();

if (width > height) {
  const temp = width;
  width = height;
  height = temp;
}

export default {
  PADDING: 10,
  FONTSIZE: 12,
  WIDTH: width,
  HEIGHT: height,
  ICON: width * 0.14,
  HEADER_FOOTER_SIZE: height * 0.07,
  BORDER_RADIUS: 5,
};
