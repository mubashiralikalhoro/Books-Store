import {StyleSheet} from 'react-native';
import color from '../../../constants/color';
import GlobalStyle from '../../../constants/GlobalStyle';
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
  myCart: {
    ...GlobalStyle.TEXT_STYLE,
    marginTop: Size.PADDING,
    fontSize: Size.WIDTH * 0.04,
    color: color.PRIMARY,
    fontWeight: '800',
  },
});
export default styles;
