// ============ Card Hooks
// import all modules
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  CardStateTypes,
  HandleState,
  IReduxState,
  StartEffect,
  UseCard,
} from '../types';
import {handleLikeAction} from '../redux/actions';

export const useCard: UseCard = () => {
  const dispatch = useDispatch();
  const states = useSelector(
    (reduxStates: IReduxState) => reduxStates.likeReducer,
  );
  const [like, setLike] = useState(0);

  const handleState: HandleState = (name: CardStateTypes) => {
    if (name === 'like') {
      setLike(currentLike => currentLike + 1);
    } else if (name === 'dislike') {
      setLike(currentLike => (currentLike > 0 ? currentLike - 1 : currentLike));
    } else if (name === 'reset') {
      setLike(() => 0);
    }
  };

  const startEffect: StartEffect = () => {
    if (states.likeActionIsBeingDone) {
      handleState('like');
      dispatch(handleLikeAction('LIKE_ACTION_IS_BEING_DONE', false));
    } else if (states.dislikeActionIsBeingDone) {
      handleState('dislike');
      dispatch(handleLikeAction('DISLIKE_ACTION_IS_BEING_DONE', false));
    } else if (states.resetActionIsBeingDone) {
      handleState('reset');
      dispatch(handleLikeAction('RESET_ACTION_IS_BEING_DONE', false));
    }
  };

  return [like, handleState, startEffect, states];
};
