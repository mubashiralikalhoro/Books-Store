import {View, Text, Image, Animated} from 'react-native';
import React, {useState} from 'react';
import Icons from '../../../assets/Icons';
import {Images} from '../../../assets/images';
import style from './style';
import Size from '../../../constants/Size';
import CartScreen from '../Cart';

const SplashScreen = ({navigation}) => {
  // animations
  const logoSize = useState(new Animated.Value(0))[0];
  const moveIn = () => {
    Animated.spring(logoSize, {
      toValue: Size.ICON * 2.5,
      useNativeDriver: false,
    }).start();
  };
  moveIn();

  // navigate to signIn
  const navigate = () => {
    navigation.replace('SignInScreen');
  };

  setTimeout(navigate, 2000);
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
