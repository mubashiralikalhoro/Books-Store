import {View, Text, ScrollView, SafeAreaView, Image, Alert} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import CartScreenFooter from '../../../components/CartScreenFooter';
import CartItem from '../../../components/CartItem';
import Size from '../../../constants/Size';
import color from '../../../constants/color';
import Icons from '../../../assets/Icons';
import GlobalStyle from '../../../constants/GlobalStyle';
import {useSelector, useDispatch} from 'react-redux';
import PaymentScreen from '../Paymet';
import {useNavigation} from '@react-navigation/native';
import {clearCart} from '../../../store/reducer/cart';
import {addNotification} from '../../../store/reducer/notification';

const NoItems = () => {
  const strings = useSelector(state => state.resources.langID.strings);
  return (
    <View style={{alignItems: 'center', marginTop: Size.PADDING * 2}}>
      <Image
        source={Icons.CART}
        style={{height: Size.ICON, width: Size.ICON, tintColor: color.TEXT}}
      />
      <Text style={[GlobalStyle.TEXT_STYLE, {marginTop: Size.PADDING}]}>
        {strings.NO_ITEMS_IN_CART}
      </Text>
    </View>
  );
};

const CartScreen = () => {
  const navigation = useNavigation();
  const strings = useSelector(state => state.resources.langID.strings);
  const cartData = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const [paymentScreen, setPaymentScreen] = useState(false);
  const checkOut = () => {
    if (cartData.length > 0) {
      setPaymentScreen(true);
    }
  };
  const continueShopping = () => {
    dispatch(clearCart());
    setPaymentScreen(false);
    dispatch(
      addNotification({
        image: Icons.ORDER_PLACED,
        text: strings._ADD_NOTIFICATION,
        time: new Date().toISOString(),
      }),
    );
    navigation.navigate('BottomNavigator', {screen: 'HomeScreen'});
  };

  const placeOrder = () => {
    Alert.alert(
      strings.ORDER_PLACED,
      strings._ORDER_PLACED_STRING +
        '\nTRX' +
        (Math.random() * 999999).toFixed() +
        '.',
      [{text: strings.CONTINUE_SHOPPING, onPress: continueShopping}],
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {cartData.length > 0 ? (
        paymentScreen ? (
          <>
            <PaymentScreen />
            <CartScreenFooter
              cartData={cartData}
              onPress={placeOrder}
              title={strings.PLACE_ORDER}
            />
          </>
        ) : (
          <>
            <Text style={styles.myCart}>{strings.MY_CART}</Text>
            <ScrollView>
              {cartData.map((item, index) => (
                <CartItem
                  book={item.book}
                  numberOfItems={item.noOfItems}
                  key={index}
                />
              ))}
            </ScrollView>
            <CartScreenFooter
              cartData={cartData}
              onPress={checkOut}
              title={strings.CHECK_OUT}
            />
          </>
        )
      ) : (
        <NoItems />
      )}
    </SafeAreaView>
  );
};

export default CartScreen;
