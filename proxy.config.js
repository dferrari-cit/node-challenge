const proxy = [
    {
      context: ['/api'],
      target: 'http://localhost:3010',
      pathRewrite: {'^/api' : ''}
    }
  ];
  module.exports = proxy;