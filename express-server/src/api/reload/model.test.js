import { Reload } from '.'

let reload

beforeEach(async () => {
  reload = await Reload.create({})
})

describe('view', () => {
  it('returns simple view', () => {
    const view = reload.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(reload.id)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = reload.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(reload.id)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
