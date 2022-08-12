import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import GlobalStyle from '../../../constants/GlobalStyle';
import Size from '../../../constants/Size';
import Icons from '../../../assets/Icons';
const ScreenHeader = ({title, onPress}) => {
  return (
    <View style={styles.container}>
      <Text style={[GlobalStyle.TEXT_STYLE, styles.text]}>{title}</Text>
      <TouchableOpacity style={styles.touchable} onPress={onPress}>
        <Image source={Icons.ARROW_DOWN} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

export default ScreenHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopLeftRadius: Size.BORDER_RADIUS * 6,
    borderTopRightRadius: Size.BORDER_RADIUS * 6,
    paddingVertical: Size.PADDING,
    paddingHorizontal: Size.PADDING * 2,
  },
  text: {
    fontWeight: '700',
    fontSize: Size.WIDTH * 0.035,
  },
  icon: {
    height: Size.WIDTH * 0.04,
    width: Size.WIDTH * 0.04,
  },
  touchable: {
    width: '30%',
    height: '100%',
    alignItems: 'flex-end',
  },
});
