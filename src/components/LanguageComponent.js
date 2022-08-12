import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Size from '../constants/Size';
import GlobalStyle from '../constants/GlobalStyle';
import color from '../constants/color';

const LanguageComponent = ({selected, onPress, title, icon}) => {
  return (
    <TouchableOpacity
      style={styles.container(selected == title)}
      onPress={onPress}>
      <Image source={icon} style={styles.image} />
      <Text style={[GlobalStyle.TEXT_STYLE]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default LanguageComponent;

const styles = StyleSheet.create({
  container: selected => ({
    marginVertical: Size.PADDING,
    width: Size.WIDTH * 0.95,
    height: Size.ICON * 1.5,
    padding: Size.PADDING,
    backgroundColor: selected ? color.GREEN : color.BACKGROUND,
    borderRadius: Size.BORDER_RADIUS,
    ...GlobalStyle.SHADOW_STYLE,
    flexDirection: 'row',
    alignItems: 'center',
  }),
  image: {
    marginHorizontal: Size.PADDING,
    height: Size.ICON,
    width: Size.ICON,
    borderRadius: Size.ICON / 2,
  },
});
