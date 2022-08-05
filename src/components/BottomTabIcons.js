import {Image, View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Size from '../constants/Size';

const BottomTabIcons = ({icon, focused}) => {
  if (focused) {
    return (
      <View>
        <Image source={icon} style={styles.IconStyle} />
      </View>
    );
  } else {
    return (
      <View>
        <Image source={icon} style={styles.IconStyle} />
      </View>
    );
  }
};

export default BottomTabIcons;

const styles = StyleSheet.create({
  focusedView: {},
  IconStyle: {
    width: Size.ICON,
    height: Size.ICON,
  },
});
