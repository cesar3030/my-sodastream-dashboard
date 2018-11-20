import { Reload } from '.';

export default class ReloadService {
  static getCurrentReloadState() {
    return Reload.find().sort({createdAt: '-1'}).limit(1)
  }
}
