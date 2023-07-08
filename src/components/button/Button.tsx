// ========== Button
// import all modules
import React from 'react';
import {TouchableHighlight, Text, SafeAreaView} from 'react-native';
import styles from './styles';

// import types
import {IButtonProps} from '../../types';
import {generateSize} from '../../helpers';
import {Colors} from '../../themes';

export const Button: React.FC<IButtonProps> = ({
  children,
  type,
  small = false,
  marginRight,
  ...rest
}) => {
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

  if (small) {
    computedStyles.push(styles.smallBtn);
  } else {
    computedStyles.push(styles.normalBtn);
  }

  const additionalStyle = [];

  if (marginRight) {
    additionalStyle.push({
      marginRight: generateSize(marginRight, 'width'),
    });
  }

  if (rest.disabled) {
    additionalStyle.push({
      backgroundColor: Colors.disabled,
    });
  }

  return (
    <SafeAreaView>
      <TouchableHighlight
        disabled={rest.disabled}
        onPress={rest?.onPress}
        style={[styles.btn, ...computedStyles, ...additionalStyle]}>
        <Text style={[styles.title, ...computedTextStyles]}>{children}</Text>
      </TouchableHighlight>
    </SafeAreaView>
  );
};
