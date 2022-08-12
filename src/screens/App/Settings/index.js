import {View, Text} from 'react-native';
import React from 'react';
import styles from './style';
import SettingsOption from '../../../components/SettingsOption';
import {useSelector, useDispatch} from 'react-redux';
import {
  disableAnimations,
  enableAnimations,
} from '../../../store/reducer/resources';

const SettingsScreen = () => {
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
    <View style={styles.container}>
      <View style={[styles.line, {height: 3}]} />
      <SettingsOption
        value={animation}
        title="Animations"
        setValue={setAnimationValue}
      />
      <View style={styles.line} />
    </View>
  );
};

export default SettingsScreen;
