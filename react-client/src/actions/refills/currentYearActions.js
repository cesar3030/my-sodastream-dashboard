import { 
  FETCH_CURRENT_YEAR_REFILLS_FAILURE, 
  FETCH_CURRENT_YEAR_REFILLS_BEGIN, 
  FETCH_CURRENT_YEAR_REFILLS_SUCCESS,
  FETCH_CURRENT_YEAR_REFILLS_COUNT_FAILURE, 
  FETCH_CURRENT_YEAR_REFILLS_COUNT_BEGIN, 
  FETCH_CURRENT_YEAR_REFILLS_COUNT_SUCCESS  
} from '../../constants/refillsActionsTypes';
import ApiRequest from '../../utils/api-request';

export const fetchCurrentYearRefillsPerDateBegin = () => ({
  type: FETCH_CURRENT_YEAR_REFILLS_BEGIN
});

export const fetchCurrentYearRefillsPerDateSucess = (refills) => ({
  type: FETCH_CURRENT_YEAR_REFILLS_SUCCESS,
  payload: refills
});

export const fetchCurrentYearRefillsPerDateFailure = (error) => ({
  type: FETCH_CURRENT_YEAR_REFILLS_FAILURE,
  payload: error
});

export const fetchCurrentYearRefillsCountBegin = () => ({
  type: FETCH_CURRENT_YEAR_REFILLS_COUNT_BEGIN
});

export const fetchCurrentYearRefillsCountSucess = (count) => ({
  type: FETCH_CURRENT_YEAR_REFILLS_COUNT_SUCCESS,
  payload: count
});

export const fetchCurrentYearRefillsCountFailure = (error) => ({
  type: FETCH_CURRENT_YEAR_REFILLS_COUNT_FAILURE,
  payload: error
});

export function fetchCurrentYearRefillsPerDate() {
  return ApiRequest.fetch(
    '/refills/currentYear',
    fetchCurrentYearRefillsPerDateBegin,
    (json) => fetchCurrentYearRefillsPerDateSucess(parseResponse(json)),
    fetchCurrentYearRefillsPerDateFailure
  );
}

export function fetchCurrentYearRefillsCount() {
  return ApiRequest.fetch(
    '/refills/currentYear/count',
    fetchCurrentYearRefillsCountBegin,
    fetchCurrentYearRefillsCountSucess,
    fetchCurrentYearRefillsCountFailure
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
