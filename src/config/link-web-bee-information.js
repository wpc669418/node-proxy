const URL_MPS = [
    {
      prefixPath: '/api/',
      target: 'http://dptest.xxx.cn/',
    //   target: 'http://dpdev.linkmcn.cn/',
      note: '测试、预发、正式环境代理',
      pathRewrite: {
        '^/api/': '',
      },
    },
    {
      prefixPath: '/',
      target: 'http://localhost:10003',
      note: '测试、预发、正式环境代理',
    },
  ]
  
  const PORT = 3200
  
  module.exports = {
    PORT,
    URL_MPS
  } 