import {View, Text, Image, Animated} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icons from '../../../assets/Icons';
import {Images} from '../../../assets/images';
import style from './style';
import Size from '../../../constants/Size';
import CartScreen from '../Cart';

const SplashScreen = ({navigation}) => {
  // animations
  const logoSize = useState(new Animated.Value(0))[0];
  const moveIn = () => {
    Animated.timing(logoSize, {
      toValue: Size.ICON * 2.5,
      duration: 1800,
      useNativeDriver: false,
    }).start();
  };

  // navigate to signIn
  const navigate = () => {
    navigation.replace('SignInScreen');
  };

  useEffect(() => {
    setTimeout(navigate, 2000);
    moveIn();
  }, []);
  return (
    <View style={style.container}>
      {/*backGround book Image*/}
      {/* <Image
        source={Images.SplashScreenBook}
        style={style.imageStyle}
        resizeMode={'stretch'}
      /> */}
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
};

export default SplashScreen;
