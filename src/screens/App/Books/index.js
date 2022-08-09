import {FlatList, SafeAreaView} from 'react-native';
import React from 'react';
import styles from './style';
import Header from '../../../components/Header';
import {useNavigation, useRoute} from '@react-navigation/native';
import BooksScreenItem from '../../../components/BooksScreenItem';

const BooksScreen = () => {
  const catName = useRoute().params.catName;
  const books = useRoute().params.books;
  return (
    <SafeAreaView style={styles.container}>
      <Header title={catName} />
      <FlatList
        data={books}
        renderItem={item => <BooksScreenItem item={item.item} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default BooksScreen;
