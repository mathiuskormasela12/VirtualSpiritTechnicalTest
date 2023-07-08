// ========== Card Types
// import all modules

export type CardActionTypes =
  | 'likeActionIsDoing'
  | 'dislikeActionIsDoing'
  | 'resetAction';

export type CardStateTypes = 'dislike' | 'like' | 'reset';

export interface ICardProps {
  source: any;
  likeActionIsDoing: boolean;
  dislikeActionIsDoing: boolean;
  resetAction: boolean;
  handleLikeActionOrDislikeActionIsDoing: (name: CardActionTypes) => void;
}
