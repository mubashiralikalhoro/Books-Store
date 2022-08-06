import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import Size from '../constants/Size';
import finalPropsSelectorFactory from 'react-redux/es/connect/selectorFactory';
import GlobalStyle from '../constants/GlobalStyle';
import Book from './Book';
import Books from '../dummy/Books';

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
  return (
    <View style={styles.container}>
      {/*Header*/}
      <View style={styles.header}>
        <Text style={GlobalStyle.TEXT_STYLE}>{catName}</Text>
        <View style={styles.managingView}></View>
        <Text style={[GlobalStyle.TEXT_STYLE, styles.showMore]}>
          Show more...
        </Text>
      </View>
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
    marginVertical: 5,
    height: Size.HEIGHT * 0.3,
    width: Size.WIDTH,
    paddingHorizontal: Size.PADDING,
  },
  scrollView: {
    flex: 1,
    marginTop: Size.PADDING,
  },
  showMore: {
    color: 'blue',
  },

  header: {
    height: Size.FONTSIZE + 5,
    alignItems: 'center',
    flexDirection: 'row',
  },
  managingView: {
    flex: 1,
  },
});
