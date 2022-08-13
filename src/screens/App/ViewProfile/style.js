import {StyleSheet} from 'react-native';
import color from '../../../constants/color';
import GlobalStyle from '../../../constants/GlobalStyle';
import Size from '../../../constants/Size';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  buttonView: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: Size.PADDING * 3,
    width: Size.WIDTH * 0.4,
    minHeight: Size.ICON,
    paddingVertical: Size.PADDING,
    backgroundColor: color.PRIMARY,
    borderRadius: 10,
    ...GlobalStyle.SHADOW_STYLE,
  },
  text: {
    color: color.PRIMARY_TEXT,
    fontSize: Size.FONTSIZE + 6,
  },
});

export default styles;
