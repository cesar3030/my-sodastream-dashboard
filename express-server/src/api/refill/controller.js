import { success, notFound } from '../../services/response/';
import { Refill } from '.';
import RefillsService from './service.js';
import moment from 'moment-timezone';
import { timezone } from '../../config';

export const create = ({ bodymen: { body } }, res, next) =>
  Refill.create(body)
    .then((refill) => refill.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Refill.find(query, select, cursor)
    .then((refills) => refills.map((refill) => refill.view()))
    .then((refillsUtc) => refillsUtc.map((refill) => ({...refill, createdAt: moment(refill.createdAt).tz(timezone).format("YYYY-MM-DD HH:mm:ss")})))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Refill.findById(params.id)
    .then(notFound(res))
    .then((refill) => refill ? refill.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Refill.findById(params.id)
    .then(notFound(res))
    .then((refill) => refill ? Object.assign(refill, body).save() : null)
    .then((refill) => refill ? refill.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Refill.findById(params.id)
    .then(notFound(res))
    .then((refill) => refill ? refill.remove() : null)
    .then(success(res, 204))
    .catch(next)

export const currentWeekRefills = ({}, res, next) =>
  RefillsService.getCurrentWeekRefillsPerDate()
    .then(success(res))
    .catch(next)

export const currentWeekRefillsCount = ({}, res, next) =>
  RefillsService.getCurrentWeekRefillsCount()
    .then(success(res))
    .catch(next)

export const currentMonthRefills = ({}, res, next) =>
  RefillsService.getCurrentMonthRefillsPerDate()
    .then(success(res))
    .catch(next)

export const currentMonthRefillsCount = ({}, res, next) =>
  RefillsService.getCurrentMonthRefillsCount()
    .then(success(res))
    .catch(next)

export const currentYearRefills = ({}, res, next) =>
  RefillsService.getCurrentYearRefillsPerDate()
    .then(success(res))
    .catch(next)

export const currentYearRefillsCount = ({}, res, next) =>
  RefillsService.getCurrentYearRefillsCount()
    .then(success(res))
    .catch(next)

export const avgRefillElapsedTime = ({}, res, next) =>
    RefillsService.getAverageRefillElapsedTime()
      .then(success(res))
      .catch(next)

export const periodRefills = (req, res, next) => {
  if(req.query.start && req.query.end) {
    let start = moment(req.query.start).hours(0).minutes(0).seconds(0).milliseconds(0);
    let end = moment(req.query.end).hours(0).minutes(0).seconds(0).milliseconds(0);
    
    if(start.isBefore(end)) {
      return RefillsService.getRefillsPerDatesBetweenDates(start, end)
        .then(success(res))
        .catch(next)
    }
  }
  next();
}
  