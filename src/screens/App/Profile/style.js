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
  profileContainer: {
    width: '100%',
    height: Size.HEIGHT * 0.2,
    justifyContent: 'center',
    paddingHorizontal: Size.PADDING * 2,
  },
  detailsContainer: {
    flex: 1,
    width: '100%',
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: color.LIGHT_GRAY,
  },
  topBorder: {
    borderTopLeftRadius: Size.BORDER_RADIUS * 6,
    borderTopRightRadius: Size.BORDER_RADIUS * 6,
  },
});
export default styles;
