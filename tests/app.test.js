const request = require('supertest');
const app = require('../src/app');

describe('API Tasks', () => {

  it('GET /tasks should return empty array', async () => {
    const res = await request(app).get('/tasks');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([]);
  });

  it('POST /tasks should create a task', async () => {
    const res = await request(app)
      .post('/tasks')
      .send({ name: 'Test task' });

    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe('Test task');
  });

  it('DELETE /tasks/:id should delete a task', async () => {
    const create = await request(app)
      .post('/tasks')
      .send({ name: 'Task to delete' });

    const id = create.body.id;

    const res = await request(app).delete(`/tasks/${id}`);

    expect(res.statusCode).toBe(204);
  });

});
