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
import englishStrings from '../../../constants/englishStrings';

// initial State for the form
let initialState = {
  fullName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUp = ({navigation}) => {
  const strings = useSelector(state => state.resources.langID.strings);
  const onSubmit = values => {
    navigation.navigate('BottomNavigator');
  };
  const reversed = useSelector(state => state.resources.langID.reversed);
  // Validation
  let schema = Yup.object().shape({
    fullName: Yup.string()
      .min(3, strings.NAME_IS_TO_SMALL)
      .trim()
      .required(strings.REQUIRED),
    email: Yup.string()
      .email('*' + strings.EMAIL)
      .required(strings.REQUIRED),
    password: Yup.string()
      .min(8, strings.SHORT_PASSWORD)
      .required(strings.REQUIRED),
    confirmPassword: Yup.string()
      .equals([Yup.ref('password'), null], strings.PASSWORD_MUST_MATCH)
      .required(strings.REQUIRED),
  });
  return (
    <SafeAreaView style={styles.container}>
      {/* Header Section*/}
      <View style={{minHeight: Size.HEIGHT * 0.2}}>
        <Image source={Icons.LOGO} style={styles.logo} />
      </View>
      <View style={styles.welcomeCon(reversed)}>
        <Text style={[GlobalStyle.TEXT_STYLE, {color: color.GRAY}]}>
          {strings.WELCOME}
        </Text>
        <Text style={styles.txt3}>{strings.CREATE_AN}</Text>
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
                placeholder={strings.FULL_NAME}
                onChangeText={handleChange('fullName')}
                onBlur={handleBlur('fullName')}
                placeholderTextColor={color.TEXT}
                value={values.fullName}
                error={touched.fullName && errors.fullName}
              />
              <CustomInputField
                icon={Icon.EMAIL}
                placeholder={strings.EMAIL}
                placeholderTextColor={color.TEXT}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                keyboardType="email-address"
                value={values.email}
                error={touched.fullName && errors.email}
              />
              <CustomInputField
                icon={Icon.LOCK}
                placeholder={strings.PASSWORD}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                placeholderTextColor={color.TEXT}
                secureTextEntry={true}
                value={values.password}
                error={touched.password && errors.password}
              />
              <CustomInputField
                icon={Icon.CONFIRM}
                placeholder={strings.CONFiRM_PASSWORD}
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
                  {strings.SIGN_UP_ALL_CAPS}
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
          {strings.ALREADY_HAVE}{' '}
        </Text>
        <Text
          onPress={() => navigation.navigate('SignInScreen')}
          style={[styles.lastTxt, {color: color.PRIMARY}]}>
          {strings.SIGN_IN}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
