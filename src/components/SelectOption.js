import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Size from '../constants/Size';
import color from '../constants/color';
import GlobalStyle from '../constants/GlobalStyle';

const SelectOption = ({title, pressed, onPress, Icon}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={Icon} style={styles.icon} />
      <Text style={[GlobalStyle.TEXT_STYLE, {fontWeight: '800'}]}>{title}</Text>
      <View style={styles.View}>
        <View style={styles.out}>
          <View style={styles.mid}>
            <View style={styles.in(pressed)}></View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SelectOption;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.LIGHT_GRAY,
    height: Size.WIDTH * 0.4,
    width: Size.WIDTH * 0.4,
    alignItems: 'center',
    marginVertical: Size.PADDING,
    borderRadius: Size.HEADER_FOOTER_SIZE / 2,
  },
  View: {
    position: 'absolute',
    alignSelf: 'flex-end',
    right: Size.PADDING,
    top: Size.PADDING,
  },
  out: {
    backgroundColor: color.TEXT,
    height: Size.HEADER_FOOTER_SIZE / 2,
    width: Size.HEADER_FOOTER_SIZE / 2,
    borderRadius: Size.HEADER_FOOTER_SIZE / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mid: {
    backgroundColor: color.BACKGROUND,
    height: Size.HEADER_FOOTER_SIZE / 2 - 4,
    width: Size.HEADER_FOOTER_SIZE / 2 - 4,
    borderRadius: Size.HEADER_FOOTER_SIZE / 2 - 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  in: pressed => ({
    backgroundColor: pressed ? color.PRIMARY : color.BACKGROUND,
    height: Size.HEADER_FOOTER_SIZE / 3,
    width: Size.HEADER_FOOTER_SIZE / 3,
    borderRadius: Size.HEADER_FOOTER_SIZE / 3,
    justifyContent: 'center',
    alignItems: 'center',
  }),
  icon: {
    marginTop: Size.PADDING * 2,
    marginBottom: Size.PADDING,
    height: Size.WIDTH * 0.2,
    width: Size.WIDTH * 0.2,
    tintColor: color.TEXT,
  },
});
