import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styles from './styte';
import {Formik} from 'formik';
import CustomInputField from '../../../components/CustomInputField';
import Icons from '../../../assets/Icons';
import color from '../../../constants/color';
import * as Yup from 'yup';
import GlobalStyle from '../../../constants/GlobalStyle';

const initialValues = {name: '', email: '', message: ''};
const schema = Yup.object().shape({
  name: Yup.string().min(3, '*Too short').required('*Required'),
  email: Yup.string().email('*Invalid email').required('*Required'),
  message: Yup.string().required('*Required'),
});
const ContactUsScreen = () => {
  return (
    <View style={styles.container}>
      <Formik initialValues={initialValues} validationSchema={schema}>
        {({handleChange, handleBlur, handleSubmit, touched, errors}) => (
          <>
            <CustomInputField
              icon={Icons.ACCOUNT}
              style={styles.inputField}
              placeholder="Name"
              placeholderTextColor={color.TEXT}
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              error={touched.name && errors.name}
            />
            <CustomInputField
              icon={Icons.EMAIL}
              style={styles.inputField}
              placeholder="Email"
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
              placeholder="Message"
              placeholderTextColor={color.TEXT}
              onChangeText={handleChange('message')}
              onBlur={handleBlur('message')}
              error={touched.message && errors.message}
              multiline={true}
            />
            <TouchableOpacity onPress={handleSubmit}>
              <View style={styles.buttonView}>
                <Text style={[GlobalStyle.TEXT_STYLE, styles.text]}>Send</Text>
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
