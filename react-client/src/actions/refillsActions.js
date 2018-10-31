import { apiUrl } from '../config';
import { 
  FETCH_REFILLS_FAILURE, 
  FETCH_REFILLS_BEGIN, 
  FETCH_REFILLS_SUCCESS 
} from '../constants/refillsActionsTypes';

export const fetchRefillsBegin = () => ({
  type: FETCH_REFILLS_BEGIN
});

export const fetchRefillsSucess = (refills) => ({
  type: FETCH_REFILLS_SUCCESS,
  payload: refills
});

export const fetchRefillsFailure = (error) => ({
  type: FETCH_REFILLS_FAILURE,
  payload: { error }
});

export function fetchRefills() {
  return dispatch => {
    dispatch(fetchRefillsBegin());
    return fetch(`${apiUrl}/refills/currentWeek`)
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchRefillsSucess(parseResponse(json)));
        return json;
      })
      .catch(error => dispatch(fetchRefillsFailure(error)));
  };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

const parseResponse = (json) => {
  const labels = [];
  const data = [];

  for(let label in json) {
    labels.push(label);
    data.push(json[label]);
  }

  return {
    days: labels,
    nbRefillsPerDay: data
  };
}