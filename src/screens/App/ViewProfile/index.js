import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import ViewProfileInputField from '../../../components/ViewProfileInputField';
import {useDispatch, useSelector} from 'react-redux';
import GlobalStyle from '../../../constants/GlobalStyle';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {userUpdate} from '../../../store/reducer/user';

const ViewProfileScreen = ({
  edit = false,
  setMainScreen,
  setScreen,
  setEditableImage,
  pickedImage,
  setPickedImage,
}) => {
  const strings = useSelector(state => state.resources.langID.strings);
  const dispatch = useDispatch();
  const [editable, setEditable] = useState(edit);
  const user = useSelector(state => state.user[0]);
  const buttonPressed = () => {
    setScreen('passwordVerification');
  };

  //validation
  const schema = Yup.object().shape({
    name: Yup.string().min(3, strings.TOO_SHORT).required(strings.REQUIRED),
    email: Yup.string().email(strings.INVALID_INPUT).required(strings.REQUIRED),
    phoneNo: Yup.number(strings.INVALID_INPUT)
      .min(10, strings.INVALID_INPUT)
      .required(strings.REQUIRED),
  });
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
              title={strings.NAME}
              editable={editable}
              value={values.name}
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              error={touched.name && errors.name}
            />
            <ViewProfileInputField
              title={strings.EMAIL}
              editable={editable}
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              error={touched.email && errors.email}
            />
            <ViewProfileInputField
              title={strings.PHONE_NUMBER}
              editable={editable}
              value={values.phoneNo}
              onChangeText={handleChange('phoneNo')}
              onBlur={handleBlur('phoneNo')}
              error={touched.phoneNo && errors.phoneNo}
            />
            <TouchableOpacity onPress={editable ? handleSubmit : buttonPressed}>
              <View style={styles.buttonView}>
                <Text style={[GlobalStyle.TEXT_STYLE, styles.text]}>
                  {editable ? strings.SAVE : strings.EDIT}
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
