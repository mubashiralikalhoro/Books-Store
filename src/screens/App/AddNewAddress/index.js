import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './style';
import {useSelector, useDispatch} from 'react-redux';
import GlobalStyle from '../../../constants/GlobalStyle';
import {Formik} from 'formik';
import ViewProfileInputField from '../../../components/ViewProfileInputField';
import * as Yup from 'yup';
import {userUpdate} from '../../../store/reducer/user';
import Header from '../../../components/Header';

const AddNewAddressScreen = ({setMainScreen, navigation}) => {
  const user = useSelector(state => state.user[0]);
  const dispatch = useDispatch();
  const strings = useSelector(state => state.resources.langID.strings);
  const schema = Yup.object().shape({
    address: Yup.string().min(5, strings.TOO_SHORT).required(strings.REQUIRED),
  });
  return (
    <>
      <Header title={strings.ADD_NEW_ADDRESS} />
      <View style={styles.container}>
        <ViewProfileInputField
          title={strings.YOUR_ADDRESS}
          value={user.address}
          editable={false}
        />
        <Formik
          initialValues={{...user, address: ''}}
          validationSchema={schema}
          onSubmit={values => {
            dispatch(userUpdate(values));
            navigation.goBack();
          }}>
          {({
            handleBlur,
            handleChange,
            handleSubmit,
            errors,
            touched,
            values,
          }) => (
            <>
              <ViewProfileInputField
                title={strings.NEW_ADDRESS}
                placeholder={strings.ENTER_NEW_ADDRESS}
                value={values.address}
                onChangeText={handleChange('address')}
                onBlur={handleBlur('address')}
                error={touched.address && errors.address}
              />
              <TouchableOpacity onPress={handleSubmit}>
                <View style={styles.buttonView}>
                  <Text style={[GlobalStyle.TEXT_STYLE, styles.text]}>
                    {strings.SUBMIT}
                  </Text>
                </View>
              </TouchableOpacity>
            </>
          )}
        </Formik>
      </View>
    </>
  );
};

export default AddNewAddressScreen;
