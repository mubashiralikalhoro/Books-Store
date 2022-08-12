import {View, Text} from 'react-native';
import React from 'react';
import LanguageScreen from '../Language/index';
import ScreenHeader from './ScreenHeader';
import ChangePasswordScreen from '../ChangePassword';
import AboutUsScreen from '../About';
import ContactUsScreen from '../contactUs';

const Screens = ({screen, setScreen}) => {
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
  }
};

export default Screens;
