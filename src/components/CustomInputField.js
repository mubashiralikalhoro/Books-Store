import {View, TextInput, Image, StyleSheet, Text} from 'react-native';
import React from 'react';
import color from '../constants/color';
import Size from '../constants/Size';
import GlobalStyle from '../constants/GlobalStyle';
import {useSelector} from 'react-redux';

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
  onBlur,
  error,
  multiline,
}) => {
  const reversed = useSelector(state => state.resources.langID.reversed);
  return (
    <>
      <View style={[styles.inputCon(reversed), style]}>
        <Image
          source={icon}
          resizeMode="contain"
          style={[styles.imageIcon, iconStyle]}
        />
        <Text style={styles.errorMessage(reversed)}>{error && error}</Text>
        <TextInput
          style={[GlobalStyle.TEXT_STYLE, styles.input(reversed), inputStyle]}
          onChangeText={onChangeText}
          value={value}
          onBlur={onBlur}
          placeholder={placeholder}
          keyboardType={keyboardType}
          placeholderTextColor={placeholderTextColor}
          secureTextEntry={secureTextEntry}
          multiline={multiline}
        />
      </View>
    </>
  );
};

export default CustomInputField;

const styles = StyleSheet.create({
  input: reversed => ({
    fontWeight: '600',
    fontSize: Size.FONTSIZE + 2,
    width: Size.WIDTH * 0.5,
    textAlign: reversed ? 'right' : 'left',
  }),
  imageIcon: {
    tintColor: color.TEXT,
    height: Size.ICON * 0.6,
    width: Size.ICON * 0.6,
    marginHorizontal: Size.PADDING,
  },
  inputCon: reversed => ({
    backgroundColor: color.LIGHT_GRAY,
    width: Size.WIDTH * 0.9,
    borderRadius: Size.WIDTH * 0.078,
    marginTop: Size.HEIGHT * 0.02,
    flexDirection: reversed ? 'row-reverse' : 'row',
    alignItems: 'center',
    padding: Size.PADDING / 2,
  }),
  errorMessage: reversed => ({
    position: 'absolute',
    width: '100%',
    textAlign: reversed ? 'left' : 'right',
    color: 'red',
    right: Size.PADDING * 2,
  }),
});
