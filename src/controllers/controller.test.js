const app = require('node-challenge/src/controllers/controller.ts');
const request = require('supertest');
const {listGitHub} = require('./mocks.js')

test('Testando Api GitHub', async () => {
    const name = "a";
    const response = request(app).get(`https://api.github.com/users/${name}`);

    expect(response.body).toEqual(listGitHub);
  });



  test("Testando usuário inexistente", 

  )