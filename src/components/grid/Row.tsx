// ========== Row
// import all modules
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {IRowProps} from '../../types';

export const Row: React.FC<IRowProps> = ({
  children,
  flexDirection = 'column',
}) => {
  switch (flexDirection) {
    case 'column': {
      return <View style={styles.column}>{children}</View>;
    }

    default: {
      return <View style={styles.row}>{children}</View>;
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
