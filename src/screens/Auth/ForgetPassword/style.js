import {StyleSheet} from 'react-native';
import color from '../../../constants/color';
import Size from '../../../constants/Size';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.BACKGROUND,
    alignItems: 'center',
  },
  mainView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  outerView: {
    paddingVertical: Size.PADDING,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Size.PADDING * 2,
    width: Size.WIDTH * 0.9,
    backgroundColor: 'white',
    borderRadius: Size.BORDER_RADIUS * 2,
    shadowColor: color.TEXT,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    borderWidth: color.isDark && Platform.OS == 'android' ? 0.5 : 0,
    borderColor: color.GRAY,
  },
  inputField: {
    width: '95%',
    borderRadius: Size.BORDER_RADIUS * 3,
  },
  buttonView: {
    alignItems: 'center',
    marginVertical: Size.PADDING * 2,
    width: Size.WIDTH * 0.6,
    paddingVertical: Size.PADDING,
    backgroundColor: color.PRIMARY,
    borderRadius: Size.BORDER_RADIUS * 2,
  },
  text: {
    color: color.PRIMARY_TEXT,
    fontSize: Size.FONTSIZE + 6,
  },
});

export default styles;
