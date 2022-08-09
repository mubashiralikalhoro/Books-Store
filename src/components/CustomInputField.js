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
  keyboardType,
}) => {
  return (
    <View style={[styles.inputCon, style]}>
      <Image
        source={icon}
        resizeMode="contain"
        style={[styles.imageIcon, iconStyle]}
      />
      <TextInput
        style={[GlobalStyle.TEXT_STYLE, styles.input, inputStyle]}
        onChangeText={onChangeText}
        value={value}
        autoCapitalize={false}
        autoCorrect={false}
        spellCheck={false}
        placeholder={placeholder}
        keyboardType={keyboardType}
        placeholderTextColor={placeholderTextColor}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default CustomInputField;

const styles = StyleSheet.create({
  input: {
    fontWeight: '600',
    fontSize: Size.FONTSIZE + 2,
    width: Size.WIDTH * 0.5,
  },
  imageIcon: {
    tintColor: color.TEXT,
    height: Size.ICON * 0.6,
    width: Size.ICON * 0.6,
    marginHorizontal: Size.PADDING,
  },
  inputCon: {
    backgroundColor: color.LIGHT_GRAY,
    width: Size.WIDTH * 0.9,
    borderRadius: Size.WIDTH * 0.078,
    marginTop: Size.HEIGHT * 0.02,
    flexDirection: 'row',
    alignItems: 'center',
    padding: Size.PADDING / 2,
  },
});
