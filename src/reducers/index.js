import { combineReducers } from 'redux';

// REDUCERS
import AppDataReducer from './appdata/AppDataReducer';

export default combineReducers({
  appData: AppDataReducer
});
