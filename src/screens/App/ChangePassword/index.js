import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './style';
import {Formik} from 'formik';
import CustomInputField from '../../../components/CustomInputField';
import Icons from '../../../assets/Icons';
import color from '../../../constants/color';
import * as Yup from 'yup';
import Header from '../../../components/Header';
import GlobalStyle from '../../../constants/GlobalStyle';
const initialValues = {
  oldPassword: '',
  newPassword: '',
  confirmNewPassword: '',
};

const validationSchema = Yup.object().shape({
  oldPassword: Yup.string().required('*Required'),
  newPassword: Yup.string().min(8, '*Short password').required('*Required'),
  confirmNewPassword: Yup.string()
    .equals([Yup.ref('newPassword'), null], "*Passwords don't match")
    .required('*Required'),
});

const ChangePasswordScreen = () => {
  return (
    <View style={styles.container}>
      <View style={{flex: 1}} />
      <Formik initialValues={initialValues} validationSchema={validationSchema}>
        {({handleBlur, handleChange, handleSubmit, errors, touched}) => (
          <View>
            <CustomInputField
              icon={Icons.LOCK_OPENED}
              style={styles.inputField}
              placeholder="old password"
              placeholderTextColor={color.TEXT}
              onChangeText={handleChange('oldPassword')}
              onBlur={handleBlur('oldPassword')}
              error={touched.oldPassword && errors.oldPassword}
            />
            <CustomInputField
              icon={Icons.LOCK}
              style={styles.inputField}
              placeholder="new password"
              placeholderTextColor={color.TEXT}
              onChangeText={handleChange('newPassword')}
              onBlur={handleBlur('newPassword')}
              error={touched.newPassword && errors.newPassword}
            />
            <CustomInputField
              icon={Icons.CONFIRM}
              style={styles.inputField}
              placeholder="confirm new password"
              placeholderTextColor={color.TEXT}
              onChangeText={handleChange('confirmNewPassword')}
              onBlur={handleBlur('confirmNewPassword')}
              error={touched.confirmNewPassword && errors.confirmNewPassword}
            />
            <TouchableOpacity onPress={handleSubmit}>
              <View style={styles.buttonView}>
                <Text style={[GlobalStyle.TEXT_STYLE, styles.text]}>
                  Submit
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
      <View style={{flex: 1}} />
    </View>
  );
};

export default ChangePasswordScreen;
