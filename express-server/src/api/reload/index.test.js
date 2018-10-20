import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Reload } from '.'

const app = () => express(apiRoot, routes)

let reload

beforeEach(async () => {
  reload = await Reload.create({})
})

test('POST /reloads 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
})

test('GET /reloads 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /reloads/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${reload.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(reload.id)
})

test('GET /reloads/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /reloads/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${reload.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(reload.id)
})

test('PUT /reloads/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('DELETE /reloads/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${reload.id}`)
  expect(status).toBe(204)
})

test('DELETE /reloads/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
