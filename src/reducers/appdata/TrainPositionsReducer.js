import { FETCH_LIVE_TP } from '../../actions/appdata/train_positions/actionTypes';

export default (state = null, action) => {
  switch (action.type) {
    case FETCH_LIVE_TP:
      return action.TrainPositions;
    default:
      return state;
  }
};
