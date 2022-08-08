import {StyleSheet} from 'react-native';
import color from '../../../constants/color';
import Size from '../../../constants/Size';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    position: 'absolute',
    opacity: 0.1,
    width: Size.WIDTH * 2,
    height: Size.WIDTH,
    left: Size.WIDTH * 0.025,
    top: Size.HEIGHT / 2,
  },
  logo: {
    tintColor: color.PRIMARY_TEXT,
    height: '100%',
    width: '100%',
  },
});
export default styles;
