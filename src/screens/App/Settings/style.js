import {StyleSheet} from 'react-native';
import color from '../../../constants/color';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: color.BACKGROUND,
  },
  line: {
    width: '100%',
    height: 0.5,
    backgroundColor: color.LIGHT_GRAY,
  },
});
export default styles;
