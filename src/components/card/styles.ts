// ============ Card Style
// import all modules
import {StyleSheet} from 'react-native';
import {generateSize} from '../../helpers';

export default StyleSheet.create({
  card: {
    marginBottom: generateSize(2, 'height'),
    height: generateSize(65, 'width'),
    borderWidth: 0.3,
    borderStyle: 'solid',
    borderColor: 'gray',
    borderRadius: 7,
  },
  img: {
    width: '100%',
    height: '100%',
  },
  header: {
    height: '75%',
  },
  footer: {
    height: '25%',
    justifyContent: 'center',
  },
  wrapper: {
    width: generateSize(84, 'width'),
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  btnCol: {
    flexDirection: 'row',
  },
});
