import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React, {useState} from 'react';
import Authors from '../../../dummy/Authors';
import styles from './style';
import Header from '../../../components/Header';
import Author from '../../../components/Author';
import CustomInputField from '../../../components/CustomInputField';
import Icons from '../../../assets/Icons';
import {useSelector} from 'react-redux';

const ShowAuthorsScreen = () => {
  const strings = useSelector(state => state.resources.langID.strings);
  const [search, setSearch] = useState('');
  const getAuthors = () =>
    Authors.filter(item =>
      item.name.toLowerCase().includes(search.toLowerCase()),
    );
  return (
    <SafeAreaView style={styles.container}>
      <Header title={strings.AUTHORS} />
      <CustomInputField
        icon={Icons.SEARCH}
        iconStyle={styles.icon}
        placeholder={strings.AUTHOR_NAME}
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
            {getAuthors().length}{' '}
            {getAuthors().length == 1 ? strings.RESULT : strings.RESULTS}
          </Text>
          <View style={styles.line} />
        </>
      )}
      <ScrollView>
        <View style={styles.scrollView}>
          {getAuthors().map((item, index) => (
            <Author author={item} key={index} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ShowAuthorsScreen;
