import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Animated,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import Icons from '../assets/Icons';
import Size from '../constants/Size';
import color from '../constants/color';
import GlobalStyle from '../constants/GlobalStyle';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import {useNavigation} from '@react-navigation/native';
import {
  decreaseNoOfCartItem,
  increaseNoOfCartItem,
  removeItem,
} from '../store/reducer/cart';
import {useDispatch, useSelector} from 'react-redux';

const RemoveButton = ({onPress, reversed}) => (
  <TouchableOpacity onPress={onPress} style={styles.RemoveButton(reversed)}>
    <Image source={Icons.DELETE} style={styles.deleteIcon} />
  </TouchableOpacity>
);

const NumberOfItems = ({no, plusItem, minusItem}) => {
  return (
    <View style={styles.NumberOfItemsView}>
      <TouchableOpacity onPress={minusItem}>
        <View style={[styles.button]}>
          <Image source={Icons.MINUS} style={styles.buttonIcon} />
        </View>
      </TouchableOpacity>
      <Text style={[GlobalStyle.TEXT_STYLE, styles.NumberOfItemsText]}>
        {no}
      </Text>
      <TouchableOpacity onPress={plusItem}>
        <View style={[styles.button]}>
          <Image source={Icons.PLUS} style={styles.buttonIcon} />
        </View>
      </TouchableOpacity>
    </View>
  );
};
// borderRadius for every place
const borderRadius = Size.BORDER_RADIUS * 5;
const CartItem = ({book, numberOfItems}) => {
  const dispatch = useDispatch();
  const plusItem = () => {
    dispatch(increaseNoOfCartItem({book: book}));
  };
  const minusItem = () => {
    if (numberOfItems !== 0) {
      dispatch(decreaseNoOfCartItem({book: book}));
    }
  };
  const reversed = useSelector(state => state.resources.langID.reversed);
  const navigation = useNavigation();
  const remove = () => {
    dispatch(removeItem({book: book}));
  };

  const openBook = () => {
    navigation.navigate('BookDetailsScreen', book);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerMain(reversed)}>
        <Image
          source={book.bookCover}
          style={styles.image(reversed)}
          resizeMode="stretch"
        />
        <View style={styles.disView}>
          <Pressable onPress={openBook}>
            <Text
              style={[
                GlobalStyle.TEXT_STYLE,
                {alignSelf: reversed ? 'flex-end' : 'flex-start'},
              ]}>
              {book.bookName}
            </Text>
          </Pressable>
          <View style={styles.priceSection(reversed)}>
            <NumberOfItems
              no={numberOfItems}
              plusItem={plusItem}
              minusItem={minusItem}
            />
            <Text
              style={[
                GlobalStyle.TEXT_STYLE,
                {fontSize: Size.FONTSIZE + 2, fontWeight: '700'},
              ]}>
              ${book.price * numberOfItems}
            </Text>
          </View>
        </View>
        <RemoveButton onPress={remove} reversed={reversed} />
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    marginVertical: Size.PADDING,
    width: Size.WIDTH,
    minHeight: Size.ICON * 1.8,
    alignItems: 'center',
  },
  containerMain: reversed => ({
    flexDirection: reversed ? 'row-reverse' : 'row',
    width: Size.WIDTH * 0.9,
    minHeight: Size.ICON * 1.8,
    borderRadius: borderRadius,
    backgroundColor: color.BACKGROUND,
    ...GlobalStyle.SHADOW_STYLE,
  }),
  image: reversed => ({
    height: '100%',
    width: Size.ICON * 1.5,
    borderTopLeftRadius: reversed ? 0 : borderRadius,
    borderBottomLeftRadius: reversed ? 0 : borderRadius,
    borderTopRightRadius: reversed ? borderRadius : 0,
    borderBottomRightRadius: reversed ? borderRadius : 0,
  }),
  disView: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: Size.PADDING,
  },
  priceSection: reversed => ({
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: Size.FONTSIZE,
    marginTop: Size.FONTSIZE,
    flexDirection: reversed ? 'row-reverse' : 'row',
  }),
  RemoveButton: reversed => ({
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    backgroundColor: color.PRIMARY,
    width: Size.ICON * 0.7,
    height: Size.ICON * 0.7,
    left: Size.WIDTH * 0.9 - Size.ICON * 0.7,
    borderTopRightRadius: reversed ? 0 : borderRadius,
    borderBottomLeftRadius: reversed ? 0 : borderRadius,
    borderTopLeftRadius: reversed ? borderRadius : 0,
    borderBottomRightRadius: reversed ? borderRadius : 0,
  }),
  deleteIcon: {
    width: Size.ICON * 0.3,
    height: Size.ICON * 0.3,
    tintColor: color.PRIMARY_TEXT,
  },
  NumberOfItemsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: Size.FONTSIZE + 10,
    minWidth: Size.WIDTH * 0.14,
    backgroundColor: color.LIGHT_GRAY,
    borderRadius: (Size.FONTSIZE + 10) / 2,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: Size.FONTSIZE + 10,
    width: Size.FONTSIZE + 10,
    borderRadius: (Size.FONTSIZE + 10) / 2,
    backgroundColor: color.PRIMARY,
  },
  buttonIcon: {
    height: Size.FONTSIZE,
    width: Size.FONTSIZE,
    tintColor: color.PRIMARY_TEXT,
  },
  NumberOfItemsText: {marginHorizontal: Size.PADDING / 2},
});
