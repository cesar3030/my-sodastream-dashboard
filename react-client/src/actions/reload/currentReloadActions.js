import { 
  FETCH_CURRENT_RELOAD_FAILURE, 
  FETCH_CURRENT_RELOAD_BEGIN, 
  FETCH_CURRENT_RELOAD_SUCCESS
} from '../../constants/reloadActionsTypes';
import ApiRequest from '../../utils/api-request';


export const fetchCurrentReloadBegin = () => ({
  type: FETCH_CURRENT_RELOAD_BEGIN
});

export const fetchCurrentReloadSucess = (reload) => ({
  type: FETCH_CURRENT_RELOAD_SUCCESS,
  payload: reload
});

export const fetchCurrentReloadFailure = (error) => ({
  type: FETCH_CURRENT_RELOAD_FAILURE,
  payload: error
});

export function fetchCurrentReload() {
  return ApiRequest.fetch(
    '/reloads/current/stats',
    fetchCurrentReloadBegin,
    fetchCurrentReloadSucess,
    fetchCurrentReloadFailure
  );
}