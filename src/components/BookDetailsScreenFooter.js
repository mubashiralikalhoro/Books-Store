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

  const navigation = useNavigation();
  const openCart = () => {};

  const heartPressed = () => {
    if (heartImage === Icons.FAVORITE) {
      setHeartImage(Icons.FAVORITE_SELECTED);
    } else {
      setHeartImage(Icons.FAVORITE);
    }
  };

  const cartPressed = () => {};

  return (
    <View style={styles.container}>
      {/*Add to favorite*/}
      <IconButton
        icon={heartImage}
        onPress={heartPressed}
        style={styles.iconView}
        imageStyle={[
          styles.iconStyle,
          heartImage === Icons.FAVORITE ? {tintColor: 'white'} : {},
        ]}
      />
      {/*Add to cart*/}
      <TouchableOpacity onPress={cartPressed}>
        <View style={styles.addToCart}>
          <Text style={[GlobalStyle.TEXT_STYLE, styles.buyNowText]}>
            Add to cart
          </Text>
          <Image source={Icons.CART} style={styles.addToCartItem} />
        </View>
      </TouchableOpacity>
      {/*Buy Now*/}
      <TouchableOpacity onPress={openCart}>
        <View style={styles.buyNow}>
          <Text style={[GlobalStyle.TEXT_STYLE, styles.buyNowText]}>
            Buy Now
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
    backgroundColor: color.PRIMARY,
  },
  buyNow: {
    width: Size.WIDTH * 0.4,
    height: Size.ICON * 0.9,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Size.BORDER_RADIUS,
    backgroundColor: color.PRIMARY,
  },
  addToCart: {
    width: Size.WIDTH * 0.4,
    height: Size.ICON * 0.9,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: Size.BORDER_RADIUS,
    backgroundColor: color.PRIMARY,
  },
  addToCartItem: {
    height: Size.ICON * 0.35,
    width: Size.ICON * 0.35,
    tintColor: color.PRIMARY_TEXT,
    marginLeft: 2,
  },
  buyNowText: {
    color: color.PRIMARY_TEXT,
    fontSize: Size.ICON * 0.3,
  },
  addJustingView: fl => ({flex: fl}),
});
