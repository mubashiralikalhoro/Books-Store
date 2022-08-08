import {StyleSheet} from 'react-native';
import color from '../../../constants/color';
import Size from '../../../constants/Size';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.BACKGROUND,
    alignItems: 'center',
  },
  noItems: {
    height: Size.ICON,
    width: Size.ICON,
    tintColor: color.TEXT,
  },
});
export default styles;
