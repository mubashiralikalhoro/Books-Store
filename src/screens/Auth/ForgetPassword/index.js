import {View, Text, SafeAreaView, Alert, Pressable} from 'react-native';
import styles from './style';
import React from 'react';
import Header from '../../../components/Header';
import Size from '../../../constants/Size';
import CustomInputField from '../../../components/CustomInputField';
import Icons from '../../../assets/Icons';
import color from '../../../constants/color';
import GlobalStyle from '../../../constants/GlobalStyle';

const ForgetPassword = ({navigation}) => {
  const navigate = () => {
    navigation.goBack();
  };
  const getMail = () => {
    Alert.alert('Sent!', 'Recovery mail has been send check your inbox', [
      {text: 'Ok', onPress: navigate},
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Forget password" />
      <View style={styles.mainView}>
        <View style={styles.outerView}>
          <CustomInputField
            icon={Icons.ACCOUNT}
            style={styles.inputField}
            placeholder="Username"
            placeholderTextColor={color.TEXT}
          />
          <CustomInputField
            icon={Icons.EMAIL}
            style={styles.inputField}
            placeholder="Email"
            placeholderTextColor={color.TEXT}
          />
          <Pressable onPress={getMail}>
            <View style={styles.buttonView}>
              <Text style={[GlobalStyle.TEXT_STYLE, styles.text]}>
                Get recovery email
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
