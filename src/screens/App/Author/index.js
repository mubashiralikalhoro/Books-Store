import {View, Text, Image, ScrollView, SafeAreaView} from 'react-native';
import React from 'react';
import styles from './style';
import GlobalStyle from '../../../constants/GlobalStyle';
import {useRoute} from '@react-navigation/native';
import Header from '../../../components/Header';
import Size from '../../../constants/Size';
import Book from '../../../components/Book';
import {useSelector} from 'react-redux';

const AuthorScreen = () => {
  const strings = useSelector(state => state.resources.langID.strings);
  const author = useRoute().params;
  return (
    <SafeAreaView style={styles.container}>
      <Header title={strings.AUTHOR_DETAILS} />
      <ScrollView>
        <Image source={author.image} style={styles.authorImage} />
        <View style={styles.authorDetailsView}>
          <Text style={[GlobalStyle.TEXT_STYLE, styles.authorName]}>
            {author.name}
          </Text>
          <Text style={[GlobalStyle.TEXT_STYLE, styles.totalSells]}>
            {author.totalSells + ' ' + strings.BOOKS_SOLD}
          </Text>
          <Text style={[GlobalStyle.TEXT_STYLE, styles.info]}>
            {author.info}
          </Text>
        </View>
        <View style={styles.line} />
        <View style={{marginTop: Size.PADDING * 2}} />
        <View style={styles.bookView}>
          {author.books.map((book, index) => (
            <View key={index} style={{marginTop: Size.PADDING}}>
              <Book book={book} key={index} />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AuthorScreen;
