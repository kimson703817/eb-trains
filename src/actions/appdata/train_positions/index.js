import { FETCH_LIVE_TP } from './actionTypes';

// KEYS AND CONFIGS
import { WMATA } from '../../../config';

// NPM MODULES
import axios from 'axios';

export const fetchLiveTP = () => async dispatch => {
  const today = new Date();
  // const time =
  //   today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
  // console.log(time);
  const { api_key, api } = WMATA;
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
