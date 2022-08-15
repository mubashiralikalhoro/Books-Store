import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import Size from '../constants/Size';
import GlobalStyle from '../constants/GlobalStyle';
import english from '../constants/languages/english';
import OrderScreenBook from './OrderScreenBook';
import color from '../constants/color';

const Order = ({order}) => {
  const strings = english;
  return (
    <View style={styles.container}>
      <View style={styles.textTop}>
        <Text style={[GlobalStyle.TEXT_STYLE, {fontWeight: '700'}]}>
          {order.date}
        </Text>
      </View>
      <View style={styles.booksView}>
        {order.books.map((item, index) => (
          <OrderScreenBook
            book={item.book}
            noOfBooks={item.noOfItems}
            key={index}
          />
        ))}
      </View>
      <View style={styles.textBottom}>
        <Text style={[GlobalStyle.TEXT_STYLE]}>{strings.SUB_TOTAL}</Text>

        <Text style={[GlobalStyle.TEXT_STYLE]}>
          {' $'}
          {order.price}
        </Text>
      </View>
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  container: {
    padding: Size.PADDING,
    width: Size.WIDTH * 0.95,
    minHeight: 100,
    marginTop: Size.PADDING,
    borderRadius: Size.BORDER_RADIUS,
    ...GlobalStyle.SHADOW_STYLE,
  },
  textTop: {
    alignSelf: 'flex-end',
    marginBottom: Size.PADDING,
    minWidth: Size.WIDTH * 0.22,
    width: Size.WIDTH * 0.25,
    alignItems: 'center',
    backgroundColor: color.LIGHT_GRAY,
    borderRadius: Size.BORDER_RADIUS,
    ...GlobalStyle.SHADOW_STYLE,
  },

  textBottom: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: Size.PADDING,
    paddingRight: Size.PADDING,
  },
});
