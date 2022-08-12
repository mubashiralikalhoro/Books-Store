import {View, Text, StyleSheet, Image, Animated} from 'react-native';
import React, {useState} from 'react';
import Size from '../constants/Size';
import color from '../constants/color';
import Icons from '../assets/Icons';
import {useSelector} from 'react-redux';
import {useNavigation, useRoute} from '@react-navigation/native';

const NormalLogo = () => {
  const reversed = useSelector(state => state.resources.langID.reversed);

  return (
    <View
      style={[
        {
          height: Size.ICON,
          width: Size.ICON,
          marginLeft: reversed ? Size.WIDTH - Size.ICON : 0,
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

export default NormalLogo;
