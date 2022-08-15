import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Size from '../constants/Size';
import GlobalStyle from '../constants/GlobalStyle';
import color from '../constants/color';

const LanguageComponent = ({selected, onPress, title, icon}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={icon} style={styles.image} />
      <Text style={[GlobalStyle.TEXT_STYLE]}>{title}</Text>
      <View style={{flex: 1}} />
      <View style={styles.out}>
        <View style={styles.in(selected == title)}></View>
      </View>
    </TouchableOpacity>
  );
};

export default LanguageComponent;

const styles = StyleSheet.create({
  container: {
    marginVertical: Size.PADDING,
    width: Size.WIDTH * 0.95,
    height: Size.ICON * 1.5,
    padding: Size.PADDING,
    backgroundColor: color.BACKGROUND,
    borderRadius: Size.BORDER_RADIUS,
    ...GlobalStyle.SHADOW_STYLE,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    marginHorizontal: Size.PADDING,
    height: Size.ICON,
    width: Size.ICON,
    borderRadius: Size.ICON / 2,
  },
  out: {
    backgroundColor: color.TEXT,
    height: Size.HEADER_FOOTER_SIZE / 2,
    width: Size.HEADER_FOOTER_SIZE / 2,
    borderRadius: Size.HEADER_FOOTER_SIZE / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  in: pressed => ({
    backgroundColor: pressed ? color.GREEN : color.BACKGROUND,
    height: Size.HEADER_FOOTER_SIZE / 2.7,
    width: Size.HEADER_FOOTER_SIZE / 2.7,
    borderRadius: Size.HEADER_FOOTER_SIZE / 3,
    justifyContent: 'center',
    alignItems: 'center',
  }),
});
