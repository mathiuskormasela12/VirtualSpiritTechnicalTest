// ========== Like Reducer
// import all modules
import {ILikeReduxAction, ILikeState} from '../../types';

const initialState: ILikeState = {
  likeActionIsBeingDone: false,
  dislikeActionIsBeingDone: false,
  resetActionIsBeingDone: false,
};

const likeReducer = (
  states: ILikeState = initialState,
  action: ILikeReduxAction,
): ILikeState => {
  switch (action.type) {
    case 'LIKE_ACTION_IS_BEING_DONE': {
      return {
        ...states,
        likeActionIsBeingDone: action?.value ?? false,
      };
    }

    case 'DISLIKE_ACTION_IS_BEING_DONE': {
      return {
        ...states,
        dislikeActionIsBeingDone: action?.value ?? false,
      };
    }

    case 'RESET_ACTION_IS_BEING_DONE': {
      return {
        ...states,
        resetActionIsBeingDone: action?.value ?? false,
      };
    }

    default: {
      return {
        ...states,
      };
    }
  }
};

export default likeReducer;
