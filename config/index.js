const ZENTAO_URL = 'http://192.168.71.212';
const CONFLUENCE_URL = 'http://192.168.29.218:8888';
const GITEE_URL = 'https://gitee.com';

// swagger
const SWAGGER_URLS = [
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
  }
];

// tapd wiki
const TAPD_URLS = {
  name: '电商平台知识库',
  img: 'img/tapd.png',
  url: 'https://www.tapd.cn/37925682/markdown_wikis/#1137925682001000099'
};

// aliyun
const ALIYUN_URLS = {
  name: '日志查看（用户名：logger, 密码：Casstime88*）',
  img: 'img/aliyun.png',
  url: 'https://sls.console.aliyun.com/?spm=5176.10560872.1.1.105234c0y4r26I#/',
}

// 测试环境
const TEST_URLS = [
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
];

// 演示环境
const DEMO_URLS = [
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
];

// 组件库
const COMPONENT_URLS = {
  name: 'bricks组件库',
  img: 'img/test.png',
  url: 'https://gitee.com/cassfrontend/bricks',
};

// 前端社区
const COMMUNITY = [
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
];

// 框架类库
const FRAME = [
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
];

// 状态管理
const STATE = [
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
];

// 第三方类库
const OTHER_FRAME = [
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
  }
];

// 构建工具
const BUILD = [
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
];

// 学习手册
const STUDY_BOOK = [
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
  }
];

// CSS相关
const CSS_TOOLS = [
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
];

// node 相关
const NODE = [
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
];

// 字体图标
const FONT = [
  {
    name: '阿里图标',
    img: 'img/alitubiao.png',
    url: 'http://iconfont.cn/'
  }
];

// IDE
const IDE = [
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
];

// 在线工具
const ONLINE_TOOL = [
  {
    name: 'Can I Use',
    img: 'img/caniuse.png',
    url: 'https://caniuse.com/'
  }
];

// 客户端开发
const CLIENT = [
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
];

// 语言标准
const STANDARD = [
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
];