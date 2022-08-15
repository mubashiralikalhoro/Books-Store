import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import Header from '../../../components/Header';
import {useSelector} from 'react-redux';
import Order from '../../../components/Order';
import Icons from '../../../assets/Icons';
import Size from '../../../constants/Size';
import color from '../../../constants/color';
import GlobalStyle from '../../../constants/GlobalStyle';

const NoItems = () => {
  const strings = useSelector(state => state.resources.langID.strings);
  return (
    <View style={{alignItems: 'center', marginTop: Size.PADDING * 2}}>
      <Image
        source={Icons.MY_ORDERS}
        style={{height: Size.ICON, width: Size.ICON, tintColor: color.TEXT}}
      />
      <Text style={[GlobalStyle.TEXT_STYLE, {marginTop: Size.PADDING}]}>
        {strings.NO} {strings.ITEMS}
      </Text>
    </View>
  );
};
const MyOrdersScreen = () => {
  const strings = useSelector(state => state.resources.langID.strings);
  const orders = useSelector(state => state.myOrders);
  return (
    <>
      <Header title={strings.MY_ORDERS} />
      <View style={styles.container}>
        {orders.length > 0 ? (
          orders.map((order, index) => <Order order={order} key={index} />)
        ) : (
          <NoItems />
        )}
      </View>
    </>
  );
};

export default MyOrdersScreen;
