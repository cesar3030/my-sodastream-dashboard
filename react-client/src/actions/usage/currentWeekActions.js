import { 
  FETCH_CURRENT_WEEK_USAGE_PER_DATE_FAILURE, 
  FETCH_CURRENT_WEEK_USAGE_PER_DATE_BEGIN, 
  FETCH_CURRENT_WEEK_USAGE_PER_DATE_SUCCESS,
  FETCH_CURRENT_WEEK_USAGE_VOLUME_FAILURE, 
  FETCH_CURRENT_WEEK_USAGE_VOLUME_BEGIN, 
  FETCH_CURRENT_WEEK_USAGE_VOLUME_SUCCESS  
} from '../../constants/usageActionsTypes';
import ApiRequest from '../../utils/api-request';

export const fetchCurrentWeekUsagePerDateBegin = () => ({
  type: FETCH_CURRENT_WEEK_USAGE_PER_DATE_BEGIN
});

export const fetchCurrentWeekUsagePerDateSucess = (usage) => ({
  type: FETCH_CURRENT_WEEK_USAGE_PER_DATE_SUCCESS,
  payload: usage
});

export const fetchCurrentWeekUsagePerDateFailure = (error) => ({
  type: FETCH_CURRENT_WEEK_USAGE_PER_DATE_FAILURE,
  payload: error
});

export const fetchCurrentWeekUsageVolumeBegin = () => ({
  type: FETCH_CURRENT_WEEK_USAGE_VOLUME_BEGIN
});

export const fetchCurrentWeekUsageVolumeSucess = (count) => ({
  type: FETCH_CURRENT_WEEK_USAGE_VOLUME_SUCCESS,
  payload: count
});

export const fetchCurrentWeekUsageVolumeFailure = (error) => ({
  type: FETCH_CURRENT_WEEK_USAGE_VOLUME_FAILURE,
  payload: error
});

export function fetchCurrentWeekUsagePerDate() {
  return ApiRequest.fetch(
    '/usage/currentWeek',
    fetchCurrentWeekUsagePerDateBegin,
    (json) => fetchCurrentWeekUsagePerDateSucess(parseResponse(json)),
    fetchCurrentWeekUsagePerDateFailure
  );
}

export function fetchCurrentWeekUsageVolume() {
  return ApiRequest.fetch(
    '/usage/currentWeek/volume',
    fetchCurrentWeekUsageVolumeBegin,
    fetchCurrentWeekUsageVolumeSucess,
    fetchCurrentWeekUsageVolumeFailure
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