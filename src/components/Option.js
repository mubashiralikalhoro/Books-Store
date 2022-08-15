import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Size from '../constants/Size';
import GlobalStyle from '../constants/GlobalStyle';
import color from '../constants/color';
import {useSelector} from 'react-redux';
import Icons from '../assets/Icons';

const Option = ({title, onPress, titleColor, style, iconColor, icon}) => {
  const reversed = useSelector(state => state.resources.langID.reversed);
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container(reversed), style]}>
        <Image source={icon} style={styles.icon(iconColor)} />
        <Text
          style={[GlobalStyle.TEXT_STYLE, styles.text(titleColor, reversed)]}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Option;

const styles = StyleSheet.create({
  container: reversed => ({
    // justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Size.PADDING,
    width: '100%',
    height: Size.ICON,
    backgroundColor: color.BACKGROUND,
    flexDirection: reversed ? 'row-reverse' : 'row',
  }),
  text: (titleColor, reversed) => ({
    color: titleColor,
    fontWeight: '700',
    fontSize: Size.WIDTH * 0.035,
    textAlign: reversed ? 'right' : 'left',
    width: Size.WIDTH * 0.8,
  }),
  icon: iconColor => ({
    tintColor: iconColor,
    height: Size.ICON / 2,
    marginHorizontal: Size.PADDING,
    width: Size.ICON / 2,
  }),
});
