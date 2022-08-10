import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import styles from './style';
import GlobalStyle from '../../../constants/GlobalStyle';
import {useRoute} from '@react-navigation/native';
import Header from '../../../components/Header';
import HomeScreenShowCat from '../../../components/HomeScreenShowCat';
import Size from '../../../constants/Size';
import Book from '../../../components/Book';

// id, name, image, info, booksId, totalSells

const AuthorScreen = () => {
  const author = useRoute().params;
  return (
    <View style={styles.container}>
      <Header title={'Author Details'} />
      <ScrollView>
        <Image source={author.image} style={styles.authorImage} />
        <View style={styles.authorDetailsView}>
          <Text style={[GlobalStyle.TEXT_STYLE, styles.authorName]}>
            {author.name}
          </Text>
          <Text style={[GlobalStyle.TEXT_STYLE, styles.totalSells]}>
            {author.totalSells + ' books sold'}
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
    </View>
  );
};

export default AuthorScreen;
