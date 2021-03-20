import { SET_ALERT, REMOVE_ALERT } from '../actions/types';

const initiailState = {};

export default function (state = initiailState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_ALERT:
      return [...state, payload];

    case REMOVE_ALERT:
      return state.filter((alert) => alert.id !== paylaod);
    default:
      return state;
  }
}