import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import Icons from '../assets/Icons';
import Size from '../constants/Size';
import color from '../constants/color';
import GlobalStyle from '../constants/GlobalStyle';

const CartItem = ({book}) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerMain}>
        <Image
          source={book.bookCover}
          style={styles.image}
          resizeMode="stretch"
        />
        <View style={styles.disView}>
          <Text style={[GlobalStyle.TEXT_STYLE, styles.name]}>
            {book.bookName}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    marginVertical: Size.WIDTH * 0.9 * 0.1,
    width: Size.WIDTH,
    height: Size.ICON * 1.8,
    alignItems: 'center',
  },
  containerMain: {
    flexDirection: 'row',
    width: Size.WIDTH * 0.9,
    height: Size.ICON * 1.8,
    borderRadius: (Size.ICON * 1.8) / 6,
    backgroundColor: color.BACKGROUND,
    shadowColor: color.TEXT,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  image: {
    height: Size.ICON * 1.8,
    width: Size.ICON * 1.3,
    borderTopLeftRadius: (Size.ICON * 1.8) / 6,
    borderBottomLeftRadius: (Size.ICON * 1.8) / 6,
  },
  disView: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: Size.PADDING,
  },
});
