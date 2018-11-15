import { 
  FETCH_CURRENT_MONTH_REFILLS_PER_DATE_FAILURE, 
  FETCH_CURRENT_MONTH_REFILLS_PER_DATE_BEGIN, 
  FETCH_CURRENT_MONTH_REFILLS_PER_DATE_SUCCESS,
  FETCH_CURRENT_MONTH_REFILLS_COUNT_FAILURE, 
  FETCH_CURRENT_MONTH_REFILLS_COUNT_BEGIN, 
  FETCH_CURRENT_MONTH_REFILLS_COUNT_SUCCESS
} from '../../constants/refillsActionsTypes';
import ApiRequest from '../../utils/api-request';


export const fetchCurrentMonthRefillsBegin = () => ({
  type: FETCH_CURRENT_MONTH_REFILLS_PER_DATE_BEGIN
});

export const fetchCurrentMonthRefillsSucess = (refills) => ({
  type: FETCH_CURRENT_MONTH_REFILLS_PER_DATE_SUCCESS,
  payload: refills
});

export const fetchCurrentMonthRefillsFailure = (error) => ({
  type: FETCH_CURRENT_MONTH_REFILLS_PER_DATE_FAILURE,
  payload: error
});

export const fetchCurrentMonthRefillsCountBegin = () => ({
  type: FETCH_CURRENT_MONTH_REFILLS_COUNT_BEGIN
});

export const fetchCurrentMonthRefillsCountSucess = (count) => ({
  type: FETCH_CURRENT_MONTH_REFILLS_COUNT_SUCCESS,
  payload: count
});

export const fetchCurrentMonthRefillsCountFailure = (error) => ({
  type: FETCH_CURRENT_MONTH_REFILLS_COUNT_FAILURE,
  payload: error
});

export function fetchCurrentMonthRefills() {
  return ApiRequest.fetch(
    '/refills/currentMonth',
    fetchCurrentMonthRefillsBegin,
    (json) => fetchCurrentMonthRefillsSucess(parseResponse(json)),
    fetchCurrentMonthRefillsFailure
  );
}

export function fetchCurrentMonthRefillsCount() {
  return ApiRequest.fetch(
    '/refills/currentMonth/count',
    fetchCurrentMonthRefillsCountBegin,
    fetchCurrentMonthRefillsCountSucess,
    fetchCurrentMonthRefillsCountFailure
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
    labels: labels,
    data: data
  };
}