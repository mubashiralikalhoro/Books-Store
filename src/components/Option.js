import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Size from '../constants/Size';
import GlobalStyle from '../constants/GlobalStyle';
import color from '../constants/color';

const Option = ({title, onPress, titleColor}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={[GlobalStyle.TEXT_STYLE, styles.text(titleColor)]}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Option;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingLeft: Size.PADDING * 2,
    width: '100%',
    height: Size.ICON,
    backgroundColor: color.BACKGROUND,
  },
  text: titleColor => ({
    color: titleColor,
    fontWeight: '700',
    fontSize: Size.WIDTH * 0.035,
  }),
});
