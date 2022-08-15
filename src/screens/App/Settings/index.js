import {View, Text} from 'react-native';
import React from 'react';
import styles from './style';
import SettingsOption from '../../../components/SettingsOption';
import {useSelector, useDispatch} from 'react-redux';
import {
  disableAnimations,
  enableAnimations,
} from '../../../store/reducer/resources';
import Header from '../../../components/Header';

const SettingsScreen = () => {
  const strings = useSelector(state => state.resources.langID.strings);
  const animation = useSelector(state => state.resources.animation);
  const dispatch = useDispatch();
  const setAnimationValue = () => {
    if (animation) {
      dispatch(disableAnimations());
    } else {
      dispatch(enableAnimations());
    }
  };
  return (
    <>
      <Header title={strings.SETTINGS} />
      <View style={styles.container}>
        <View style={[styles.line, {height: 3}]} />
        <SettingsOption
          value={animation}
          title={strings.ANIMATIONS}
          setValue={setAnimationValue}
        />
        <View style={styles.line} />
      </View>
    </>
  );
};

export default SettingsScreen;
