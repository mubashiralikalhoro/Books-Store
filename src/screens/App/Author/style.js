import {StyleSheet} from 'react-native';
import color from '../../../constants/color';
import Size from '../../../constants/Size';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.BACKGROUND,
    alignItems: 'center',
  },
  authorDetailsView: {
    marginTop: Size.PADDING,
    width: Size.WIDTH * 0.95,
  },
  authorImage: {
    marginTop: Size.PADDING * 2,
    alignSelf: 'center',
    borderRadius: Size.WIDTH * 0.15,
    height: Size.WIDTH * 0.3,
    width: Size.WIDTH * 0.3,
    borderWidth: 0.5,
    borderColor: color.TEXT,
  },
  disView: {
    marginLeft: Size.PADDING,
  },
  totalSells: {
    textAlign: 'center',
    alignSelf: 'center',
    color: color.GRAY,
  },
  authorName: {
    alignSelf: 'center',
    fontSize: Size.WIDTH * 0.04,
  },
  info: {
    alignSelf: 'center',
    textAlign: 'center',
  },
  bookView: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  line: {
    marginTop: Size.PADDING * 2,
    width: '100%',
    height: 1,
    backgroundColor: color.TEXT,
  },
});

export default styles;
