// ========== Col
// import all modules
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {IProps} from '../../types';

export const Col: React.FC<IProps> = props => {
  return <View style={styles.col}>{props.children}</View>;
};

const styles = StyleSheet.create({
  col: {},
});
