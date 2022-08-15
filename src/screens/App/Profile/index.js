import {View, SafeAreaView, Animated, Alert} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import UserProfile from '../../../components/UserProfile';
import {useSelector, useDispatch} from 'react-redux';
import Option from '../../../components/Option';
import color from '../../../constants/color';
import {userLoggedOut} from '../../../store/reducer/user';
import {clearCart} from '../../../store/reducer/cart';
import {clearNotification} from '../../../store/reducer/notification';
import {clearFav} from '../../../store/reducer/favorite';
import Icons from '../../../assets/Icons';
import {Images} from '../../../assets/images';

const ProfileScreen = ({navigation}) => {
  // Hooks
  const isUser = useSelector(state => state.user).length > 0;

  const strings = useSelector(state => state.resources.langID.strings);

  const user = useSelector(state => state.user[0]);
  const dispatch = useDispatch();
  // Actions
  const signOut = () => {
    Alert.alert(strings.SIGN_OUT, strings.DO_YOU_WANT_TO_SIGN_OUT, [
      {
        text: strings.NO,
      },
      {
        text: strings.YES,
        onPress: () => {
          dispatch(clearCart());
          dispatch(clearNotification());
          dispatch(clearFav());
          dispatch(userLoggedOut());
        },
      },
    ]);
  };
  // Screens
  const Options = () => (
    <>
      {isUser && (
        <>
          <Option
            title={strings.VIEW_YOUR_PROFILE}
            titleColor={color.GRAY}
            icon={Icons.ACCOUNT}
            iconColor={color.GRAY}
            onPress={() => navigation.navigate('ViewProfileScreen')}
          />
          <Option
            title={strings.ADD_NEW_ADDRESS}
            titleColor={color.GRAY}
            icon={Icons.PIN}
            iconColor={color.GRAY}
            onPress={() => navigation.navigate('AddNewAddressScreen')}
          />
          <Option
            title={strings.CHANGE_PASSWORD}
            titleColor={color.GRAY}
            icon={Icons.LOCK}
            iconColor={color.GRAY}
            onPress={() => navigation.navigate('ChangePasswordScreen')}
          />
        </>
      )}
      <Option
        title={strings.LANGUAGE}
        titleColor={color.GRAY}
        icon={Icons.LANGUAGE}
        iconColor={color.GRAY}
        onPress={() => navigation.navigate('LanguageScreen')}
      />
      <Option
        title={strings.CONTACT_US}
        titleColor={color.GRAY}
        icon={Icons.MESSAGE}
        iconColor={color.GRAY}
        onPress={() => navigation.navigate('ContactUsScreen')}
      />
      <Option
        title={strings.ABOUT_US}
        titleColor={color.GRAY}
        icon={Icons.ABOUT_US}
        iconColor={color.GRAY}
        onPress={() => navigation.navigate('AboutUsScreen')}
      />
      <Option
        title={strings.SETTINGS}
        titleColor={color.GRAY}
        icon={Icons.SETTINGS}
        iconColor={color.GRAY}
        onPress={() => navigation.navigate('SettingsScreen')}
      />
      {isUser ? (
        <Option
          title={strings.SIGN_OUT}
          titleColor={color.RED}
          icon={Icons.LOG_OUT}
          iconColor={color.RED}
          onPress={signOut}
        />
      ) : (
        <Option
          title={strings.SIGN_IN}
          titleColor={color.GREEN}
          icon={Icons.LOG_IN}
          iconColor={color.GREEN}
          onPress={() => navigation.navigate('SignInScreen')}
        />
      )}
    </>
  );
  // main View
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileContainer}>
        {isUser ? (
          <UserProfile user={user} />
        ) : (
          <UserProfile
            user={{name: strings.USER, image: Images.user}}
            showPencil={false}
          />
        )}
      </View>
      <View style={styles.detailsContainer}>
        <Options />
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
