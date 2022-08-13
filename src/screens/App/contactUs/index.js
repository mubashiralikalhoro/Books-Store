import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styles from './style';
import {Formik} from 'formik';
import CustomInputField from '../../../components/CustomInputField';
import Icons from '../../../assets/Icons';
import color from '../../../constants/color';
import * as Yup from 'yup';
import GlobalStyle from '../../../constants/GlobalStyle';
import {useSelector} from 'react-redux';

const initialValues = {name: '', email: '', message: ''};
const ContactUsScreen = () => {
  const strings = useSelector(state => state.resources.langID.strings);
  // validation
  const schema = Yup.object().shape({
    name: Yup.string().min(3, strings.TOO_SHORT).required(strings.REQUIRED),
    email: Yup.string().email(strings.INVALID_INPUT).required(strings.REQUIRED),
    message: Yup.string().required(strings.REQUIRED),
  });
  return (
    <View style={styles.container}>
      <Formik initialValues={initialValues} validationSchema={schema}>
        {({handleChange, handleBlur, handleSubmit, touched, errors}) => (
          <>
            <CustomInputField
              icon={Icons.ACCOUNT}
              style={styles.inputField}
              placeholder={strings.NAME}
              placeholderTextColor={color.TEXT}
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              error={touched.name && errors.name}
            />
            <CustomInputField
              icon={Icons.EMAIL}
              style={styles.inputField}
              placeholder={strings.EMAIL}
              placeholderTextColor={color.TEXT}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              error={touched.email && errors.email}
            />
            <CustomInputField
              icon={Icons.MESSAGE}
              style={styles.messageField}
              inputStyle={styles.messageInputField}
              iconStyle={styles.messageIcon}
              placeholder={strings.MESSAGE}
              placeholderTextColor={color.TEXT}
              onChangeText={handleChange('message')}
              onBlur={handleBlur('message')}
              error={touched.message && errors.message}
              multiline={true}
            />
            <TouchableOpacity onPress={handleSubmit}>
              <View style={styles.buttonView}>
                <Text style={[GlobalStyle.TEXT_STYLE, styles.text]}>
                  {strings.SEND}
                </Text>
              </View>
            </TouchableOpacity>
          </>
        )}
      </Formik>
      <View style={styles.bottom}>
        <Image source={Icons.EMAIL} style={styles.bottomIcon} />
        <Text style={[GlobalStyle.TEXT_STYLE]}>company@email.com</Text>
      </View>
    </View>
  );
};

export default ContactUsScreen;
