import {View, Text, StyleSheet, Platform, TouchableOpacity} from 'react-native';
import React from 'react';
import Size from '../constants/Size';
import color from '../constants/color';
import GlobalStyle from '../constants/GlobalStyle';
import {useSelector} from 'react-redux';

const CartScreenFooter = ({cartData, onPress, title, getTotalPrice}) => {
  const strings = useSelector(state => state.resources.langID.strings);

  const getTotalItem = () => {
    return cartData.length;
  };
  return (
    <View style={styles.container}>
      <View style={styles.totalView}>
        <Text style={[GlobalStyle.TEXT_STYLE, styles.textCartItem]}>
          {getTotalItem()} {getTotalItem() == 1 ? strings.ITEM : strings.ITEMS}
        </Text>
      </View>
      <View style={styles.totalView}>
        <Text style={[GlobalStyle.TEXT_STYLE, styles.text]}>
          {strings.SUB_TOTAL}
        </Text>
        <Text style={[GlobalStyle.TEXT_STYLE, styles.text]}>
          $ {getTotalPrice()}
        </Text>
      </View>
      <View style={styles.divider}></View>
      <View style={{flex: 1}} />
      <TouchableOpacity style={styles.checkOutView} onPress={onPress}>
        <Text style={[GlobalStyle.TEXT_STYLE, styles.checkOut]}>{title}</Text>
      </TouchableOpacity>
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
    borderWidth: color.isDark && Platform.OS == 'android' ? 0.5 : 0,
    borderColor: color.GRAY,
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
    fontSize: Size.WIDTH * 0.05,
    color: color.PRIMARY_TEXT,
  },
  checkOutView: {
    paddingVertical: Size.PADDING,
    minHeight: Size.ICON / 2,
    marginBottom: Size.ICON,
    width: Size.WIDTH * 0.7,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Size.FONTSIZE * 4,
    backgroundColor: color.PRIMARY,
  },
  divider: {
    width: Size.WIDTH * 0.8,
    height: 0.5,
    backgroundColor: color.GRAY,
  },
});
