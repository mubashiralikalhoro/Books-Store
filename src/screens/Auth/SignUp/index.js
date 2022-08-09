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

import styles from './style';
import Size from '../../../constants/Size';
import color from '../../../constants/color';
import Icon from '../../../assets/Icons/index';
import GlobalStyle from '../../../constants/GlobalStyle';
import CustomInputField from '../../../components/CustomInputField';
import AnimatedLogoSigInScreen from '../../../components/AnimatedLogoSignInScreen';
import Icons from '../../../assets/Icons/index';

const SignUp = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header Section*/}
      <Image source={Icons.LOGO} style={styles.logo} />
      <View style={styles.welcomeCon}>
        <Text style={[GlobalStyle.TEXT_STYLE, {color: color.GRAY}]}>
          Welcome
        </Text>
        <Text style={styles.txt3}>Create an account to continue : )</Text>
      </View>

      {/* InputField*/}
      <KeyboardAvoidingView style={{marginTop: Size.PADDING}}>
        <CustomInputField
          icon={Icon.ACCOUNT}
          placeholder="Full name"
          placeholderTextColor={color.TEXT}
        />
        <CustomInputField
          icon={Icon.EMAIL}
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
        <CustomInputField
          icon={Icon.CONFIRM}
          placeholder="Confirm password"
          placeholderTextColor={color.TEXT}
          secureTextEntry={true}
        />
      </KeyboardAvoidingView>

      {/*SIGN IN BUTTON*/}
      <TouchableOpacity
        onPress={() => navigation.navigate('BottomNavigator')}
        style={styles.signInCon}>
        <Text style={[GlobalStyle.TEXT_STYLE, styles.txt4]}>SIGN UP</Text>
      </TouchableOpacity>

      {/*SIGN UP BUTTON*/}
      <View style={styles.lastCon}>
        <Text style={[GlobalStyle.TEXT_STYLE, styles.lastTxt]}>
          Already have an account?{' '}
          <Text
            onPress={() => navigation.navigate('SignInScreen')}
            style={{color: color.PRIMARY}}>
            Sign in
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
