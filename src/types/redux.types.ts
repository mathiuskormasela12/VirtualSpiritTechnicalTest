// ========== Redux Types

export interface ILikeState {
  likeActionIsBeingDone: boolean;
  dislikeActionIsBeingDone: boolean;
  resetActionIsBeingDone: boolean;
}

export type LikeReducerTypes =
  | 'LIKE_ACTION_IS_BEING_DONE'
  | 'DISLIKE_ACTION_IS_BEING_DONE'
  | 'RESET_ACTION_IS_BEING_DONE';

export interface ILikeReduxAction {
  type: LikeReducerTypes;
  value: boolean;
}

export interface IReduxState {
  likeReducer: ILikeState;
}
