import { 
  FETCH_CURRENT_WEEK_REFILLS_FAILURE, 
  FETCH_CURRENT_WEEK_REFILLS_BEGIN, 
  FETCH_CURRENT_WEEK_REFILLS_SUCCESS,
  FETCH_CURRENT_WEEK_REFILLS_COUNT_FAILURE, 
  FETCH_CURRENT_WEEK_REFILLS_COUNT_BEGIN, 
  FETCH_CURRENT_WEEK_REFILLS_COUNT_SUCCESS  
} from '../../constants/refillsActionsTypes';

export const fetchCurrentWeekRefillsPerDateBegin = () => ({
  type: FETCH_CURRENT_WEEK_REFILLS_BEGIN
});

export const fetchCurrentWeekRefillsPerDateSucess = (refills) => ({
  type: FETCH_CURRENT_WEEK_REFILLS_SUCCESS,
  payload: refills
});

export const fetchCurrentWeekRefillsPerDateFailure = (error) => ({
  type: FETCH_CURRENT_WEEK_REFILLS_FAILURE,
  payload: error
});

export const fetchCurrentWeekRefillsCountBegin = () => ({
  type: FETCH_CURRENT_WEEK_REFILLS_COUNT_BEGIN
});

export const fetchCurrentWeekRefillsCountSucess = (count) => ({
  type: FETCH_CURRENT_WEEK_REFILLS_COUNT_SUCCESS,
  payload: count
});

export const fetchCurrentWeekRefillsCountFailure = (error) => ({
  type: FETCH_CURRENT_WEEK_REFILLS_COUNT_FAILURE,
  payload: error
});

export function fetchCurrentWeekRefillsPerDate() {
  return dispatch => {
    dispatch(fetchCurrentWeekRefillsPerDateBegin());
    return fetch(`${process.env.REACT_APP_API_URL}/refills/currentWeek`)
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchCurrentWeekRefillsPerDateSucess(parseResponse(json)));
        return json;
      })
      .catch(error => dispatch(fetchCurrentWeekRefillsPerDateFailure(error)));
  };
}

export function fetchCurrentWeekRefillsCount() {
  return dispatch => {
    dispatch(fetchCurrentWeekRefillsCountBegin());
    return fetch(`${process.env.REACT_APP_API_URL}/refills/currentWeek/count`)
      .then(handleErrors)
      .then(res => res.json())
      .then(value => {
        dispatch(fetchCurrentWeekRefillsCountSucess(value));
        return value;
      })
      .catch(error => dispatch(fetchCurrentWeekRefillsCountFailure(error)));
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
    dates: labels,
    nbRefillsPerDate: data
  };
}