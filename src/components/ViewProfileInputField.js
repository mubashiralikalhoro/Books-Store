import {View, Text, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import Size from '../constants/Size';
import color from '../constants/color';
import GlobalStyle from '../constants/GlobalStyle';
import {useSelector} from 'react-redux';

const ViewProfileInputField = ({
  title,
  value,
  onChangeText,
  onBlur,
  error,
  editable,
  placeholder,
}) => {
  const reversed = useSelector(state => state.resources.langID.reversed);
  return (
    <View style={styles.container}>
      <Text style={styles.title(reversed)}>{title}</Text>
      <TextInput
        placeholder={placeholder}
        style={styles.input(reversed)}
        editable={editable}
        value={value}
        onBlur={onBlur}
        onChangeText={onChangeText}
      />
      <View style={styles.line} />
      <Text style={styles.error(reversed)}>{error}</Text>
    </View>
  );
};

export default ViewProfileInputField;

const styles = StyleSheet.create({
  container: {
    width: Size.WIDTH * 0.95,
    paddingHorizontal: Size.PADDING,
    marginTop: Size.PADDING,
  },
  input: reversed => ({
    width: '100%',
    ...GlobalStyle.TEXT_STYLE,
    textAlign: reversed ? 'right' : 'left',
  }),
  title: reversed => ({
    alignSelf: reversed ? 'flex-end' : 'flex-start',
    marginHorizontal: 3,
    ...GlobalStyle.TEXT_STYLE,
    color: color.GRAY,
  }),
  line: {
    width: '100%',
    height: 0.5,
    backgroundColor: color.GRAY,
  },
  error: reversed => ({
    position: 'absolute',
    color: 'red',
    alignSelf: reversed ? 'flex-start' : 'flex-end',
  }),
});
