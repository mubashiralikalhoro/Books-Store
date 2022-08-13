import {View, Text} from 'react-native';
import React from 'react';
import LanguageScreen from '../Language/index';
import ScreenHeader from './ScreenHeader';
import ChangePasswordScreen from '../ChangePassword';
import AboutUsScreen from '../About';
import ContactUsScreen from '../contactUs';
import SettingsScreen from '../Settings';
import ViewProfileScreen from '../ViewProfile';
import PasswordVerificationScreen from '../PasswordVarification';

const Screens = ({
  screen,
  setScreen,
  setEditable,
  pickedImage,
  setPickedImage,
}) => {
  const setMainScreen = () => {
    setScreen('main');
  };
  if (screen == 'language') {
    return (
      <>
        <ScreenHeader title={'Change Language'} onPress={setMainScreen} />
        <LanguageScreen />
      </>
    );
  } else if (screen == 'changePassword') {
    return (
      <>
        <ScreenHeader title={'Change Password'} onPress={setMainScreen} />
        <ChangePasswordScreen />
      </>
    );
  } else if (screen == 'aboutUs') {
    return (
      <>
        <ScreenHeader title={'About Us'} onPress={setMainScreen} />
        <AboutUsScreen />
      </>
    );
  } else if (screen == 'contactUs') {
    return (
      <>
        <ScreenHeader title={'Contact Us'} onPress={setMainScreen} />
        <ContactUsScreen />
      </>
    );
  } else if (screen == 'settings') {
    return (
      <>
        <ScreenHeader title={'Settings'} onPress={setMainScreen} />
        <SettingsScreen />
      </>
    );
  } else if (screen == 'viewProfile') {
    return (
      <>
        <ScreenHeader title={'Your Profile'} onPress={setMainScreen} />
        <ViewProfileScreen
          setMainScreen={setMainScreen}
          setScreen={setScreen}
        />
      </>
    );
  } else if (screen == 'passwordVerification') {
    return (
      <>
        <ScreenHeader title={"Verify it's you"} onPress={setMainScreen} />
        <PasswordVerificationScreen
          setScreen={setScreen}
          setEditable={setEditable}
        />
      </>
    );
  } else if (screen == 'editProfile') {
    return (
      <>
        <ScreenHeader title={'Edit your profile'} onPress={setMainScreen} />
        <ViewProfileScreen
          setMainScreen={setMainScreen}
          setScreen={setScreen}
          edit={true}
          setEditableImage={setEditable}
          pickedImage={pickedImage}
          setPickedImage={setPickedImage}
        />
      </>
    );
  }
};

export default Screens;
