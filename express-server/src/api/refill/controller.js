import { success, notFound } from '../../services/response/'
import { Refill } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Refill.create(body)
    .then((refill) => refill.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Refill.find(query, select, cursor)
    .then((refills) => refills.map((refill) => refill.view()))
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

export const currentWeekRefills = ({ params }, res, next) => {
  success(res)({
    "Monday": 10,
    "Tuesday": 3,
    "Wednesday": 8,
    "Thursday": 1,
    "Friday": 3,
    "Saturday": 4,
    "Sunday":7
  });
};