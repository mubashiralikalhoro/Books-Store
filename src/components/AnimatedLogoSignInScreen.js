import {View, Text, StyleSheet, Image, Animated} from 'react-native';
import React, {useState} from 'react';
import Size from '../constants/Size';
import color from '../constants/color';
import Icons from '../assets/Icons';

const AnimatedLogoSigInScreen = () => {
  const duration = 1000;
  const position = useState(
    new Animated.ValueXY({
      x: (Size.WIDTH - Size.ICON * 2.5) / 2,
      y: (Size.HEIGHT - Size.ICON * 2.5) / 2,
    }),
  )[0];

  const moveLogo = () => {
    Animated.timing(position, {
      toValue: {
        y: 0,
        x: (Size.WIDTH - Size.ICON * 2.5) / 2,
      },
      duration: duration,
      useNativeDriver: false,
    }).start();
  };

  moveLogo();
  return (
    <Animated.View
      style={[
        {
          height: Size.ICON * 2.5,
          width: Size.ICON * 2.5,
          position: 'absolute',
        },
        position.getLayout(),
      ]}>
      <Image
        source={Icons.LOGO}
        style={{
          width: '100%',
          height: '100%',
          tintColor: color.TEXT,
        }}
      />
    </Animated.View>
  );
};

export default AnimatedLogoSigInScreen;
