import { 
  FETCH_CURRENT_MONTH_REFILLS_FAILURE, 
  FETCH_CURRENT_MONTH_REFILLS_BEGIN, 
  FETCH_CURRENT_MONTH_REFILLS_SUCCESS 
} from '../../constants/refillsActionsTypes';
import ApiRequest from '../../utils/api-request';


export const fetchCurrentMonthRefillsBegin = () => ({
  type: FETCH_CURRENT_MONTH_REFILLS_BEGIN
});

export const fetchCurrentMonthRefillsSucess = (refills) => ({
  type: FETCH_CURRENT_MONTH_REFILLS_SUCCESS,
  payload: refills
});

export const fetchCurrentMonthRefillsFailure = (error) => ({
  type: FETCH_CURRENT_MONTH_REFILLS_FAILURE,
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
    nbRefillsPerDate: data
  };
}