import {StyleSheet} from 'react-native';

//Color
import color from '../../../constants/color';
import Size from '../../../constants/Size';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.BACKGROUND,
  },

  marginView: {
    marginTop: Size.HEIGTH * 0.3 - Size.HEADER_FOOTER_SIZE - 1,
    height: 1,
    width: Size.WIDTH,
  },

  contStyle: {
    // marginTop: height * 0.04,
    // paddingBottom: height * 0.04,
  },
  txt1: {
    // fontSize: width * 0.033,
    // color: 'black',
  },
});
