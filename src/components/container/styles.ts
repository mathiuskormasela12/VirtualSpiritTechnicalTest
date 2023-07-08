// ========== Container Style
// import all modules
import {StyleSheet} from 'react-native';
import {generateSize} from '../../helpers';

export default StyleSheet.create({
  container: {
    width: generateSize(90, 'width'),
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});
