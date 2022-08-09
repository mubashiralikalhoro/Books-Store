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
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useNavigation} from '@react-navigation/native';

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

const BooksScreenItem = ({item}) => {
  const addToCart = () => {};
  const buyNow = () => {};
  const navigation = useNavigation();
  const toBookDetailsScreen = () => {
    navigation.navigate('BookDetailsScreen', item);
  };
  return (
    <View style={styles.container}>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <Pressable onPress={toBookDetailsScreen} style={styles.imageBack}>
          <Image
            source={item.bookCover}
            style={[styles.imageBack, {opacity: 1}]}></Image>
        </Pressable>
        <Pressable onPress={toBookDetailsScreen}>
          {/* Book Cover */}
          <Image
            source={item.bookCover}
            resizeMode="cover"
            style={styles.bookCover}
          />
        </Pressable>
        <View style={styles.detailsView}>
          {/* Book name and author */}
          <Pressable onPress={toBookDetailsScreen}>
            <View>
              <Text style={[GlobalStyle.TEXT_STYLE, styles.bookName]}>
                {item.bookName}
              </Text>
              <Text style={[GlobalStyle.TEXT_STYLE, styles.bookAuthorName]}>
                {item.author}
              </Text>
            </View>
            {/* Book Info */}
            <View style={styles.bookInfo}>
              <InfoComponent icon={Icons.PAGE} text={item.pages} left={0} />
              <InfoComponent icon={Icons.READS} text={item.sells} left={20} />
              <InfoComponent icon={Icons.DOLLAR} text={item.price} left={40} />
            </View>
            {/* Genre */}
            <ScrollView
              style={styles.allGenresView}
              horizontal
              showsHorizontalScrollIndicator={false}>
              {getThree(item.genre).map((gen, index) => (
                <Genre name={gen} key={index} index={index} />
              ))}
            </ScrollView>
          </Pressable>

          <View style={styles.viewCart}>
            <Pressable style={styles.iconsView} onPress={addToCart}>
              <Text style={[GlobalStyle.TEXT_STYLE, styles.text]}>
                Add to cart
              </Text>
              <Image source={Icons.CART} style={styles.viewIcon} />
            </Pressable>
            <Pressable style={styles.iconsView} onPress={buyNow}>
              <Text style={[GlobalStyle.TEXT_STYLE, styles.text]}>Buy Now</Text>
            </Pressable>
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
  allGenresView: {
    marginTop: Size.PADDING,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
  },
  detailsView: {
    flex: 1,
    marginLeft: Size.PADDING,
  },
  bookName: {
    fontSize: Size.FONTSIZE + 10,
  },
  bookAuthorName: {
    color: color.GRAY,
  },
  bookInfo: {
    flexDirection: 'row',
    marginTop: Size.FONTSIZE / 2,
    alignItems: 'center',
  },
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
    tintColor: color.PRIMARY_TEXT,
  },
  iconsView: {
    flexDirection: 'row',

    paddingVertical: Size.PADDING,
    width: Size.WIDTH * 0.3,
    backgroundColor: color.PRIMARY,
    borderRadius: Size.BORDER_RADIUS,
    justifyContent: 'center',
    alignItems: 'center',
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
    color: color.PRIMARY_TEXT,
  },
});
