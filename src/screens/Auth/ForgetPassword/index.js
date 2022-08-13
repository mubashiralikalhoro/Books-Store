import {View, Text, SafeAreaView, Alert, Pressable} from 'react-native';
import styles from './style';
import React from 'react';
import Header from '../../../components/Header';
import Size from '../../../constants/Size';
import CustomInputField from '../../../components/CustomInputField';
import Icons from '../../../assets/Icons';
import color from '../../../constants/color';
import GlobalStyle from '../../../constants/GlobalStyle';
import {useSelector} from 'react-redux';

const ForgetPassword = ({navigation}) => {
  const strings = useSelector(state => state.resources.langID.strings);
  //after submission
  const navigate = () => {
    navigation.goBack();
  };
  // onSubmit of the form
  const getMail = () => {
    Alert.alert(strings.SENT, strings.CHECK_YOUR_IN_BOX, [
      {text: strings.OK, onPress: navigate},
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title={strings.FORGET_PASSWORD_WITHOUT_QUESTION} />
      <View style={styles.mainView}>
        {/*Input Fields*/}
        <View style={styles.outerView}>
          <CustomInputField
            icon={Icons.ACCOUNT}
            style={styles.inputField}
            placeholder={strings.NAME}
            placeholderTextColor={color.TEXT}
          />
          <CustomInputField
            icon={Icons.EMAIL}
            style={styles.inputField}
            placeholder={strings.EMAIL}
            placeholderTextColor={color.TEXT}
          />
          {/*Submit Button*/}
          <Pressable onPress={getMail}>
            <View style={styles.buttonView}>
              <Text style={[GlobalStyle.TEXT_STYLE, styles.text]}>
                {strings.GET_RECOVERY_EMAIL}
              </Text>
            </View>
          </Pressable>
        </View>
        <View style={{height: Size.HEADER_FOOTER_SIZE}} />
      </View>
    </SafeAreaView>
  );
};

export default ForgetPassword;
