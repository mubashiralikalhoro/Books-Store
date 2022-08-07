import {StyleSheet} from 'react-native';
import color from '../../../constants/color';
import Size from '../../../constants/Size';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.BACKGROUND,
    alignItems: 'center',
  },
  checkOutView: {
    width: Size.WIDTH,
    height: Size.ICON,
    backgroundColor: color.PRIMARY,
  },
  checkOutText: {
    fontSize: Size.ICON * 0.3,
    color: color.PRIMARY_TEXT,
  },
});
export default styles;
