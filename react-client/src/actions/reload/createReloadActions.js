import {
  CREATE_RELOAD_FAILURE, 
  CREATE_RELOAD_BEGIN, 
  CREATE_RELOAD_SUCCESS
} from '../../constants/reloadActionsTypes';
import ApiRequest from '../../utils/api-request';

export const createReloadsBegin = () => ({
  type: CREATE_RELOAD_BEGIN
});

export const createReloadsSuccess = (reload) => ({
  type: CREATE_RELOAD_SUCCESS,
  payload: reload
});

export const createReloadsFailure = (error) => ({
  type: CREATE_RELOAD_FAILURE,
  payload: error
});

export function createReload(price) {
  return ApiRequest.post(
    '/reloads',
    { price: price },
    createReloadsBegin,
    createReloadsSuccess,
    createReloadsFailure
  );
}
