import React from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';

import styles from './style';
import Size from '../../../constants/Size';
import color from '../../../constants/color';
import Icon from '../../../assets/Icons/index';
import GlobalStyle from '../../../constants/GlobalStyle';
import CustomInputField from '../../../components/CustomInputField';
import Icons from '../../../assets/Icons/index';
import * as Yup from 'yup';
import {Formik} from 'formik';
import {useSelector} from 'react-redux';

// Validation
let schema = Yup.object().shape({
  fullName: Yup.string()
    .min(3, '*Name is too small')
    .trim()
    .required('*Required'),
  email: Yup.string().email('*Email').required('*Required'),
  password: Yup.string().min(8, '*Short password').required('*Required'),
  confirmPassword: Yup.string()
    .equals([Yup.ref('password'), null], '*Passwords must match')
    .required('*Required'),
});

// initial State for the form
let initialState = {
  fullName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUp = ({navigation}) => {
  const onSubmit = values => {
    navigation.navigate('BottomNavigator');
  };
  const reversed = useSelector(state => state.resources.langID.reversed);
  return (
    <SafeAreaView style={styles.container}>
      {/* Header Section*/}
      <View style={{minHeight: Size.HEIGHT * 0.2}}>
        <Image source={Icons.LOGO} style={styles.logo} />
      </View>
      <View style={styles.welcomeCon(reversed)}>
        <Text style={[GlobalStyle.TEXT_STYLE, {color: color.GRAY}]}>
          Welcome
        </Text>
        <Text style={styles.txt3}>Create an account to continue : )</Text>
      </View>

      {/* InputField*/}
      <KeyboardAvoidingView style={{marginTop: Size.PADDING}}>
        <Formik
          initialValues={initialState}
          onSubmit={onSubmit}
          validationSchema={schema}>
          {({
            handleChange,
            values,
            handleBlur,
            handleSubmit,
            errors,
            touched,
          }) => (
            <>
              <CustomInputField
                icon={Icon.ACCOUNT}
                placeholder="Full name"
                onChangeText={handleChange('fullName')}
                onBlur={handleBlur('fullName')}
                placeholderTextColor={color.TEXT}
                value={values.fullName}
                error={touched.fullName && errors.fullName}
              />
              <CustomInputField
                icon={Icon.EMAIL}
                placeholder="Email"
                placeholderTextColor={color.TEXT}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                keyboardType="email-address"
                value={values.email}
                error={touched.fullName && errors.email}
              />
              <CustomInputField
                icon={Icon.LOCK}
                placeholder="Password"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                placeholderTextColor={color.TEXT}
                secureTextEntry={true}
                value={values.password}
                error={touched.password && errors.password}
              />
              <CustomInputField
                icon={Icon.CONFIRM}
                placeholder="Confirm password"
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                placeholderTextColor={color.TEXT}
                secureTextEntry={true}
                value={values.confirmPassword}
                error={touched.password && errors.confirmPassword}
              />
              {/*SIGN IN BUTTON*/}
              <TouchableOpacity onPress={handleSubmit} style={styles.signInCon}>
                <Text style={[GlobalStyle.TEXT_STYLE, styles.txt4]}>
                  SIGN UP
                </Text>
              </TouchableOpacity>
            </>
          )}
        </Formik>
      </KeyboardAvoidingView>

      {/*SIGN IN BUTTON*/}
      <View style={styles.lastCon(reversed)}>
        <Text style={[GlobalStyle.TEXT_STYLE, styles.lastTxt]}>
          {' '}
          Already have an account?{' '}
        </Text>
        <Text
          onPress={() => navigation.navigate('SignInScreen')}
          style={[styles.lastTxt, {color: color.PRIMARY}]}>
          Sign in
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
