// ============= Hooks Use Card Type
// import all modules
import {CardStateTypes} from './card.types';
import {ILikeState} from './redux.types';

export type StartEffect = () => void;

export type HandleState = (name: CardStateTypes) => void;

export type UseCard = () => [number, HandleState, StartEffect, ILikeState];
