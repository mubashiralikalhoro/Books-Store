import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import Size from '../constants/Size';
import color from '../constants/color';
import Icons from '../assets/Icons';
import {Cart, Favorite} from '../dummy/data';
import style from '../screens/App/Home/style';
import GlobalStyle from '../constants/GlobalStyle';
import {useNavigation} from '@react-navigation/native';

const IconButton = ({icon, onPress, style, imageStyle}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={style}>
        <Image source={icon} style={imageStyle} />
      </View>
    </TouchableOpacity>
  );
};

const BookDetailsScreenFooter = ({book}) => {
  const [heartImage, setHeartImage] = useState(Icons.FAVORITE);
  const [cartColor, setCartColor] = useState('white');

  const navigation = useNavigation();
  const openCart = () => {
    if (cartColor === 'white') {
      Cart.push(book);
    }
    navigation.navigate('BottomNavigator', {screen: 'CartScreen'});
  };

  const heartPressed = () => {
    if (heartImage === Icons.FAVORITE) {
      setHeartImage(Icons.FAVORITE_SELECTED);
      Favorite.push(book);
    } else {
      setHeartImage(Icons.FAVORITE);
      Favorite.splice(Favorite.indexOf(book), 1);
    }
  };

  const cartPressed = () => {
    if (cartColor === 'white') {
      setCartColor('red');
      Cart.push(book);
    } else {
      setCartColor('white');
      Cart.splice(Cart.indexOf(book), 1);
    }
  };

  return (
    <View style={styles.container}>
      {/* <View style={styles.addJustingView(4)} /> */}
      <IconButton
        icon={heartImage}
        onPress={heartPressed}
        style={styles.iconView}
        imageStyle={[
          styles.iconStyle,
          heartImage === Icons.FAVORITE ? {tintColor: 'white'} : {},
        ]}
      />
      {/* <View style={styles.addJustingView(1)} /> */}
      <IconButton
        icon={Icons.CART}
        onPress={cartPressed}
        style={[styles.iconView]}
        imageStyle={[styles.iconStyle, {tintColor: cartColor}]}
      />
      {/* <View style={styles.addJustingView(4)} /> */}

      {/*Buy Now*/}
      <TouchableOpacity onPress={openCart}>
        <View style={styles.buyNow}>
          <Text style={[GlobalStyle.TEXT_STYLE, styles.buyNowText]}>
            Buy Now
          </Text>
        </View>
      </TouchableOpacity>
      {/* <View style={styles.addJustingView(4)} /> */}
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
    backgroundColor: color.PRIMARY,
  },
  buyNow: {
    width: Size.WIDTH * 0.7,
    height: Size.ICON * 0.9,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Size.BORDER_RADIUS,
    backgroundColor: color.PRIMARY,
  },
  buyNowText: {
    color: color.PRIMARY_TEXT,
    fontSize: Size.ICON * 0.35,
  },
  addJustingView: fl => ({flex: fl}),
});
