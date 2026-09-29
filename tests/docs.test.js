const request = require('supertest');
const app = require('../src/app');

describe('Docs API', () => {
  it('should upload a spec', async () => {
    const res = await request(app)
      .post('/api/docs/upload')
      .send({ spec: 'swagger content here' })
      .set('Authorization', 'Bearer testtoken');

    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Spec uploaded successfully');
  });

  it('should fetch a generated doc', async () => {
    const res = await request(app)
      .get('/api/docs/123')
      .set('Authorization', 'Bearer testtoken');

    expect(res.statusCode).toBe(200);
    expect(res.body.docId).toBe('123');
  });

  it('should download a PDF', async () => {
    const res = await request(app)
      .get('/api/docs/123/pdf')
      .set('Authorization', 'Bearer testtoken');

    expect(res.statusCode).toBe(200);
    expect(res.body.pdf).toBeDefined();
  });
});
