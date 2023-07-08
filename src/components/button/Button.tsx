// ========== Button
// import all modules
import React from 'react';
import {TouchableHighlight, Text, SafeAreaView} from 'react-native';
import styles from './styles';

// import types
import {IButtonProps} from '../../types';

export const Button: React.FC<IButtonProps> = ({children, type}) => {
  const computedStyles = [];
  const computedTextStyles = [];

  switch (type) {
    case 'primary':
      computedStyles.push(styles.primary);
      computedTextStyles.push(styles.btnPrimaryOrDangerText);
      break;

    case 'ligth':
      computedStyles.push(styles.light);
      computedTextStyles.push(styles.btnLightText);
      break;

    default:
      computedStyles.push(styles.danger);
      computedTextStyles.push(styles.btnPrimaryOrDangerText);
  }

  return (
    <SafeAreaView>
      <TouchableHighlight style={[styles.btn, ...computedStyles]}>
        <Text style={[styles.title, ...computedTextStyles]}>{children}</Text>
      </TouchableHighlight>
    </SafeAreaView>
  );
};
