import { FETCH_LIVE_TP } from './actionTypes';

// KEYS AND CONFIGS
import { WMATA } from '../../../config';
import keys from '../../../config/keys';

// NPM MODULES
import axios from 'axios';

export const fetchLiveTP = () => async dispatch => {
  const { api } = WMATA;
  const { api_key } = keys.WMATA;
  console.log(keys);
  const req = {
    method: 'get',
    url: `${api}/trainpositions/trainpositions?contentType=json`,
    headers: { api_key: `${api_key}` }
  };
  try {
    const res = await axios(req);
    const { TrainPositions } = res.data;
    dispatch({ type: FETCH_LIVE_TP, TrainPositions });
  } catch (error) {
    console.log(error);
  }
};
