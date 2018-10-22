import { BOX_CLICK } from '../constants/action-types'

export const boxClick = boxId => ({ type: BOX_CLICK, payload: boxId });
