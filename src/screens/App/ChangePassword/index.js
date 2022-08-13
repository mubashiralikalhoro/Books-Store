import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './style';
import {Formik} from 'formik';
import CustomInputField from '../../../components/CustomInputField';
import Icons from '../../../assets/Icons';
import color from '../../../constants/color';
import * as Yup from 'yup';
import GlobalStyle from '../../../constants/GlobalStyle';
import {useSelector} from 'react-redux';
const initialValues = {
  oldPassword: '',
  newPassword: '',
  confirmNewPassword: '',
};

const ChangePasswordScreen = () => {
  const strings = useSelector(state => state.resources.langID.strings);
  const validationSchema = Yup.object().shape({
    oldPassword: Yup.string().required(strings.REQUIRED),
    newPassword: Yup.string()
      .min(8, strings.SHORT_PASSWORD)
      .required(strings.REQUIRED),
    confirmNewPassword: Yup.string()
      .equals([Yup.ref('newPassword'), null], strings.PASSWORD_MUST_MATCH)
      .required(strings.REQUIRED),
  });
  return (
    <View style={styles.container}>
      <View style={{flex: 1}} />
      <Formik initialValues={initialValues} validationSchema={validationSchema}>
        {({handleBlur, handleChange, handleSubmit, errors, touched}) => (
          <View>
            <CustomInputField
              icon={Icons.LOCK_OPENED}
              style={styles.inputField}
              placeholder={strings.OLD_PASSWORD}
              placeholderTextColor={color.TEXT}
              onChangeText={handleChange('oldPassword')}
              onBlur={handleBlur('oldPassword')}
              error={touched.oldPassword && errors.oldPassword}
            />
            <CustomInputField
              icon={Icons.LOCK}
              style={styles.inputField}
              placeholder={strings.NEW_PASSWORD}
              placeholderTextColor={color.TEXT}
              onChangeText={handleChange('newPassword')}
              onBlur={handleBlur('newPassword')}
              error={touched.newPassword && errors.newPassword}
            />
            <CustomInputField
              icon={Icons.CONFIRM}
              style={styles.inputField}
              placeholder={strings.CONFIRM_NEW_PASSWORD}
              placeholderTextColor={color.TEXT}
              onChangeText={handleChange('confirmNewPassword')}
              onBlur={handleBlur('confirmNewPassword')}
              error={touched.confirmNewPassword && errors.confirmNewPassword}
            />
            <TouchableOpacity onPress={handleSubmit}>
              <View style={styles.buttonView}>
                <Text style={[GlobalStyle.TEXT_STYLE, styles.text]}>
                  {strings.SUBMIT}
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
