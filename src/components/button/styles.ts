// =========== Button Styles
// import all modules
import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../themes';
import {generateSize, shadowGenerator} from '../../helpers';

export default StyleSheet.create({
  smallBtn: {
    height: generateSize(10, 'width'),
    width: generateSize(24, 'width'),
  },
  normalBtn: {
    height: generateSize(11, 'width'),
    width: generateSize(27, 'width'),
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 13,
    ...shadowGenerator({
      xOffset: 0,
      yOffset: 0,
      shadowColor: 'black',
      shadowOpacity: 0.2,
      shadowRadius: 3,
      elevation: 2,
    }),
  },
  title: {
    fontFamily: Fonts.base,
    fontSize: 16,
    color: Colors.white,
    fontWeight: '900',
  },
  primary: {
    backgroundColor: Colors.primary,
  },
  btnPrimaryOrDangerText: {
    color: 'white',
  },
  light: {
    backgroundColor: Colors.light,
  },
  btnLightText: {
    color: 'black',
  },
  danger: {
    backgroundColor: Colors.danger,
  },
});
