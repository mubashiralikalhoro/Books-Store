import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import Size from '../constants/Size';
import GlobalStyle from '../constants/GlobalStyle';
import color from '../constants/color';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import {useNavigation} from '@react-navigation/native';

const OrderScreenBook = ({book, noOfBooks = 1}) => {
  const navigation = useNavigation();
  const openBook = () => {
    navigation.navigate('BookDetailsScreen', book);
  };
  return (
    <Pressable onPress={openBook}>
      <View style={styles.container}>
        <Text style={GlobalStyle.TEXT_STYLE}>
          {noOfBooks}
          {'x'}
          {'\t\t'}
          {book.bookName}
        </Text>
        <Text style={GlobalStyle.TEXT_STYLE}>${book.price * noOfBooks}</Text>
      </View>
    </Pressable>
  );
};

export default OrderScreenBook;
const styles = StyleSheet.create({
  container: {
    marginRight: Size.PADDING,
    minWidth: Size.ICON * 1.2,
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 2,
    justifyContent: 'space-between',
  },
  coverStyle: {
    height: Size.ICON * 1.8,
    width: Size.ICON * 1.3,
    borderRadius: Size.BORDER_RADIUS,
  },
});
