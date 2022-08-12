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
  myNot: {
    ...GlobalStyle.TEXT_STYLE,
    marginTop: Size.PADDING,
    fontSize: Size.WIDTH * 0.04,
    color: color.PRIMARY,
    fontWeight: '800',
    alignSelf: 'center',
  },
});
export default styles;
