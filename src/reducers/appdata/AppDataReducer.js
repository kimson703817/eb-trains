import { combineReducers } from 'redux';

// REDUCERS
import TrainPositionsReducer from './TrainPositionsReducer';

export default combineReducers({
  TrainPositions: TrainPositionsReducer
});
