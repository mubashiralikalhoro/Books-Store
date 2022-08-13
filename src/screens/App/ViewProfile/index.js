import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import ViewProfileInputField from '../../../components/ViewProfileInputField';
import {useDispatch, useSelector} from 'react-redux';
import GlobalStyle from '../../../constants/GlobalStyle';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {userUpdate} from '../../../store/reducer/user';

//validation
const schema = Yup.object().shape({
  name: Yup.string().min(3, '*Short name').required('*Required'),
  email: Yup.string().email('*Invalid email').required('*Required'),
  phoneNo: Yup.number('*Invalid').min(10, '*Invalid').required('*Required'),
});

const ViewProfileScreen = ({
  edit = false,
  setMainScreen,
  setScreen,
  setEditableImage,
  pickedImage,
  setPickedImage,
}) => {
  const dispatch = useDispatch();
  const [editable, setEditable] = useState(edit);
  const user = useSelector(state => state.user[0]);
  const buttonPressed = () => {
    setScreen('passwordVerification');
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={user}
        validationSchema={schema}
        onSubmit={values => {
          if (pickedImage) {
            setPickedImage(false);
            dispatch(userUpdate({...values, image: pickedImage}));
          } else {
            dispatch(userUpdate(values));
          }
          setEditableImage(false);
          setMainScreen();
        }}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          errors,
          values,
          touched,
        }) => (
          <>
            <ViewProfileInputField
              title={'Name'}
              editable={editable}
              value={values.name}
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              error={touched.name && errors.name}
            />
            <ViewProfileInputField
              title={'Email'}
              editable={editable}
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              error={touched.email && errors.email}
            />
            <ViewProfileInputField
              title={'Phone No'}
              editable={editable}
              value={values.phoneNo}
              onChangeText={handleChange('phoneNo')}
              onBlur={handleBlur('phoneNo')}
              error={touched.phoneNo && errors.phoneNo}
            />
            <TouchableOpacity onPress={editable ? handleSubmit : buttonPressed}>
              <View style={styles.buttonView}>
                <Text style={[GlobalStyle.TEXT_STYLE, styles.text]}>
                  {editable ? 'Save' : 'Edit'}
                </Text>
              </View>
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </View>
  );
};

export default ViewProfileScreen;
