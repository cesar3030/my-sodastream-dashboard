import { 
  FETCH_ALL_RELOADS_FAILURE, 
  FETCH_ALL_RELOADS_BEGIN, 
  FETCH_ALL_RELOADS_SUCCESS,
} from '../../constants/reloadActionsTypes';
import ApiRequest from '../../utils/api-request';


export const fetchAllReloadsBegin = () => ({
  type: FETCH_ALL_RELOADS_BEGIN
});

export const fetchAllReloadsSuccess = (reloads) => ({
  type: FETCH_ALL_RELOADS_SUCCESS,
  payload: reloads
});

export const fetchAllReloadsFailure = (error) => ({
  type: FETCH_ALL_RELOADS_FAILURE,
  payload: error
});

export function fetchAllReloads() {
  return ApiRequest.fetch(
    '/reloads',
    fetchAllReloadsBegin,
    fetchAllReloadsSuccess,
    fetchAllReloadsFailure
  );
}