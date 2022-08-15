import {View, Text, Image, Animated} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icons from '../../../assets/Icons';
import style from './style';
import Size from '../../../constants/Size';
import {useSelector} from 'react-redux';

const SplashScreen = ({navigation}) => {
  // animations
  const animation = useSelector(state => state.resources.animation);
  // navigate to signIn
  const navigate = () => {
    navigation.replace('BottomNavigator');
  };

  // checking if use animations of not
  if (animation) {
    const logoSize = useState(new Animated.Value(0))[0];
    const moveIn = () => {
      Animated.timing(logoSize, {
        toValue: Size.ICON * 2.5,
        duration: 1800,
        useNativeDriver: false,
      }).start();
    };

    useEffect(() => {
      setTimeout(navigate, 2000);
      moveIn();
    }, []);

    return (
      <View style={style.container}>
        {/*Logo*/}
        <Animated.View
          style={[
            {
              height: logoSize,
              width: logoSize,
              position: 'absolute',
            },
          ]}>
          <Image source={Icons.LOGO} style={style.logo} />
        </Animated.View>
      </View>
    );
  } else {
    useEffect(() => {
      setTimeout(navigate, 2000);
    }, []);
    return (
      <View style={style.container}>
        {/*Logo*/}
        <View
          style={[
            {
              height: Size.ICON * 2.5,
              width: Size.ICON * 2.5,
              position: 'absolute',
            },
          ]}>
          <Image source={Icons.LOGO} style={style.logo} />
        </View>
      </View>
    );
  }
};

export default SplashScreen;
