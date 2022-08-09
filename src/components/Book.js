import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import Size from '../constants/Size';
import GlobalStyle from '../constants/GlobalStyle';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import {useNavigation} from '@react-navigation/native';

const Book = ({book}) => {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.navigate('BookDetailsScreen', book)}>
      <View style={styles.container}>
        <Image source={book.bookCover} style={styles.bookCover} />
        <Text style={[GlobalStyle.TEXT_STYLE, styles.title]} numberOfLines={2}>
          {book.bookName}
        </Text>
      </View>
    </Pressable>
  );
};

export default Book;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 2,
    width: Size.WIDTH * 0.3,
    height: Size.WIDTH * 0.6,
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
  },

  bookCover: {
    width: Size.WIDTH * 0.3 - 10,
    height: (Size.WIDTH * 0.3 - 10) * 1.5,
    borderRadius: Size.BORDER_RADIUS,
  },
});
