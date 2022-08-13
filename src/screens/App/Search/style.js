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
  icon: {
    height: Size.ICON * 0.5,
    width: Size.ICON * 0.5,
  },
  line: {
    marginVertical: Size.PADDING,
    width: Size.WIDTH,
    height: 0.5,
    backgroundColor: color.GRAY,
  },
  text: {
    marginTop: Size.PADDING,
    ...GlobalStyle.TEXT_STYLE,
  },
});
export default styles;
