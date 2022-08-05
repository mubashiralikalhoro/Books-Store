import {Image, View, Text, StyleSheet, Animated} from 'react-native';
import React, {useState} from 'react';
import Size from '../constants/Size';
import color from '../constants/color';

const BottomTabIcons = ({icon, iconSelected, focused}) => {
  if (focused) {
    return (
      <Animated.View style={styles.focusedView}>
        <Image source={iconSelected} style={styles.IconStyle} />
      </Animated.View>
    );
  } else {
    return (
      <Animated.View style={styles.normalView}>
        <Image source={icon} style={styles.IconStyle} />
      </Animated.View>
    );
  }
};

export default BottomTabIcons;

const styles = StyleSheet.create({
  focusedView: {
    bottom: Size.ICON / 4,
    height: Size.ICON * 1.1,
    width: Size.ICON * 1.1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: (Size.ICON * 1.1) / 2,
    backgroundColor: color.PRIMARY,
    // Shadow
    shadowColor: color.TEXT,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },

  normalView: {},
  IconStyle: {
    width: Size.ICON * 0.7,
    height: Size.ICON * 0.7,
  },
});
