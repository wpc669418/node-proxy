// 羚客 mcn项目
const URL_MPS = [
  {
    prefixPath: '/api/mock1/',
    target: 'http://10.10.0.121:3000/mock/41',
    note: 'yapi',
    pathRewrite: {
      '^/api/mock/': '/'
    }
  },
  {
    prefixPath: '/api/mock1111111111111/',
    target: 'http://10.10.0.121:3000/mock/41',
    note: 'yapi',
    // pathRewrite: {
    //   '^/api/mock/': '/'
    // }
  },
  {
    prefixPath: '/api/',
    target: 'http://testapi.xxxx.cn',
    note: '测试、预发、正式环境代理',
    pathRewrite: {
      '^/api/': '/'
    }
  },
  {
    prefixPath: '/sample',
    target: 'http://localhost:9581',
    note: 'xx'
  },
  {
    prefixPath: '/taoke',
    target: 'http://localhost:9582',
    note: 'xx'
  },
  {
    prefixPath: '/proTest',
    target: 'http://localhost:9571',
    note: 'xx'
  },
  {
    prefixPath: '/fullOrganization',
    target: 'http://localhost:9570',
    note: 'xx'
  },
  {
    prefixPath: '/supply',
    target: 'http://localhost:9569',
    note: 'xx'
  },
  {
    prefixPath: '/organization',
    target: 'http://localhost:9567',
    note: '机构端'
  },
  {
    prefixPath: '/seller',
    target: 'http://localhost:9568',
    note: 'xx'
  },
  {
    prefixPath: '/streamer',
    target: 'http://localhost:9566',
    note: 'xx'
  },
  {
    prefixPath: '/platform',
    target: 'http://localhost:9565',
    note: '平台端'
  },
  {
    prefixPath: '/cloud',
    target: 'http://localhost:9580',
    note: 'xx'
  },
  {
    prefixPath: '/',
    target: 'http://localhost:8383',
    note: '主站'
  }
]



const PORT = 3100

module.exports = {
  PORT,
  URL_MPS
} 
