const ZENTAO_URL = 'http://192.168.71.212';
const CONFLUENCE_URL = 'http://192.168.29.218:8888';
const GITEE_URL = 'https://gitee.com';

// two page Menu
const TWO_PAGE_MENU = [
  { // swagger
    title: 'swagger',
    name: 'swagger',
    urls: [
      {
        name: '活动服务',
        img: 'img/swagger.png',
        url: 'http://test-api.intra.casstime.com/activity-service/swagger-ui.html#/'
      },
      {
        name: '积分服务',
        img: 'img/swagger.png',
        url: 'http://test-api.intra.casstime.com/point-service/swagger-ui.html#/',
      },
      {
        name: '店铺服务',
        img: 'img/swagger.png',
        url: 'http://test-api.intra.casstime.com/store-service/swagger-ui.html#/',
      },
      {
        name: '优惠券服务',
        img: 'img/swagger.png',
        url: 'http://test-api.intra.casstime.com/coupon-service/swagger-ui.html#/',
      },
      {
        name: '购物车服务',
        img: 'img/swagger.png',
        url: 'http://test-api.intra.casstime.com/cart-service/swagger-ui.html#/',
      },
      {
        name: '订单提交接口',
        img: 'img/swagger.png',
        url: 'http://test-api.intra.casstime.com/ofc-service/swagger-ui.html#/',
      },
      {
        name: '支付服务',
        img: 'img/swagger.png',
        url: 'http://test-api.intra.casstime.com/financial-service/swagger-ui.html#/',
      },
      {
        name: '用户服务',
        img: 'img/swagger.png',
        url: 'http://test-api.intra.casstime.com/user-service/swagger-ui.html#/',
      },
      {
        name: '商家优惠服务',
        img: 'img/swagger.png',
        url: 'http://test-api.intra.casstime.com/discount-service/swagger-ui.html#/',
      },
      {
        name: '积分商品服务',
        img: 'img/swagger.png',
        url: 'http://test-api.intra.casstime.com/pointshop-service/swagger-ui.html#/',
      },
      {
        name: '广告服务',
        img: 'img/swagger.png',
        url: 'http://test-api.intra.casstime.com/advertisement-service/swagger-ui.html#/',
      },
      {
        name: '发票服务',
        img: 'img/swagger.png',
        url: 'http://test-api.intra.casstime.com/invoice-service/swagger-ui.html#/',
      },
      {
        name: '商品服务',
        img: 'img/swagger.png',
        url: 'http://test-api.intra.casstime.com/product-service/product/swagger-ui.html#/',
      },
      {
        name: '售前服务',
        img: 'img/swagger.png',
        url: 'http://test-api.intra.casstime.com/presale-service/swagger-ui.html#/',
      },
      {
        name: '询价服务',
        img: 'img/swagger.png',
        url: 'http://192.168.29.218:8888/pages/viewpage.action?pageId=1998850',
      },
      {
        name: 'terminal服务',
        img: 'img/swagger.png',
        url: 'http://192.168.71.86:10030/documentation#!/companies/getCompaniesCompanyid',
      }
    ]
  },
  { // tapd wiki
    title: 'tapd',
    name: 'TAPD',
    urls: {
      name: '电商平台知识库',
      img: 'img/tapd.png',
      url: 'https://www.tapd.cn/37925682/markdown_wikis/#1137925682001000099'
    }
  },
  { // aliyun
    title: 'aliyun',
    name: '阿里云',
    urls: {
      name: '日志查看',
      img: 'img/aliyun.png',
      url: 'https://sls.console.aliyun.com/?spm=5176.10560872.1.1.105234c0y4r26I#/',
    }
  },
  { // 测试环境
    title: 'test',
    name: '测试环境',
    urls: [
      {
        name: 'PC电商平台',
        img: 'img/test.png',
        url: 'https://ec-test.casstime.com/market/portal'
      },
      {
        name: '卖家中心',
        img: 'img/test.png',
        url: 'https://ec-test.casstime.com/sellerMgr/index'
      },
      {
        name: '管理中心',
        img: 'img/test.png',
        url: 'https://ec-test.casstime.com/systemMgr/admin'
      },
      {
        name: '小马客户端下载',
        img: 'img/test.png',
        url: 'http://cassnotify.oss-cn-shenzhen.aliyuncs.com/cassim-test/release-nw/%E5%BC%80%E6%80%9D%E5%B0%8F%E9%A9%ACSetup.exe'
      }
    ]
  },
  { // 演示环境
    title: 'test',
    name: '测试环境',
    urls: [
      {
        name: 'PC电商平台',
        img: 'img/test.png',
        url: 'https://ec-demo.casstime.com/market/portal'
      },
      {
        name: '卖家中心',
        img: 'img/test.png',
        url: 'https://ec-demo.casstime.com/sellerMgr/index'
      },
      {
        name: '管理中心',
        img: 'img/test.png',
        url: 'https://ec-demo.casstime.com/systemMgr/admin'
      },
      {
        name: '小马客户端下载',
        img: 'img/test.png',
        url: 'http://cassnotify.oss-cn-shenzhen.aliyuncs.com/cassim-demo/release-nw/%E5%BC%80%E6%80%9D%E5%B0%8F%E9%A9%ACSetup.exe'
      }
    ]
  },
  { // 组件库
    title: 'component',
    name: '组件库',
    urls: {
      name: 'bricks组件库',
      img: 'img/test.png',
      url: 'https://gitee.com/cassfrontend/bricks',
    }
  }
];

const THREE_PAGE_MENU = [
  {
    title: 'floor_1',
    name: '社区论坛',
    urls: [
      {
        name: 'Github',
        img: 'img/github.png',
        url: 'https://github.com/'
      },
      {
        name: 'Stack Overflow',
        img: 'img/stackoverflow.png',
        url: 'https://stackoverflow.com/'
      },
      {
        name: '掘金',
        img: 'img/juejin.png',
        url: 'https://juejin.im/'
      },
      {
        name: 'CSDN',
        img: 'img/csdn.png',
        url: 'https://www.csdn.net/'
      },
      {
        name: 'CNode',
        img: 'img/cnode.png',
        url: 'https://cnodejs.org/'
      }
    ]
  },
  {
    title: 'floor_2',
    name: '框架类库',
    urls: [
      {
        name: 'React Native',
        img: 'img/reactnative.png',
        url: 'https://reactnative.cn/'
      },
      {
        name: 'React',
        img: 'img/react.png',
        url: 'https://reactjs.org/'
      },
      {
        name: 'Vue',
        img: 'img/vue.png',
        url: 'https://cn.vuejs.org/'
      },
      {
        name: 'Jquery',
        img: 'img/jquery.png',
        url: 'https://jquery.com/'
      },
      {
        name: 'Bootstrap',
        img: 'img/bootstrap.png',
        url: 'http://www.bootcss.com/'
      },
    ]
  },
  {
    title: 'floor_3',
    name: '状态管理',
    urls: [
      {
        name: 'Redux',
        img: 'img/redux.svg',
        url: 'https://cn.redux.js.org/'
      },
      {
        name: 'Mobx',
        img: 'img/mobx.png',
        url: 'https://cn.mobx.js.org/'
      },
      {
        name: 'Vuex',
        img: 'img/vue.png',
        url: 'https://vuex.vuejs.org/zh/guide/'
      }
    ]
  },
  {
    title: 'floor_4',
    name: '第三方类库',
    urls: [
      {
        name: 'Ant Design',
        img: 'img/antdesign.svg',
        url: 'https://ant.design/'
      },
      {
        name: 'Element',
        img: 'img/element.svg',
        url: 'http://element-cn.eleme.io/#/'
      },
      {
        name: 'Redux Saga',
        img: 'img/redux.svg',
        url: 'https://redux-saga-in-chinese.js.org/docs/introduction/BeginnerTutorial.html'
      },
      {
        name: 'Lodash',
        img: 'img/lodash.png',
        url: 'https://www.lodashjs.com/'
      },
      {
        name: 'React Navigation',
        img: '',
        url: 'https://reactnavigation.org/zh-Hans/'
      }
    ]
  },
  {
    title: 'floor_5',
    name: '构建工具',
    urls: [
      {
        name: 'Webpack',
        img: 'img/webpack.svg',
        url: 'https://www.webpackjs.com/'
      },
      {
        name: 'Gulp',
        img: 'img/gulp.svg',
        url: 'https://www.gulpjs.com.cn/'
      },
      {
        name: 'Babel',
        img: 'img/babel.png',
        url: 'https://www.babeljs.cn/'
      },
      {
        name: 'Typescript',
        img: 'img/typescript.png',
        url: 'https://zhongsp.gitbooks.io/typescript-handbook/'
      }
    ]
  },
  {
    title: 'floor_6',
    name: '客户端开发',
    urls: [
      {
        name: 'NW.js',
        img: 'img/nw.png',
        url: 'https://nwjs.org.cn/'
      },
      {
        name: 'Electron',
        img: 'img/electron.jpg',
        url: 'https://electronjs.org/'
      },
    ]
  },
  {
    title: 'floor_7',
    name: '学习手册',
    urls: [
      {
        name: 'React 小书',
        img: 'img/react.png',
        url: 'http://huziketang.mangojuice.top/books/react/'
      },
      {
        name: 'Typescript 入门教程',
        img: 'img/typescript.png',
        url: 'https://ts.xcatliu.com/'
      },
      {
        name: 'flex 布局',
        img: '',
        url: 'http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html'
      },
      {
        name: 'hapi小书',
        img: 'img/hapi.png',
        url: 'http://www.tup.tsinghua.edu.cn/upload/books/yz/075002-01.pdf'
      },
      {
        name: '函数式编程',
        img: '',
        url: 'https://llh911001.gitbooks.io/mostly-adequate-guide-chinese/content/'
      }
    ]
  },
  {
    title: 'floor_8',
    name: 'CSS相关',
    urls: [
      {
        name: 'Sass',
        img: 'img/sass.svg',
        url: 'https://sass-guidelin.es/zh/'
      },
      {
        name: 'Less',
        img: 'img/less.svg',
        url: 'http://lesscss.cn/'
      }
    ]
  },
  {
    title: 'floor_9',
    name: 'node相关',
    urls: [
      {
        name: 'express',
        img: 'img/express.png',
        url: 'http://www.expressjs.com.cn/'
      },
      {
        name: 'hapi',
        img: 'img/hapi.png',
        url: 'https://hapijs.com/'
      },
    ]
  },
  {
    title: 'floor_10',
    name: '字体图标',
    urls: [
      {
        name: '阿里图标',
        img: 'img/alitubiao.png',
        url: 'http://iconfont.cn/'
      }
    ]
  },
  {
    title: 'floor_11',
    name: 'IDE',
    urls: [
      {
        name: 'Webstorm',
        img: 'img/webstorm.jpg',
        url: 'https://www.jetbrains.com/webstorm/'
      },
      {
        name: 'VS Code',
        img: 'img/vscode.png',
        url: 'https://code.visualstudio.com/'
      }
    ]
  },
  {
    title: 'floor_12',
    name: '在线工具',
    urls: [
      {
        name: 'Can I Use',
        img: 'img/caniuse.png',
        url: 'https://caniuse.com/'
      }
    ]
  },
  {
    title: 'floor_13',
    name: '语言标准',
    urls: [
      {
        name: 'MDN',
        img: 'img/mdn.png',
        url: 'https://developer.mozilla.org/zh-CN/docs/Web'
      },
      {
        name: 'ECMAScript',
        img: 'img/ecma.png',
        url: 'https://ecma262.docschina.org/'
      },
      {
        name: 'Node.js',
        img: 'img/node.png',
        url: 'http://nodejs.cn/'
      }
    ]
  }
];
