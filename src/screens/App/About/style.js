import {StyleSheet} from 'react-native';

//Color
import color from '../../../constants/color';
import Size from '../../../constants/Size';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.BACKGROUND,
    alignItems: 'center',
  },

  contStyle: {
    height: '100%',
    width: Size.WIDTH * 0.95,
  },
});
