import {View, Text, StyleSheet, Image, Animated} from 'react-native';
import React, {useState} from 'react';
import Size from '../constants/Size';
import color from '../constants/color';
import Icons from '../assets/Icons';

const AnimatedLogo = () => {
  const duration = 1000;
  const logoSize = useState(new Animated.Value(Size.ICON * 2.5))[0];
  const position = useState(
    new Animated.ValueXY({
      x: (Size.WIDTH - Size.ICON * 2.5) / 2,
      y: (Size.HEIGHT - Size.ICON * 2.5) / 2,
    }),
  )[0];

  const moveLogo = () => {
    Animated.timing(logoSize, {
      toValue: Size.ICON,
      duration: duration,
      useNativeDriver: false,
    }).start();

    Animated.timing(position, {
      toValue: {
        y: 0,
        x: 0,
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
          height: logoSize,
          width: logoSize,
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

export default AnimatedLogo;
