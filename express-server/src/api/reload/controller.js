import { success, notFound } from '../../services/response/'
import { Reload } from '.'

export const create = ({ body }, res, next) =>
  Reload.create(body)
    .then((reload) => reload.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Reload.find(query, select, cursor)
    .then((reloads) => reloads.map((reload) => reload.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Reload.findById(params.id)
    .then(notFound(res))
    .then((reload) => reload ? reload.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ body, params }, res, next) =>
  Reload.findById(params.id)
    .then(notFound(res))
    .then((reload) => reload ? Object.assign(reload, body).save() : null)
    .then((reload) => reload ? reload.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Reload.findById(params.id)
    .then(notFound(res))
    .then((reload) => reload ? reload.remove() : null)
    .then(success(res, 204))
    .catch(next)
