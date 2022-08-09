import {StyleSheet, Dimensions} from 'react-native';
import color from '../../../constants/color';
import Size from '../../../constants/Size';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: color.BACKGROUND,
  },

  logo: {
    height: Size.ICON * 2.5,
    width: Size.ICON * 2.5,
    resizeMode: 'contain',
  },

  welcomeCon: {
    marginTop: Size.PADDING,
    width: Size.WIDTH * 0.85,
  },

  txt3: {
    fontFamily: 'DMSans-Regular',
    fontSize: Size.WIDTH * 0.04,
    color: color.TEXT,
    width: Size.WIDTH * 0.7,
  },

  eyeCon: {
    height: Size.HEIGHT * 0.03,
    width: Size.WIDTH * 0.2,
  },

  forgotCon: {
    width: Size.WIDTH * 0.9,
    marginVertical: Size.PADDING,
    alignItems: 'flex-end',
  },

  forgotTxt: {
    color: color.PRIMARY,
    fontSize: Size.FONTSIZE + 4,
  },

  signInCon: {
    backgroundColor: color.PRIMARY,
    height: Size.HEIGHT * 0.06,
    width: Size.WIDTH * 0.8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Size.WIDTH * 0.7,
    alignSelf: 'center',
    marginTop: Size.HEIGHT * 0.09,
  },

  txt4: {
    color: 'white',
    fontFamily: 'DMSans-Bold',
    fontSize: Size.WIDTH * 0.04,
  },

  lastCon: {
    alignSelf: 'center',
    marginTop: Size.HEIGHT * 0.015,
  },

  lastTxt: {
    fontFamily: 'DMSans-Regular',
    fontSize: Size.WIDTH * 0.04,
    color: color.TEXT,
  },
  icon: {
    height: Size.ICON * 0.8,
    width: Size.ICON * 0.8,
  },

  appleIcon: {
    height: Size.ICON * 0.8,
    width: Size.ICON * 0.8,
    bottom: 2,
  },

  googleIcon: {
    height: Size.ICON * 0.7,
    width: Size.ICON * 0.7,
  },

  iconsView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '50%',
    marginTop: Size.PADDING,
  },
  orView: {
    width: '95%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: Size.PADDING,
  },
  line: {
    borderTopColor: color.GRAY,
    borderTopWidth: 2,
    width: '44%',
  },
});
