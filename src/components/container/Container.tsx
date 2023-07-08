// ========== Container
// import all modules
import React from 'react';
import {View} from 'react-native';
import {IProps} from '../../types';
import styles from './styles';

export const Container: React.FC<IProps> = props => {
  return <View style={styles.container}>{props.children}</View>;
};
