import {View, Text, StyleSheet, Platform} from 'react-native';
import React from 'react';
import Size from '../constants/Size';
import color from '../constants/color';
import GlobalStyle from '../constants/GlobalStyle';

const CartScreenFooter = ({cartData}) => {
  const getTotalPrice = () => {
    let total = 0.0;
    cartData.forEach(element => {
      total += element.price;
    });
    return total;
  };

  const getTotalItem = () => {
    return cartData.length;
  };
  return (
    <View style={styles.container}>
      <View style={styles.totalView}>
        <Text style={[GlobalStyle.TEXT_STYLE, styles.textCartItem]}>
          {getTotalItem() == 0 ? 'No' : getTotalItem()}{' '}
          {getTotalItem == 1 ? 'Item' : 'Items'} in cart
        </Text>
      </View>
      <View style={styles.totalView}>
        <Text style={[GlobalStyle.TEXT_STYLE, styles.text]}>Sub Total</Text>
        <Text style={[GlobalStyle.TEXT_STYLE, styles.text]}>
          $ {getTotalPrice()}
        </Text>
      </View>
      <View style={styles.divider}></View>
      <View style={{flex: 1}} />
      <View style={styles.checkOutView}>
        <Text style={[GlobalStyle.TEXT_STYLE, styles.checkOut]}>Check Out</Text>
      </View>
    </View>
  );
};

export default CartScreenFooter;

const styles = StyleSheet.create({
  container: {
    paddingTop: Size.PADDING,
    alignItems: 'center',
    backgroundColor: color.BACKGROUND,
    height: Size.HEIGHT * 0.25,
    width: Size.WIDTH * 0.95,
    borderTopLeftRadius: Size.BORDER_RADIUS * 6,
    borderTopRightRadius: Size.BORDER_RADIUS * 6,
    shadowColor: color.TEXT,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,

    elevation: 20,
  },
  totalView: {
    width: Size.WIDTH * 0.8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: Size.FONTSIZE + 1,
  },
  textCartItem: {
    marginBottom: Size.PADDING,
    fontSize: Size.FONTSIZE + 3,
  },
  checkOut: {
    fontSize: Size.FONTSIZE * 1.5,
    color: color.PRIMARY_TEXT,
  },
  checkOutView: {
    marginBottom: Size.ICON,
    width: Size.WIDTH * 0.7,
    justifyContent: 'center',
    alignItems: 'center',
    height: Size.FONTSIZE * 4,
    borderRadius: Size.FONTSIZE * 4,
    backgroundColor: color.PRIMARY,
  },
  divider: {
    width: Size.WIDTH * 0.8,
    height: 0.5,
    backgroundColor: color.GRAY,
  },
});
