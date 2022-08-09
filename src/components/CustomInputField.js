import {View, TextInput, Image, StyleSheet} from 'react-native';
import React from 'react';
import color from '../constants/color';
import Size from '../constants/Size';
import GlobalStyle from '../constants/GlobalStyle';

const CustomInputField = ({
  placeholderTextColor,
  icon,
  placeholder,
  onChangeText,
  iconStyle,
  inputStyle,
  style,
  secureTextEntry,
  value,
}) => {
  return (
    <View style={[styles.inputCon, style]}>
      <Image
        source={icon}
        resizeMode="contain"
        style={[styles.imageIcon, iconStyle]}
      />
      <TextInput
        style={[styles.input, inputStyle]}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        keyboardType="default"
        placeholderTextColor={placeholderTextColor}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default CustomInputField;

const styles = StyleSheet.create({
  input: {
    ...GlobalStyle.TEXT_STYLE,
    color: color.PRIMARY_TEXT,
    fontSize: Size.FONTSIZE + 2,
    width: Size.WIDTH * 0.5,
  },
  imageIcon: {
    tintColor: color.PRIMARY_TEXT,
    height: Size.ICON * 0.6,
    width: Size.ICON * 0.6,
    marginHorizontal: Size.PADDING,
  },
  inputCon: {
    backgroundColor: color.PRIMARY,
    width: Size.WIDTH * 0.9,
    borderRadius: Size.WIDTH * 0.078,
    marginTop: Size.HEIGHT * 0.02,
    flexDirection: 'row',
    alignItems: 'center',
    padding: Size.PADDING / 2,
  },
});
