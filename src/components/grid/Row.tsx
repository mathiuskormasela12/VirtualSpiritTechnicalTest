// ========== Row
// import all modules
import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {IRowProps} from '../../types';

export const Row: React.FC<IRowProps> = ({
  children,
  flexDirection = 'column',
  asScrollView,
}) => {
  switch (flexDirection) {
    case 'column': {
      return asScrollView ? (
        <ScrollView style={styles.column}>{children}</ScrollView>
      ) : (
        <View style={styles.column}>{children}</View>
      );
    }

    default: {
      return asScrollView ? (
        <ScrollView style={styles.row}>{children}</ScrollView>
      ) : (
        <View style={styles.row}>{children}</View>
      );
    }
  }
};

const styles = StyleSheet.create({
  column: {
    flexDirection: 'column',
    alignContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
