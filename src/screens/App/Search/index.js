import {View, Text, SafeAreaView, FlatList} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import CustomInputField from '../../../components/CustomInputField';
import Icons from '../../../assets/Icons';
import BooksScreenItem from '../../../components/BooksScreenItem';
import Header from '../../../components/Header';
import Books from '../../../dummy/Books';
import Size from '../../../constants/Size';
import {useSelector} from 'react-redux';

const SearchScreen = () => {
  const [search, setSearch] = useState('');
  const strings = useSelector(state => state.resources.langID.strings);
  const getBooks = () =>
    Books.filter(book =>
      book.bookName.toLowerCase().includes(search.toLowerCase()),
    );
  return (
    <SafeAreaView style={styles.container}>
      <Header title={strings.SEARCH} />
      <CustomInputField
        icon={Icons.SEARCH}
        iconStyle={styles.icon}
        placeholder={strings.BOOK_NAME}
        onChangeText={setSearch}
        value={search}
      />
      {search.length == 0 ? (
        <>
          <Text style={styles.text}>{strings.SEARCH_FOR_RESULTS}</Text>
          <View style={styles.line} />
        </>
      ) : (
        <>
          <Text style={styles.text}>
            {getBooks().length}{' '}
            {getBooks().length == 1 ? strings.RESULT : strings.RESULTS}
          </Text>
          <View style={styles.line} />
          <FlatList
            data={getBooks()}
            renderItem={item => <BooksScreenItem book={item.item} />}
            keyExtractor={item => item.bookId}
            style={{width: Size.WIDTH}}
          />
        </>
      )}
    </SafeAreaView>
  );
};

export default SearchScreen;
