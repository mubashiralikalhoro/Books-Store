import {View, Text, StyleSheet, Image, Animated} from 'react-native';
import React, {useState} from 'react';
import Size from '../constants/Size';
import color from '../constants/color';
import Icons from '../assets/Icons';
import {useSelector} from 'react-redux';
import {useNavigation, useRoute} from '@react-navigation/native';

const AnimatedLogo = () => {
  const reversed = useSelector(state => state.resources.langID.reversed);
  const intialValue = () => {
    if (1)
      return {
        x: (Size.WIDTH - Size.ICON * 2.5) / 2,
        y: 0,
      };
    else
      return {
        x: (Size.WIDTH - Size.ICON * 2.5) / 2,
        y: (Size.HEIGHT - Size.ICON * 2.5) / 2,
      };
  };
  const duration = 1000;
  const logoSize = useState(new Animated.Value(Size.ICON * 2.5))[0];
  const position = useState(new Animated.ValueXY(intialValue()))[0];

  const moveLogo = () => {
    Animated.timing(logoSize, {
      toValue: Size.ICON,
      duration: duration,
      useNativeDriver: false,
    }).start();

    Animated.timing(position, {
      toValue: reversed
        ? {
            y: 0,
            x: Size.WIDTH - Size.ICON,
          }
        : {
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
