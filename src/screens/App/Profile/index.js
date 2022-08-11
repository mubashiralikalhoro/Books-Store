import {View, Text, SafeAreaView, Button} from 'react-native';
import React from 'react';
import styles from './style';
import UserProfile from '../../../components/UserProfile';
import {useSelector, useDispatch} from 'react-redux';
import Option from '../../../components/Option';
import color from '../../../constants/color';
import {userLoggedOut} from '../../../store/reducer/user';
import {clearCart} from '../../../store/reducer/cart';
import {clearNotification} from '../../../store/reducer/notification';
import {clearFav} from '../../../store/reducer/favorite';

const ProfileScreen = () => {
  const user = useSelector(state => state.user[0]);
  const dispatch = useDispatch();
  const changePassword = () => {};
  const language = () => {};
  const support = () => {};
  const aboutUs = () => {};
  const signOut = () => {
    dispatch(clearCart());
    dispatch(clearNotification());
    dispatch(clearFav());
    dispatch(userLoggedOut());
  };
  // main View
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileContainer}>
        <UserProfile user={user} />
      </View>
      <View style={styles.detailsContainer}>
        <View style={{flex: 1}} />
        <Option
          title="Change Password"
          titleColor={color.TEXT}
          onPress={changePassword}
        />
        <View style={styles.line} />
        <Option title="Language" titleColor={color.TEXT} onPress={language} />
        <View style={styles.line} />
        <Option title="Support and services" titleColor={color.TEXT} />
        <View style={styles.line} />
        <Option title="About us" titleColor={color.TEXT} />
        <View style={styles.line} />
        <Option title="Sign Out" titleColor={color.RED} onPress={signOut} />
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
