import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import styles from './style';
import GlobalStyle from '../../../constants/GlobalStyle';
import CartScreenFooter from '../../../components/CartScreenFooter';
import {Cart} from '../../../dummy/data';
import Books from '../../../dummy/Books';

import CartItem from '../../../components/CartItem';
const CartScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.ScrollView}>
        <View style={{height: 100}} />
        <CartItem book={Books[0]} />
      </ScrollView>
      <CartScreenFooter cartData={Cart} />
    </View>
  );
};

export default CartScreen;
