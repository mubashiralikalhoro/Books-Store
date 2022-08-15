import {StyleSheet} from 'react-native';
import color from '../../../constants/color';
import GlobalStyle from '../../../constants/GlobalStyle';
import Size from '../../../constants/Size';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.BACKGROUND,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputField: {
    width: Size.WIDTH * 0.95,
    borderRadius: Size.ICON,
  },
  buttonView: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: Size.PADDING * 3,
    width: Size.WIDTH * 0.6,
    minHeight: Size.ICON,
    paddingVertical: Size.PADDING,
    backgroundColor: color.PRIMARY,
    borderRadius: Size.WIDTH * 0.1,
    ...GlobalStyle.SHADOW_STYLE,
  },
  text: {
    color: color.PRIMARY_TEXT,
    fontSize: Size.FONTSIZE + 6,
  },
});
export default styles;
