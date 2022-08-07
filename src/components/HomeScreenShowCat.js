import {View, Text, StyleSheet, ScrollView, Pressable} from 'react-native';
import React from 'react';
import Size from '../constants/Size';
import GlobalStyle from '../constants/GlobalStyle';
import Book from './Book';
import Books from '../dummy/Books';
import color from '../constants/color';
import {useNavigation} from '@react-navigation/native';

const getTen = books => {
  if (books.length > 10) {
    let b = [];
    for (let i = 0; i < 10; i++) {
      b.push(books[i]);
    }
    return b;
  } else {
    return Books;
  }
};

const HomeScreenShowCat = ({catName, books}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          navigation.push('BooksScreen', {catName, books});
        }}>
        {/*Header*/}
        <View style={styles.header}>
          <Text style={[GlobalStyle.TEXT_STYLE, {fontSize: Size.FONTSIZE + 5}]}>
            {catName}
          </Text>
          <View style={styles.managingView}></View>
          <Text style={[GlobalStyle.TEXT_STYLE, styles.showMore]}>
            Show more...
          </Text>
        </View>
      </Pressable>
      {/*Books View*/}
      <ScrollView
        horizontal
        style={styles.scrollView}
        showsHorizontalScrollIndicator={false}>
        {getTen(books).map((book, index) => (
          <Book book={book} key={index} />
        ))}
      </ScrollView>
    </View>
  );
};

export default HomeScreenShowCat;

const styles = StyleSheet.create({
  container: {
    height: Size.WIDTH * 0.27 * 2.2,
    width: Size.WIDTH,
    paddingHorizontal: Size.PADDING,
  },
  scrollView: {
    flex: 1,
    marginTop: Size.PADDING / 2,
  },
  showMore: {
    color: color.SHOW_MORE,
  },

  header: {
    paddingHorizontal: Size.PADDING,
    height: Size.FONTSIZE + 8,
    alignItems: 'center',
    flexDirection: 'row',
  },
  managingView: {
    flex: 1,
  },
});
