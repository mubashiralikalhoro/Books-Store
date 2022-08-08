import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Size from '../constants/Size';
import color from '../constants/color';
import GlobalStyle from '../constants/GlobalStyle';
import Icons from '../assets/Icons';
import {useNavigation} from '@react-navigation/native';

const borderRadius = Size.BORDER_RADIUS;

const FavoriteScreenItem = ({book}) => {
  const navigation = useNavigation();
  const openBook = () => {
    navigation.navigate('BookDetailsScreen', book);
  };
  return (
    <View style={styles.container}>
      <Pressable onPress={openBook}>
        <View style={styles.containerMain}>
          <Image
            source={book.bookCover}
            style={styles.image}
            resizeMode="stretch"
          />
          <View style={styles.disView}>
            <Text
              numberOfLines={1}
              style={[GlobalStyle.TEXT_STYLE, {fontSize: Size.FONTSIZE * 1.1}]}>
              {book.bookName}
            </Text>
            <Text
              style={[
                GlobalStyle.TEXT_STYLE,
                {fontSize: Size.FONTSIZE + 2, fontWeight: '700'},
              ]}>
              ${book.price}
            </Text>
          </View>
          <TouchableOpacity>
            <Image
              style={styles.heartImageStyle}
              source={Icons.FAVORITE_SELECTED}
            />
          </TouchableOpacity>
        </View>
      </Pressable>
    </View>
  );
};

export default FavoriteScreenItem;

const styles = StyleSheet.create({
  container: {
    marginVertical: Size.PADDING,
    width: Size.WIDTH,
    height: Size.ICON * 1.2,
    alignItems: 'center',
  },
  containerMain: {
    alignItems: 'center',
    flexDirection: 'row',
    width: Size.WIDTH * 0.9,
    height: Size.ICON * 1.2,
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
    height: Size.ICON * 1.2,
    width: Size.ICON,
    borderTopLeftRadius: borderRadius,
    borderBottomLeftRadius: borderRadius,
  },
  disView: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: Size.PADDING,
  },
  heartImageStyle: {
    height: Size.ICON * 0.8,
    width: Size.ICON * 0.8,
    marginRight: Size.ICON * 0.2,
  },
});
