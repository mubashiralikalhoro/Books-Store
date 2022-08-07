import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import Header from '../../../components/Header';
import style from './style';
import GlobalStyle from '../../../constants/GlobalStyle';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import BookDetailsScreenFooter from '../../../components/BookDetailsScreenFooter';
import color from '../../../constants/color';
import Icons from '../../../assets/Icons';

// id,
// bookName,
// bookCover,
// rating,
// language,
// pages,
// author,
// authorId,
// genre,
// sells,
// description,
// price,

const InfoComponent = ({icon, text, left}) => (
  <>
    <Image
      source={icon}
      resizeMode="contain"
      style={[style.IconStyle, {left: left}]}
    />
    <Text
      style={[
        GlobalStyle.TEXT_STYLE,
        {
          color: color.GRAY,
          left: left,
        },
      ]}>
      {text}
    </Text>
  </>
);

const BookDetailsScreen = () => {
  const navigation = useNavigation();
  const book = useRoute().params;

  return (
    <View style={style.container}>
      <Header title={'Book Details'} />
      <ScrollView>
        <View style={style.imageView}>
          {/*Book Cover*/}
          <Image
            source={book.bookCover}
            style={style.bookCover}
            resizeMode={'stretch'}
          />
          {/*Book Name*/}
          <Text style={[GlobalStyle.TEXT_STYLE, style.bookName]}>
            {book.bookName}
          </Text>
          {/*Author Name*/}
          <Pressable>
            <Text style={[GlobalStyle.TEXT_STYLE, style.authorName]}>
              by {book.author}
            </Text>
          </Pressable>
          {/*Details*/}
          <View style={style.bookInfo}>
            <InfoComponent icon={Icons.PAGE} text={book.pages} left={0} />
            <View style={style.managingView} />
            <InfoComponent icon={Icons.READS} text={book.sells} left={0} />
            <View style={style.managingView} />
            <InfoComponent icon={Icons.DOLLAR} text={book.price} left={0} />
          </View>
          {/*Description*/}
          <View style={style.descriptionView}>
            <Text style={[GlobalStyle.TEXT_STYLE, style.description]}>
              {book.description}
            </Text>
          </View>
        </View>
      </ScrollView>
      <BookDetailsScreenFooter book={book} />
    </View>
  );
};

export default BookDetailsScreen;
