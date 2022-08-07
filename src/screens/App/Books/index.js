import {View, Text, ScrollView, FlatList} from 'react-native';
import React from 'react';
import styles from './style';
import Header from '../../../components/Header';
import {useNavigation, useRoute} from '@react-navigation/native';
import BooksScreenItem from '../../../components/BooksScreenItem';

const BooksScreen = () => {
  const catName = useRoute().params.catName;
  const books = useRoute().params.books;
  return (
    <View style={styles.container}>
      <Header title={catName} />
      <FlatList
        data={books}
        renderItem={item => <BooksScreenItem item={item.item} />}
        keyExtractor={item => item.id}
      />
      {/* <ScrollView>
        {books.map((item, index) => (
          <BooksScreenItem item={item} key={index} />
        ))}
      </ScrollView> */}
    </View>
  );
};

export default BooksScreen;
