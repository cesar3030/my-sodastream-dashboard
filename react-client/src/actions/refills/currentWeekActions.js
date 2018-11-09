import { 
  FETCH_CURRENT_WEEK_REFILLS_FAILURE, 
  FETCH_CURRENT_WEEK_REFILLS_BEGIN, 
  FETCH_CURRENT_WEEK_REFILLS_SUCCESS,
  FETCH_CURRENT_WEEK_REFILLS_COUNT_FAILURE, 
  FETCH_CURRENT_WEEK_REFILLS_COUNT_BEGIN, 
  FETCH_CURRENT_WEEK_REFILLS_COUNT_SUCCESS  
} from '../../constants/refillsActionsTypes';
import ApiRequest from '../../utils/api-request';

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
  return ApiRequest.fetch(
    '/refills/currentWeek',
    fetchCurrentWeekRefillsPerDateBegin,
    (json) => fetchCurrentWeekRefillsPerDateSucess(parseResponse(json)),
    fetchCurrentWeekRefillsPerDateFailure
  );
}

export function fetchCurrentWeekRefillsCount() {
  return ApiRequest.fetch(
    '/refills/currentWeek/count',
    fetchCurrentWeekRefillsCountBegin,
    fetchCurrentWeekRefillsCountSucess,
    fetchCurrentWeekRefillsCountFailure
  );
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