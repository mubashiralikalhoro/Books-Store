import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Size from '../constants/Size';
import GlobalStyle from '../constants/GlobalStyle';
import color from '../constants/color';
import Icons from '../assets/Icons';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {addItem} from '../store/reducer/cart';

const Genre = ({name, index}) => {
  const textColor = () => {
    if (index === 0) {
      return '#23961b';
    } else if (index === 2) {
      return '#ff4d85';
    } else {
      return '#5c60ff';
    }
  };
  const backgroundColor = () => {
    if (index === 0) {
      return '#081f07';
    } else if (index === 2) {
      return '#330a1b';
    } else {
      return '#060729';
    }
  };
  return (
    <View style={styles.genreView(backgroundColor())}>
      <Text
        style={[
          GlobalStyle.TEXT_STYLE,
          {fontSize: Size.FONTSIZE + 1, color: textColor()},
        ]}>
        {name}
      </Text>
    </View>
  );
};

const InfoComponent = ({icon, text, left}) => (
  <>
    <Image
      source={icon}
      resizeMode="contain"
      style={[styles.IconStyle, {left: left}]}
    />
    <Text
      style={[
        GlobalStyle.TEXT_STYLE,
        {
          color: color.GRAY,
          left: left,
        },
      ]}>
      {text}
    </Text>
  </>
);

const getThree = items => {
  if (items > 2) {
    let newItem = [];
    for (let i = 0; i < 3; i++) {
      newItem.push(items[i]);
    }
    return newItem;
  }
  return items;
};

const BooksScreenItem = ({book}) => {
  // hooks
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const reversed = state.resources.langID.reversed;

  const navigation = useNavigation();
  const searchBookInCart = () => {
    let r = false;
    state.cart.forEach(element => {
      if (element.book == book) {
        r = true;
      }
    });
    return r;
  };
  const addToCart = () => {
    if (!searchBookInCart()) {
      dispatch(addItem({noOfItems: 1, book: book}));
    }
  };

  const buyNow = () => {
    if (!searchBookInCart()) {
      dispatch(addItem({noOfItems: 1, book: book}));
    }
    navigation.navigate('BottomNavigator', {screen: 'CartScreen'});
  };
  const toBookDetailsScreen = () => {
    navigation.navigate('BookDetailsScreen', book);
  };
  return (
    <View style={styles.container}>
      <View style={{flex: 1, flexDirection: reversed ? 'row-reverse' : 'row'}}>
        <Pressable onPress={toBookDetailsScreen} style={styles.imageBack}>
          <Image
            source={book.bookCover}
            style={[styles.imageBack, {opacity: 1}]}></Image>
        </Pressable>
        <Pressable onPress={toBookDetailsScreen}>
          {/* Book Cover */}
          <Image
            source={book.bookCover}
            resizeMode="cover"
            style={styles.bookCover}
          />
        </Pressable>
        <View style={styles.detailsView}>
          {/* Book name and author */}
          <Pressable onPress={toBookDetailsScreen}>
            <View>
              <Text style={[GlobalStyle.TEXT_STYLE, styles.bookName(reversed)]}>
                {book.bookName}
              </Text>
              <Text
                style={[
                  GlobalStyle.TEXT_STYLE,
                  styles.bookAuthorName(reversed),
                ]}>
                {book.author}
              </Text>
            </View>
            {/* Book Info */}
            <View style={styles.bookInfo(reversed)}>
              <InfoComponent icon={Icons.PAGE} text={book.pages} left={0} />
              <InfoComponent icon={Icons.READS} text={book.sells} left={20} />
              <InfoComponent icon={Icons.DOLLAR} text={book.price} left={40} />
            </View>
            {/* Genre */}
            <View
              style={styles.allGenresView(reversed)}
              horizontal
              showsHorizontalScrollIndicator={false}>
              {getThree(book.genre).map((gen, index) => (
                <Genre name={gen} key={index} index={index} />
              ))}
            </View>
          </Pressable>

          <View style={styles.viewCart}>
            <TouchableOpacity style={styles.iconsView} onPress={addToCart}>
              <Text style={[GlobalStyle.TEXT_STYLE, styles.text]}>
                Add to cart
              </Text>
              <Image source={Icons.CART} style={styles.viewIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconsView} onPress={buyNow}>
              <Text style={[GlobalStyle.TEXT_STYLE, styles.text]}>Buy Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default BooksScreenItem;

const styles = StyleSheet.create({
  container: {
    marginBottom: Size.PADDING,
    borderRadius: 10,
    marginVertical: 2,
    minHeight: (Size.WIDTH * 0.3 - 10) * 1.5,
    alignItems: 'center',
  },
  genreView: backgroundColor => ({
    justifyContent: 'center',
    paddingHorizontal: Size.FONTSIZE / 2,
    alignItems: 'center',
    marginRight: Size.PADDING,
    height: Size.FONTSIZE + 14,
    borderRadius: (Size.FONTSIZE + 14) / 2,
    backgroundColor: backgroundColor,
    marginVertical: Size.PADDING * 0.1,
  }),
  imageBack: {
    width: '100%',
    height: '100%',
    opacity: 0.05,
    borderRadius: Size.BORDER_RADIUS,
    position: 'absolute',
  },
  bookCover: {
    width: Size.WIDTH * 0.3 - 10,
    // height: (Size.WIDTH * 0.3 - 10) * 1.5,
    height: '100%',
    borderRadius: Size.BORDER_RADIUS,
  },
  allGenresView: reversed => ({
    justifyContent: reversed ? 'flex-end' : 'flex-start',
    marginTop: Size.PADDING,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
  }),
  detailsView: {
    flex: 1,
    marginHorizontal: Size.PADDING,
  },
  bookName: reversed => ({
    fontSize: Size.FONTSIZE + 10,
    marginRight: Size.PADDING,
    alignSelf: reversed ? 'flex-end' : 'flex-start',
  }),
  bookAuthorName: reversed => ({
    color: color.GRAY,
    marginRight: Size.PADDING,
    alignSelf: reversed ? 'flex-end' : 'flex-start',
  }),
  bookInfo: reversed => ({
    flexDirection: reversed ? 'row-reverse' : 'row',
    marginTop: Size.FONTSIZE / 2,
    alignItems: 'center',
    alignSelf: reversed ? 'flex-end' : 'flex-start',
  }),
  IconStyle: {
    width: 20,
    height: 20,
    tintColor: color.GRAY,
  },
  viewCart: {
    marginTop: Size.PADDING,
    paddingRight: Size.PADDING,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  viewIcon: {
    marginLeft: Size.PADDING / 2,
    height: Size.WIDTH * 0.035,
    width: Size.WIDTH * 0.035,
    tintColor: color.TEXT,
  },
  iconsView: {
    flexDirection: 'row',
    paddingVertical: Size.PADDING,
    width: Size.WIDTH * 0.3,
    backgroundColor: color.BACKGROUND,
    borderRadius: Size.BORDER_RADIUS,
    justifyContent: 'center',
    alignItems: 'center',
    ...GlobalStyle.SHADOW_STYLE,
  },
  heartView: {
    width: Size.ICON * 0.8,
    height: Size.ICON * 0.8,
  },
  iconHeartButton: {
    position: 'absolute',
    alignSelf: 'flex-end',
    right: Size.PADDING,
    top: Size.PADDING,
    width: Size.ICON * 0.8,
    height: Size.ICON * 0.8,
  },
  text: {
    fontSize: Size.WIDTH * 0.035,
    color: color.TEXT,
  },
});
