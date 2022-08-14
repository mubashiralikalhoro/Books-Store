import {StyleSheet} from 'react-native';
import color from '../../../constants/color';
import GlobalStyle from '../../../constants/GlobalStyle';
import Size from '../../../constants/Size';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  line: {
    marginBottom: Size.PADDING,
    width: '100%',
    height: 1,
    backgroundColor: color.GRAY,
    marginTop: 2,
  },
  line1: {
    marginTop: Size.PADDING,
    width: '100%',
    height: 1,
    backgroundColor: color.GRAY,
  },
  input: {
    borderRadius: Size.PADDING * 2,
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
