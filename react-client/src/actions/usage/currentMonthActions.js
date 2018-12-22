import { 
  FETCH_CURRENT_MONTH_USAGE_PER_DATE_FAILURE, 
  FETCH_CURRENT_MONTH_USAGE_PER_DATE_BEGIN, 
  FETCH_CURRENT_MONTH_USAGE_PER_DATE_SUCCESS,
  FETCH_CURRENT_MONTH_USAGE_VOLUME_FAILURE, 
  FETCH_CURRENT_MONTH_USAGE_VOLUME_BEGIN, 
  FETCH_CURRENT_MONTH_USAGE_VOLUME_SUCCESS
} from '../../constants/usageActionsTypes';
import ApiRequest from '../../utils/api-request';


export const fetchCurrentMonthUsageBegin = () => ({
  type: FETCH_CURRENT_MONTH_USAGE_PER_DATE_BEGIN
});

export const fetchCurrentMonthUsageSuccess = (usage) => ({
  type: FETCH_CURRENT_MONTH_USAGE_PER_DATE_SUCCESS,
  payload: usage
});

export const fetchCurrentMonthUsageFailure = (error) => ({
  type: FETCH_CURRENT_MONTH_USAGE_PER_DATE_FAILURE,
  payload: error
});

export const fetchCurrentMonthUsageVolumeBegin = () => ({
  type: FETCH_CURRENT_MONTH_USAGE_VOLUME_BEGIN
});

export const fetchCurrentMonthUsageVolumeSuccess = (volume) => ({
  type: FETCH_CURRENT_MONTH_USAGE_VOLUME_SUCCESS,
  payload: volume
});

export const fetchCurrentMonthUsageVolumeFailure = (error) => ({
  type: FETCH_CURRENT_MONTH_USAGE_VOLUME_FAILURE,
  payload: error
});

export function fetchCurrentMonthUsagePerDate() {
  return ApiRequest.fetch(
    '/usage/currentMonth',
    fetchCurrentMonthUsageBegin,
    (json) => fetchCurrentMonthUsageSuccess(parseResponse(json)),
    fetchCurrentMonthUsageFailure
  );
}

export function fetchCurrentMonthUsageVolume() {
  return ApiRequest.fetch(
    '/usage/currentMonth/volume',
    fetchCurrentMonthUsageVolumeBegin,
    fetchCurrentMonthUsageVolumeSuccess,
    fetchCurrentMonthUsageVolumeFailure
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