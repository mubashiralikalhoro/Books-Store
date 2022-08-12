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
  phoneNo: '+010000000000',
  address: 'California/USA',
};

const SignIn = ({navigation}) => {
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
          Welcome Back
        </Text>
        <Text style={styles.txt3(reversed)}>
          Log in to your existing account of BookStore
        </Text>
      </View>

      {/* InputField*/}
      <KeyboardAvoidingView style={{marginTop: Size.PADDING * 2}}>
        <CustomInputField
          icon={Icon.ACCOUNT}
          placeholder="Email"
          placeholderTextColor={color.TEXT}
          keyboardType="email-address"
        />
        <CustomInputField
          icon={Icon.LOCK}
          placeholder="Password"
          placeholderTextColor={color.TEXT}
          secureTextEntry={true}
        />
      </KeyboardAvoidingView>

      {/* FORGET PASSWORD */}
      <Pressable style={styles.forgotCon(reversed)}>
        <Text
          onPress={() => navigation.navigate('ForgetPasswordScreen')}
          style={[GlobalStyle.TEXT_STYLE, styles.forgotTxt]}>
          Forget password?
        </Text>
      </Pressable>

      {/* OR SECTION*/}
      <View style={styles.orView}>
        <View style={styles.line} />
        <Text style={{color: color.PRIMARY}}>OR</Text>
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
        <Text style={[GlobalStyle.TEXT_STYLE, styles.txt4]}>SIGN IN</Text>
      </TouchableOpacity>

      {/*SIGN UP BUTTON*/}
      <View style={styles.lastCon(reversed)}>
        <Text style={[GlobalStyle.TEXT_STYLE, styles.lastTxt]}>
          {' '}
          Don't have an account?{' '}
        </Text>
        <Text
          onPress={() => navigation.navigate('SignUpScreen')}
          style={[styles.lastTxt, {color: color.PRIMARY}]}>
          Sign up
        </Text>
      </View>
      {animation ? <AnimatedLogoSigInScreen /> : <NormalLogoSigInScreen />}
    </SafeAreaView>
  );
};

export default SignIn;
