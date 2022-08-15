import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import CustomInputField from '../../../components/CustomInputField';
import Icons from '../../../assets/Icons';
import color from '../../../constants/color';
import GlobalStyle from '../../../constants/GlobalStyle';
import {useSelector} from 'react-redux';
import Header from '../../../components/Header';

const PasswordVerificationScreen = ({navigation}) => {
  const strings = useSelector(state => state.resources.langID.strings);
  const [password, setPassword] = useState('');
  const verify = () => {
    navigation.replace('ViewProfileScreen', {editable: true});
  };
  return (
    <>
      <Header title={strings.PASSWORD} />
      <View style={styles.container}>
        <View style={{flex: 1}} />
        <View>
          <CustomInputField
            icon={Icons.LOCK_OPENED}
            style={styles.inputField}
            placeholder={strings.ENTER_YOUR_PASSWORD}
            placeholderTextColor={color.TEXT}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={verify}>
            <View style={styles.buttonView}>
              <Text style={[GlobalStyle.TEXT_STYLE, styles.text]}>
                {strings.VERIFY}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1}} />
      </View>
    </>
  );
};

export default PasswordVerificationScreen;
