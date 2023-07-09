// =========== Like Redux Action
// import all modules
import {LikeReducerTypes} from '../../types';

export const handleLikeAction = (type: LikeReducerTypes, value: boolean) => ({
  type,
  value,
});
