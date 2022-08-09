import {View, Text, ScrollView, SafeAreaView, Image} from 'react-native';
import React from 'react';
import styles from './style';
import CartScreenFooter from '../../../components/CartScreenFooter';
import {Cart} from '../../../dummy/data';
import CartItem from '../../../components/CartItem';
import Size from '../../../constants/Size';
import color from '../../../constants/color';
import Icons from '../../../assets/Icons';
import GlobalStyle from '../../../constants/GlobalStyle';

const NoItems = () => (
  <View style={{alignItems: 'center', marginTop: Size.PADDING * 2}}>
    <Image
      source={Icons.CART}
      style={{height: Size.ICON, width: Size.ICON, tintColor: color.TEXT}}
    />
    <Text style={[GlobalStyle.TEXT_STYLE, {marginTop: Size.PADDING}]}>
      No Items in cart
    </Text>
  </View>
);

const CartScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {Cart.length === 0 && <NoItems />}
      {Cart.length > 0 && (
        <>
          <ScrollView>
            {Cart.map((item, index) => (
              <CartItem book={item} key={index} />
            ))}
          </ScrollView>
          <CartScreenFooter cartData={Cart} />
        </>
      )}
    </SafeAreaView>
  );
};

export default CartScreen;
