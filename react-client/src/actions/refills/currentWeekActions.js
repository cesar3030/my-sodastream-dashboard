import { apiUrl } from '../../config';
import { 
  FETCH_CURRENT_WEEK_REFILLS_FAILURE, 
  FETCH_CURRENT_WEEK_REFILLS_BEGIN, 
  FETCH_CURRENT_WEEK_REFILLS_SUCCESS 
} from '../../constants/refillsActionsTypes';

export const fetchCurrentWeekRefillsBegin = () => ({
  type: FETCH_CURRENT_WEEK_REFILLS_BEGIN
});

export const fetchCurrentWeekRefillsSucess = (refills) => ({
  type: FETCH_CURRENT_WEEK_REFILLS_SUCCESS,
  payload: refills
});

export const fetchCurrentWeekRefillsFailure = (error) => ({
  type: FETCH_CURRENT_WEEK_REFILLS_FAILURE,
  payload: error
});

export function fetchCurrentWeekRefills() {
  return dispatch => {
    dispatch(fetchCurrentWeekRefillsBegin());
    return fetch(`${apiUrl}/refills/currentWeek`)
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchCurrentWeekRefillsSucess(parseResponse(json)));
        return json;
      })
      .catch(error => dispatch(fetchCurrentWeekRefillsFailure(error)));
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