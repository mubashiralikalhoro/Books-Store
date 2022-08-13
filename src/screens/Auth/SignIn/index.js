import React from 'react';

import {
  SafeAreaView,
  Text,
  Image,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Pressable,
} from 'react-native';
import {useDispatch} from 'react-redux';
import styles from './style';
import Size from '../../../constants/Size';
import color from '../../../constants/color';
import Icon from '../../../assets/Icons/index';
import {Images} from '../../../assets/images/index';
import GlobalStyle from '../../../constants/GlobalStyle';
import CustomInputField from '../../../components/CustomInputField';
import AnimatedLogoSigInScreen from '../../../components/AnimatedLogoSignInScreen';
import {userLoggedIn} from '../../../store/reducer/user';
import {useSelector} from 'react-redux';
import NormalLogoSigInScreen from '../../../components/NormalLogoSignInScreen';

const tempUser = {
  name: 'John Henry',
  image: {
    uri: 'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
  },
  email: 'johnHenry@gmail.com',
  phoneNo: '412492140149',
  address: 'California/USA',
};

const SignIn = ({navigation}) => {
  const strings = useSelector(state => state.resources.langID.strings);
  const dispatch = useDispatch();
  const reversed = useSelector(state => state.resources.langID.reversed);
  const animation = useSelector(state => state.resources.animation);
  const signIn = () => {
    dispatch(userLoggedIn(tempUser));
  };
  return (
    <SafeAreaView style={styles.container}>
      {/* Header Section*/}
      <View style={styles.logo} />
      <View style={styles.welcomeCon}>
        <Text
          style={[
            GlobalStyle.TEXT_STYLE,
            {
              color: color.GRAY,
              alignSelf: reversed ? 'flex-end' : 'flex-start',
            },
          ]}>
          {strings.WELCOME_BACK}
        </Text>
        <Text style={styles.txt3(reversed)}>{strings.LOG_IN_TO}</Text>
      </View>

      {/* InputField*/}
      <KeyboardAvoidingView style={{marginTop: Size.PADDING * 2}}>
        <CustomInputField
          icon={Icon.ACCOUNT}
          placeholder={strings.EMAIL}
          placeholderTextColor={color.TEXT}
          keyboardType="email-address"
        />
        <CustomInputField
          icon={Icon.LOCK}
          placeholder={strings.PASSWORD}
          placeholderTextColor={color.TEXT}
          secureTextEntry={true}
        />
      </KeyboardAvoidingView>

      {/* FORGET PASSWORD */}
      <Pressable style={styles.forgotCon(reversed)}>
        <Text
          onPress={() => navigation.navigate('ForgetPasswordScreen')}
          style={[GlobalStyle.TEXT_STYLE, styles.forgotTxt]}>
          {strings.FORGET_PASSWORD}
        </Text>
      </Pressable>

      {/* OR SECTION*/}
      <View style={styles.orView}>
        <View style={styles.line} />
        <Text style={{color: color.PRIMARY}}>{strings.OR}</Text>
        <View style={styles.line} />
      </View>

      {/* FB GOOGLE AND APPLE ICONS SECTION*/}
      <View style={styles.iconsView}>
        <Image
          source={Icon.FACEBOOK}
          resizeMode={'contain'}
          style={styles.icon}
        />
        <Image
          source={Icon.APPLE}
          resizeMode={'contain'}
          style={styles.appleIcon}
        />
        <Image
          source={Icon.GOOGLE}
          resizeMode={'contain'}
          style={styles.googleIcon}
        />
      </View>

      {/*SIGN IN BUTTON*/}
      <TouchableOpacity onPress={signIn} style={styles.signInCon}>
        <Text style={[GlobalStyle.TEXT_STYLE, styles.txt4]}>
          {strings.SIGN_IN_ALL_CAPS}
        </Text>
      </TouchableOpacity>

      {/*SIGN UP BUTTON*/}
      <View style={styles.lastCon(reversed)}>
        <Text style={[GlobalStyle.TEXT_STYLE, styles.lastTxt]}>
          {' '}
          {strings.DONT_HAVE}{' '}
        </Text>
        <Text
          onPress={() => navigation.navigate('SignUpScreen')}
          style={[styles.lastTxt, {color: color.PRIMARY}]}>
          {strings.SIGN_UP}
        </Text>
      </View>
      {animation ? <AnimatedLogoSigInScreen /> : <NormalLogoSigInScreen />}
    </SafeAreaView>
  );
};

export default SignIn;
