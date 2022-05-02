const proxy = [
    {
      context: ['/api'],
      target: 'http://localhost:3007',
      pathRewrite: {'^/api' : ''}
    }
  ];
  module.exports = proxy;