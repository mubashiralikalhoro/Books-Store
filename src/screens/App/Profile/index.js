import {View, Text, SafeAreaView, Button, Animated} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './style';
import UserProfile from '../../../components/UserProfile';
import {useSelector, useDispatch} from 'react-redux';
import Option from '../../../components/Option';
import color from '../../../constants/color';
import {userLoggedOut} from '../../../store/reducer/user';
import {clearCart} from '../../../store/reducer/cart';
import {clearNotification} from '../../../store/reducer/notification';
import {clearFav} from '../../../store/reducer/favorite';
import Screens from './Screens';
import Size from '../../../constants/Size';

const ProfileScreen = ({navigation}) => {
  // Hooks
  const [screen, setScreen] = useState('main');
  const user = useSelector(state => state.user[0]);
  const dispatch = useDispatch();

  // Actions
  const signOut = () => {
    dispatch(clearCart());
    dispatch(clearNotification());
    dispatch(clearFav());
    dispatch(userLoggedOut());
  };

  // animations
  const margin = useState(new Animated.Value(0))[0];
  const animation = props => {
    // going out
    Animated.spring(margin, {
      toValue: Size.HEIGHT * 0.8 - Size.HEADER_FOOTER_SIZE,
      useNativeDriver: false,
    }).start();

    // coming in
    setTimeout(() => {
      setScreen(props);
      Animated.spring(margin, {
        toValue: 0,
        useNativeDriver: false,
      }).start();
    }, 100);
  };
  // Screens
  const Options = () => (
    <>
      <View style={styles.topBorder} />
      <View style={{flex: 1}} />
      <Option
        title="Change Password"
        titleColor={color.TEXT}
        onPress={() => animation('changePassword')}
      />
      <View style={styles.line} />
      <Option
        title="Language"
        titleColor={color.TEXT}
        onPress={() => animation('language')}
      />
      <View style={[styles.line, {height: 3}]} />
      <Option
        title="Contact us"
        titleColor={color.TEXT}
        onPress={() => animation('contactUs')}
      />
      <View style={styles.line} />
      <Option
        title="About us"
        titleColor={color.TEXT}
        onPress={() => animation('aboutUs')}
      />
      <View style={[styles.line, {height: 3}]} />
      <Option title="Settings" titleColor={color.TEXT} />
      <View style={styles.line} />
      <Option title="Sign Out" titleColor={color.RED} onPress={signOut} />
      <View style={[styles.line, {height: 3}]} />
    </>
  );

  // main View
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileContainer}>
        <UserProfile user={user} />
      </View>
      <Animated.View style={styles.detailsContainer(margin)}>
        {screen == 'main' ? (
          <Options />
        ) : (
          <Screens screen={screen} setScreen={animation} />
        )}
      </Animated.View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
