// ========== Button
// import all modules
import React from 'react';
import {TouchableHighlight, Text, SafeAreaView, StyleSheet} from 'react-native';

// import types
import {IProps} from '../types';
import {Colors, Fonts} from '../themes';

export const Button: React.FC<IProps> = props => {
  return (
    <SafeAreaView>
      <TouchableHighlight style={styles.btn}>
        <Text style={styles.title}>{props.children}</Text>
      </TouchableHighlight>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: Colors.primary,
    height: 40,
    width: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  title: {
    fontFamily: Fonts.base,
    fontSize: 16,
    color: Colors.white,
    fontWeight: '900',
  },
});
