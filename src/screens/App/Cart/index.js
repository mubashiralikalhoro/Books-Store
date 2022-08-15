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
import {addOrder} from '../../../store/reducer/myOrders';

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
  const isUser = useSelector(state => state.user).length > 0;
  const [paymentScreen, setPaymentScreen] = useState(false);
  const checkOut = () => {
    if (isUser) {
      if (cartData.length > 0) {
        setPaymentScreen(true);
      }
    } else {
      Alert.alert(strings.SIGN_IN, strings._YOU_HAVE_TO, [
        {
          text: strings.OK,
          onPress: () => {
            navigation.navigate('SignInScreen');
          },
        },
      ]);
    }
  };

  const getTotalPrice = () => {
    let total = 0.0;
    cartData.forEach(element => {
      total += element.noOfItems * element.book.price;
    });
    return total;
  };

  const continueShopping = () => {
    setPaymentScreen(false);
    dispatch(
      addNotification({
        image: Icons.ORDER_PLACED,
        text: strings._ADD_NOTIFICATION,
        time: new Date().toISOString(),
      }),
    );
    dispatch(addOrder({books: cartData, price: getTotalPrice()}));
    navigation.navigate('BottomNavigator', {screen: 'HomeScreen'});
    dispatch(clearCart());
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
              getTotalPrice={getTotalPrice}
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
              getTotalPrice={getTotalPrice}
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
