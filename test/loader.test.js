'use strict';

const mock = require('egg-mock');

describe('test/loader.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/loader',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /swagger-ui.html', () => {
    return app
      .httpRequest()
      .get('/swagger-ui.html')
      .expect(200);
  });

  it('should GET /swagger-doc', () => {
    return app
      .httpRequest()
      .get('/swagger-doc')
      .expect(200);
  });
});
