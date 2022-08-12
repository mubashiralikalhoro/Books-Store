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
  inputField: {
    width: Size.WIDTH * 0.95,
    borderRadius: 10,
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
  messageField: {
    height: Size.ICON * 2,
    width: Size.WIDTH * 0.95,
    borderRadius: Size.ICON,
    borderRadius: 10,
    alignItems: 'flex-start',
    paddingTop: 10,
  },
  messageIcon: {marginTop: 5},
  messageInputField: {width: Size.WIDTH * 0.6},
  bottom: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomIcon: {
    marginRight: Size.PADDING,
    height: Size.ICON / 2,
    width: Size.ICON / 2,
    tintColor: color.PRIMARY,
  },
});

export default styles;
