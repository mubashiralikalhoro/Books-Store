import {View, Text, StyleSheet, Image, Animated} from 'react-native';
import React, {useState} from 'react';
import Size from '../constants/Size';
import color from '../constants/color';
import Icons from '../assets/Icons';

const NormalLogoSigInScreen = () => {
  return (
    <View
      style={[
        {
          height: Size.ICON * 2.5,
          width: Size.ICON * 2.5,
          position: 'absolute',
        },
      ]}>
      <Image
        source={Icons.LOGO}
        style={{
          width: '100%',
          height: '100%',
          tintColor: color.TEXT,
        }}
      />
    </View>
  );
};

export default NormalLogoSigInScreen;
