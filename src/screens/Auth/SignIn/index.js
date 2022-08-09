import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import {
  SafeAreaView,
  Text,
  Image,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
  Dimensions,
} from 'react-native';

import styles from './style';
import Size from '../../../constants/Size';
import color from '../../../constants/color';
import Icon from '../../../assets/Icons/index';
import GlobalStyle from '../../../constants/GlobalStyle';
import CustomInputField from '../../../components/CustomInputField';
import AnimatedLogoSigInScreen from '../../../components/AnimatedLogoSignInScreen';

const SignIn = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header Section*/}
      <View style={styles.logo} />
      <View style={styles.welcomeCon}>
        <Text style={[GlobalStyle.TEXT_STYLE, {color: color.GRAY}]}>
          Welcome Back
        </Text>
        <Text style={styles.txt3}>
          Log in to your existing account of BookStore
        </Text>
      </View>

      {/* InputField*/}
      <KeyboardAvoidingView style={{marginTop: Size.HEIGHT * 0.05}}>
        <CustomInputField
          icon={Icon.ACCOUNT}
          placeholder="Email"
          placeholderTextColor={color.PRIMARY_TEXT}
        />
        <CustomInputField
          icon={Icon.LOCK}
          placeholder="Password"
          placeholderTextColor={color.PRIMARY_TEXT}
          secureTextEntry={true}
        />
      </KeyboardAvoidingView>

      {/* FORGET PASSWORD */}
      <Pressable style={styles.forgotCon}>
        <Text
          onPress={() => navigation.navigate('ForgotPassword')}
          style={[GlobalStyle.TEXT_STYLE, styles.forgotTxt]}>
          Forget Password ?
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
      <TouchableOpacity
        onPress={() => navigation.navigate('BottomNavigator')}
        style={styles.signInCon}>
        <Text style={styles.txt4}>SIGN IN</Text>
      </TouchableOpacity>

      {/*SIGN UP BUTTON*/}
      <View style={styles.lastCon}>
        <Text style={styles.lastTxt}>
          Don't have an account?{' '}
          <Text
            onPress={() => navigation.navigate('Signup')}
            style={{color: color.PRIMARY}}>
            Sign up
          </Text>
        </Text>
      </View>
      <AnimatedLogoSigInScreen />
    </SafeAreaView>
  );
};

export default SignIn;
