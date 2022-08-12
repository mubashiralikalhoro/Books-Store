import {View, Text, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import Header from '../../../components/Header';
import LanguageComponent from '../../../components/LanguageComponent';
import {Images} from '../../../assets/images';
import {useDispatch, useSelector} from 'react-redux';
import {changeLanguage} from '../../../store/reducer/resources';

const LanguageScreen = () => {
  const selected = useSelector(state => state.resources.langID.id);
  const dispatch = useDispatch();
  // const [selected, setSelected] = useState('English-US');
  const setSelected = props => {
    dispatch(changeLanguage(props));
  };
  return (
    <View style={styles.container}>
      <LanguageComponent
        icon={Images.usa}
        title="English-US"
        selected={selected}
        onPress={() => setSelected('English-US')}
      />
      <LanguageComponent
        icon={Images.pakistan}
        title="Urdu-Pakistan"
        selected={selected}
        onPress={() => setSelected('Urdu-Pakistan')}
      />
      <LanguageComponent
        icon={Images.saudi}
        title="Arabic-Saudi Arabia"
        selected={selected}
        onPress={() => setSelected('Arabic-Saudi Arabia')}
      />
    </View>
  );
};

export default LanguageScreen;
