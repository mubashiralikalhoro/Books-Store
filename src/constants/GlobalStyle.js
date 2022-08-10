import {Platform, StyleSheet} from 'react-native';
import color from './color';
import Size from './Size';

export default StyleSheet.create({
  TEXT_STYLE: {
    fontSize: Size.FONTSIZE,
    color: color.TEXT,
  },
  SHADOW_STYLE: {
    shadowColor: color.TEXT,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,

    elevation: 20,
    borderColor: color.GRAY,
    borderWidth: Platform.OS == 'android' && color.isDark ? 0.5 : 0,
  },
});
