import { 
  FETCH_CURRENT_YEAR_USAGE_PER_DATE_FAILURE, 
  FETCH_CURRENT_YEAR_USAGE_PER_DATE_BEGIN, 
  FETCH_CURRENT_YEAR_USAGE_PER_DATE_SUCCESS,
  FETCH_CURRENT_YEAR_USAGE_VOLUME_FAILURE, 
  FETCH_CURRENT_YEAR_USAGE_VOLUME_BEGIN, 
  FETCH_CURRENT_YEAR_USAGE_VOLUME_SUCCESS  
} from '../../constants/usageActionsTypes';
import ApiRequest from '../../utils/api-request';

export const fetchCurrentYearUsagePerDateBegin = () => ({
  type: FETCH_CURRENT_YEAR_USAGE_PER_DATE_BEGIN
});

export const fetchCurrentYearUsagePerDateSucess = (refills) => ({
  type: FETCH_CURRENT_YEAR_USAGE_PER_DATE_SUCCESS,
  payload: refills
});

export const fetchCurrentYearUsagePerDateFailure = (error) => ({
  type: FETCH_CURRENT_YEAR_USAGE_PER_DATE_FAILURE,
  payload: error
});

export const fetchCurrentYearUsageVolumeBegin = () => ({
  type: FETCH_CURRENT_YEAR_USAGE_VOLUME_BEGIN
});

export const fetchCurrentYearUsageVolumeSucess = (count) => ({
  type: FETCH_CURRENT_YEAR_USAGE_VOLUME_SUCCESS,
  payload: count
});

export const fetchCurrentYearUsageVolumeFailure = (error) => ({
  type: FETCH_CURRENT_YEAR_USAGE_VOLUME_FAILURE,
  payload: error
});

export function fetchCurrentYearUsagePerDate() {
  return ApiRequest.fetch(
    '/usage/currentYear',
    fetchCurrentYearUsagePerDateBegin,
    (json) => fetchCurrentYearUsagePerDateSucess(parseResponse(json)),
    fetchCurrentYearUsagePerDateFailure
  );
}

export function fetchCurrentYearUsageVolume() {
  return ApiRequest.fetch(
    '/usage/currentYear/count',
    fetchCurrentYearUsageVolumeBegin,
    fetchCurrentYearUsageVolumeSucess,
    fetchCurrentYearUsageVolumeFailure
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
    usagePerDate: data
  };
}
