import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import styles from './styles';
import SelectOption from '../../../components/SelectOption';
import {useState} from 'react';
import english from '../../../constants/languages/english';
import {useSelector} from 'react-redux';
import CustomInputField from '../../../components/CustomInputField';
import Icons from '../../../assets/Icons';
import Size from '../../../constants/Size';

const PaymentScreen = () => {
  const [paymentMethod, setPaymentMethod] = useState(false);
  const strings = useSelector(state => state.resources.langID.strings);
  const user = useSelector(state => state.user[0]);
  return (
    <>
      <Text style={styles.myCart}>{strings.VERIFY_YOUR_INFO}</Text>
      <ScrollView style={{flex: 1, marginTop: Size.PADDING}}>
        <View style={styles.container}>
          <CustomInputField
            style={[styles.input, {marginTop: 0}]}
            title={strings.NAME}
            value={user.name}
            icon={Icons.ACCOUNT}
            editable={true}
          />
          <CustomInputField
            style={styles.input}
            title={strings.PHONE_NUMBER}
            value={user.phoneNo}
            icon={Icons.PHONE}
            editable={true}
          />
          <CustomInputField
            style={styles.input}
            title={strings.YOUR_ADDRESS}
            value={user.address}
            icon={Icons.PIN}
            editable={true}
          />
          <Text style={styles.myCart}>{strings.SELECT_A_PAYMENT_METHOD}</Text>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: Size.WIDTH * 0.9,
            }}>
            <SelectOption
              Icon={Icons.CASH}
              title={strings.CASH_ON_DELIVERY}
              pressed={!paymentMethod}
              onPress={() => setPaymentMethod(false)}
            />
            <SelectOption
              Icon={Icons.CARD}
              title={strings.ONLINE_PAYMENT}
              pressed={paymentMethod}
              onPress={() => setPaymentMethod(true)}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default PaymentScreen;
