// ========== Button Types
// import all modules
import {IProps} from './global.types';

export interface IButtonProps extends IProps {
  type: 'danger' | 'primary' | 'ligth';
  small?: boolean;
  marginRight?: number;
  onPress?: () => void;
  disabled?: boolean;
}
