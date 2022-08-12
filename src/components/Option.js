import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Size from '../constants/Size';
import GlobalStyle from '../constants/GlobalStyle';
import color from '../constants/color';
import {useSelector} from 'react-redux';

const Option = ({title, onPress, titleColor, style}) => {
  const reversed = useSelector(state => state.resources.langID.reversed);
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, style]}>
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
  container: {
    justifyContent: 'center',
    paddingHorizontal: Size.PADDING * 2,
    width: '100%',
    height: Size.ICON,
    backgroundColor: color.BACKGROUND,
  },
  text: (titleColor, reversed) => ({
    color: titleColor,
    fontWeight: '700',
    fontSize: Size.WIDTH * 0.035,
    alignSelf: reversed ? 'flex-end' : 'flex-start',
  }),
});
