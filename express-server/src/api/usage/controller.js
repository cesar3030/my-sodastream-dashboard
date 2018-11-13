import UsageService from './service';
import { success, notFound } from '../../services/response/';

export const index = ({}, res, next) =>
  res.status(200).json([{"2018-10-10": 3.45}])

export const currentWeekUsagePerDate = ({}, res, next) =>
  UsageService.getCurrentWeekUsagePerDate()
    .then(success(res))
    .catch(next)

export const currentWeekUsageVolume = ({}, res, next) =>
  UsageService.getCurrentWeekUsageVolume()
    .then(success(res))
    .catch(next)

export const currentMonthUsagePerDate = ({}, res, next) =>
  UsageService.getCurrentMonthUsagePerDate()
    .then(success(res))
    .catch(next)

export const currentMonthUsageVolume = ({}, res, next) =>
  UsageService.getCurrentMonthUsageVolume()
    .then(success(res))
    .catch(next)
  
export const currentYearUsagePerDate = ({}, res, next) =>
  UsageService.getCurrentYearUsagePerDate()
    .then(success(res))
    .catch(next)

export const currentYearUsageVolume = ({}, res, next) =>
  UsageService.getCurrentYearUsageVolume()
    .then(success(res))
    .catch(next)