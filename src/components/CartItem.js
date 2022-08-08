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
import {Cart} from '../dummy/data';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import {useNavigation} from '@react-navigation/native';

const RemoveButton = ({onPress}) => (
  <View style={styles.RemoveButton}>
    <TouchableOpacity onPress={onPress}>
      <Image source={Icons.DELETE} style={styles.deleteIcon} />
    </TouchableOpacity>
  </View>
);

const NumberOfItems = ({no, setNo, book}) => {
  const plusItem = () => {
    setNo(no + 1);
  };
  const minusItem = () => {
    if (no !== 0) {
      setNo(no - 1);
    }
  };
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
const CartItem = ({book}) => {
  const navigation = useNavigation();
  const animatedFade = useState(new Animated.Value(1))[0];
  const remove = () => {
    Animated.timing(animatedFade, {
      toValue: 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
    setTimeout(() => {
      Cart.splice(Cart.indexOf(book), 1);
    }, 200);
  };
  const [numberOfItems, setNumberOfItems] = useState(1);
  const openBook = () => {
    navigation.navigate('BookDetailsScreen', book);
  };

  return (
    <Animated.View style={styles.container(animatedFade)}>
      <Pressable onPress={openBook}>
        <View style={styles.containerMain}>
          <Image
            source={book.bookCover}
            style={styles.image}
            resizeMode="stretch"
          />
          <View style={styles.disView}>
            <Text style={[GlobalStyle.TEXT_STYLE]}>{book.bookName}</Text>
            <View style={styles.priceSection}>
              <NumberOfItems
                no={numberOfItems}
                setNo={setNumberOfItems}
                book={book}
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
          <RemoveButton onPress={remove} />
        </View>
      </Pressable>
    </Animated.View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: op => ({
    marginVertical: Size.PADDING,
    width: Size.WIDTH,
    height: Size.ICON * 1.8,
    alignItems: 'center',
    opacity: op,
  }),
  containerMain: {
    flexDirection: 'row',
    width: Size.WIDTH * 0.9,
    height: Size.ICON * 1.8,
    borderRadius: borderRadius,
    backgroundColor: color.BACKGROUND,
    shadowColor: color.TEXT,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    borderWidth: color.isDark && Platform.OS == 'android' ? 0.5 : 0,
    borderColor: color.GRAY,
  },
  image: {
    height: Size.ICON * 1.8,
    width: Size.ICON * 1.3,
    borderTopLeftRadius: borderRadius,
    borderBottomLeftRadius: borderRadius,
  },
  disView: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: Size.PADDING,
  },
  priceSection: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: Size.FONTSIZE,
    marginTop: Size.FONTSIZE,
    flexDirection: 'row',
  },
  RemoveButton: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    backgroundColor: color.PRIMARY,
    width: Size.ICON * 0.7,
    height: Size.ICON * 0.7,
    left: Size.WIDTH * 0.9 - Size.ICON * 0.7,
    borderTopRightRadius: borderRadius,
    borderBottomLeftRadius: borderRadius,
  },
  deleteIcon: {
    width: Size.ICON * 0.3,
    height: Size.ICON * 0.3,
    tintColor: color.PRIMARY_TEXT,
  },
  NumberOfItemsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: Size.ICON * 1.1,
    height: Size.FONTSIZE + 10,
    backgroundColor: color.GRAY,
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
  NumberOfItemsText: {},
});