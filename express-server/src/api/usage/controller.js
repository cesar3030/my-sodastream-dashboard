import UsageService from './service';
import { success, notFound } from '../../services/response/';

export const index = ({}, res, next) =>
  res.status(200).json([{"2018-10-10": 3.45}])

export const currentWeekUsagePerDate = ({}, res, next) =>
  UsageService.getCurrentWeekUsagePerDate()
    .then(success(res))
    .catch(next)

export const currentWeekUsageCount = ({}, res, next) =>
  UsageService.getCurrentWeekUsageCount()
    .then(success(res))
    .catch(next)