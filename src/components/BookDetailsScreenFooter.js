import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import Size from '../constants/Size';
import color from '../constants/color';
import Icons from '../assets/Icons';
import GlobalStyle from '../constants/GlobalStyle';
import {useNavigation} from '@react-navigation/native';
import {addItem, removeItem} from '../store/reducer/cart';
import {useDispatch, useSelector} from 'react-redux';
import {addFav, removeFav} from '../store/reducer/favorite';

const IconButton = ({icon, onPress, style, imageStyle}) => {
  const strings = useSelector(state => state.resources.langID.strings);
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={style}>
        <Image source={icon} style={imageStyle} />
      </View>
    </TouchableOpacity>
  );
};

const BookDetailsScreenFooter = ({book}) => {
  const strings = useSelector(state => state.resources.langID.strings);

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const searchBookInCart = () => {
    let r = false;
    state.cart.forEach(element => {
      if (element.book.bookId == book.bookId) {
        r = true;
      }
    });
    return r;
  };
  const heartImage = () => {
    let r = Icons.FAVORITE;
    state.fav.forEach(element => {
      if (element.bookId == book.bookId) {
        r = Icons.FAVORITE_SELECTED;
      }
    });
    return r;
  };

  const openCart = () => {
    if (!searchBookInCart()) {
      dispatch(addItem({noOfItems: 1, book: book}));
    }
    navigation.navigate('BottomNavigator', {screen: 'CartScreen'});
  };

  const heartPressed = () => {
    if (heartImage() === Icons.FAVORITE) {
      dispatch(addFav(book));
    } else {
      dispatch(removeFav(book));
    }
  };

  const cartPressed = () => {
    if (!searchBookInCart()) {
      dispatch(addItem({noOfItems: 1, book: book}));
    } else {
      dispatch(removeItem({book: book}));
    }
  };

  return (
    <View style={styles.container}>
      {/*Add to favorite*/}
      <IconButton
        icon={heartImage()}
        onPress={heartPressed}
        style={styles.iconView}
        imageStyle={[
          styles.iconStyle,
          heartImage() === Icons.FAVORITE ? {tintColor: color.TEXT} : {},
        ]}
      />
      {/*Add to cart*/}
      <TouchableOpacity onPress={cartPressed}>
        <View style={styles.addToCart}>
          <Text style={[GlobalStyle.TEXT_STYLE, styles.buyNowText]}>
            {searchBookInCart()
              ? strings.REMOVE_FROM_CART
              : strings.ADD_TO_CART}
          </Text>
          <Image source={Icons.CART} style={styles.addToCartItem} />
        </View>
      </TouchableOpacity>
      {/*Buy Now*/}
      <TouchableOpacity onPress={openCart}>
        <View style={styles.buyNow}>
          <Text style={[GlobalStyle.TEXT_STYLE, styles.buyNowText]}>
            {strings.BUY_NOW}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default BookDetailsScreenFooter;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: Size.HEADER_FOOTER_SIZE * 1.2,
    width: Size.WIDTH,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  iconStyle: {
    height: Size.ICON * 0.5,
    width: Size.ICON * 0.5,
  },
  iconView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Size.ICON * 0.9,
    height: Size.ICON * 0.9,
    borderRadius: Size.BORDER_RADIUS,
    backgroundColor: color.BACKGROUND,
    ...GlobalStyle.SHADOW_STYLE,
  },
  buyNow: {
    width: Size.WIDTH * 0.4,
    height: Size.ICON * 0.9,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Size.BORDER_RADIUS,
    backgroundColor: color.BACKGROUND,
    ...GlobalStyle.SHADOW_STYLE,
  },
  addToCart: {
    width: Size.WIDTH * 0.4,
    height: Size.ICON * 0.9,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: Size.BORDER_RADIUS,
    backgroundColor: color.BACKGROUND,
    ...GlobalStyle.SHADOW_STYLE,
  },
  addToCartItem: {
    height: Size.ICON * 0.35,
    width: Size.ICON * 0.35,
    tintColor: color.TEXT,
    marginLeft: 2,
  },
  buyNowText: {
    fontSize: Size.ICON * 0.25,
  },
  addJustingView: fl => ({flex: fl}),
});
