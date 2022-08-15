import {FlatList, SafeAreaView, Text, View} from 'react-native';
import React from 'react';
import styles from './style';
import Header from '../../../components/Header';
import {useNavigation, useRoute} from '@react-navigation/native';
import BooksScreenItem from '../../../components/BooksScreenItem';
import CustomInputField from '../../../components/CustomInputField';
import Icons from '../../../assets/Icons';
import {useSelector} from 'react-redux';
import {useState} from 'react';

const BooksScreen = ({navigation}) => {
  const strings = useSelector(state => state.resources.langID.strings);
  const catName = useRoute().params.catName;
  const books = useRoute().params.books;
  const openSearch = () => {
    navigation.navigate('SearchScreen');
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header title={catName} icon={Icons.SEARCH} iconOnPress={openSearch} />
      <FlatList
        data={books}
        s
        renderItem={item => <BooksScreenItem book={item.item} />}
        keyExtractor={item => item.bookId}
      />
    </SafeAreaView>
  );
};

export default BooksScreen;
