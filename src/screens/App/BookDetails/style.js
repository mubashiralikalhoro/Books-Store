import {StyleSheet} from 'react-native';
import color from '../../../constants/color';
import Size from '../../../constants/Size';

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.BACKGROUND,
    flex: 1,
  },
  bookCover: {
    marginTop: Size.PADDING,
    width: Size.WIDTH * 0.5,
    height: Size.WIDTH * 0.5 * 1.4,
    borderRadius: Size.BORDER_RADIUS * 3,
  },
  imageView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bookName: {
    marginTop: Size.PADDING,
    fontSize: Size.FONTSIZE * 2,
  },
  authorName: {
    color: color.GRAY,
  },
  description: {
    textAlign: 'justify',
  },
  descriptionView: {
    width: Size.WIDTH * 0.9,
  },
  bookInfo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: Size.WIDTH * 0.3,
    marginVertical: Size.PADDING,
  },
  IconStyle: {
    width: 20,
    height: 20,
    tintColor: color.GRAY,
  },
  managingView: {
    flex: 1,
  },
});
export default styles;
