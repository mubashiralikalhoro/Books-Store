import React from 'react';
import LanguageScreen from '../Language/index';
import ScreenHeader from './ScreenHeader';
import ChangePasswordScreen from '../ChangePassword';
import AboutUsScreen from '../About';
import ContactUsScreen from '../contactUs';
import SettingsScreen from '../Settings';
import ViewProfileScreen from '../ViewProfile';
import PasswordVerificationScreen from '../PasswordVerification';
import {useSelector} from 'react-redux';
import AddNewAddressScreen from '../AddNewAddress';

const Screens = ({
  screen,
  setScreen,
  setEditable,
  pickedImage,
  setPickedImage,
}) => {
  const strings = useSelector(state => state.resources.langID.strings);
  const setMainScreen = () => {
    setScreen('main');
  };
  if (screen == 'language') {
    return (
      <>
        <ScreenHeader title={strings.CHANGE_LANGUAGE} onPress={setMainScreen} />
        <LanguageScreen />
      </>
    );
  } else if (screen == 'changePassword') {
    return (
      <>
        <ScreenHeader title={strings.CHANGE_PASSWORD} onPress={setMainScreen} />
        <ChangePasswordScreen />
      </>
    );
  } else if (screen == 'aboutUs') {
    return (
      <>
        <ScreenHeader title={strings.ABOUT_US} onPress={setMainScreen} />
        <AboutUsScreen />
      </>
    );
  } else if (screen == 'contactUs') {
    return (
      <>
        <ScreenHeader title={strings.CONTACT_US} onPress={setMainScreen} />
        <ContactUsScreen />
      </>
    );
  } else if (screen == 'settings') {
    return (
      <>
        <ScreenHeader title={strings.SETTINGS} onPress={setMainScreen} />
        <SettingsScreen />
      </>
    );
  } else if (screen == 'viewProfile') {
    return (
      <>
        <ScreenHeader title={strings.YOUR_PROFILE} onPress={setMainScreen} />
        <ViewProfileScreen
          setMainScreen={setMainScreen}
          setScreen={setScreen}
        />
      </>
    );
  } else if (screen == 'passwordVerification') {
    return (
      <>
        <ScreenHeader title={strings.VERIFY_ITS_YOU} onPress={setMainScreen} />
        <PasswordVerificationScreen
          setScreen={setScreen}
          setEditable={setEditable}
        />
      </>
    );
  } else if (screen == 'addNewAddress') {
    return (
      <>
        <ScreenHeader title={strings.ADD_NEW_ADDRESS} onPress={setMainScreen} />
        <AddNewAddressScreen setMainScreen={setMainScreen} />
      </>
    );
  } else if (screen == 'editProfile') {
    return (
      <>
        <ScreenHeader
          title={strings.EDIT_YOUR_PROFILE}
          onPress={setMainScreen}
        />
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
