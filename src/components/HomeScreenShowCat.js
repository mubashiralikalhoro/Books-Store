import {View, Text, StyleSheet, ScrollView, Pressable} from 'react-native';
import React from 'react';
import Size from '../constants/Size';
import GlobalStyle from '../constants/GlobalStyle';
import Book from './Book';
import color from '../constants/color';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const getTen = books => {
  if (books.length > 10) {
    let b = [];
    for (let i = 0; i < 10; i++) {
      b.push(books[i]);
    }
    return b;
  } else {
    return books;
  }
};

const HomeScreenShowCat = ({catName, books}) => {
  const strings = useSelector(state => state.resources.langID.strings);
  const navigation = useNavigation();
  const reversed = useSelector(state => state.resources.langID.reversed);
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          navigation.push('BooksScreen', {catName, books});
        }}>
        {/*Header*/}
        <View style={styles.header(reversed)}>
          <Text style={[GlobalStyle.TEXT_STYLE, {fontSize: Size.FONTSIZE + 5}]}>
            {catName}
          </Text>
          <View style={styles.managingView}></View>
          <Text style={[GlobalStyle.TEXT_STYLE, styles.showMore]}>
            {strings.SHOW_MORE}
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
    minHeight: Size.WIDTH * 0.27 * 1.9,
    marginVertical: Size.PADDING / 2,
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

  header: reversed => ({
    paddingHorizontal: Size.PADDING,
    height: Size.FONTSIZE + 8,
    alignItems: 'center',
    flexDirection: reversed ? 'row-reverse' : 'row',
  }),
  managingView: {
    flex: 1,
  },
});
