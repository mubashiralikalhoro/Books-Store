import {StyleSheet} from 'react-native';
import color from '../../../constants/color';
import Size from '../../../constants/Size';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.BACKGROUND,
  },
  icon: {
    height: Size.ICON * 0.5,
    width: Size.ICON * 0.5,
  },

  search: {
    width: Size.WIDTH,
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  line: {
    marginVertical: Size.PADDING,
    width: Size.WIDTH,
    height: 0.5,
    backgroundColor: color.GRAY,
  },
});
export default styles;
