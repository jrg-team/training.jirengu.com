const titleConfig = {
  yinghekongjian: `<h1>真正的硬核<br/>是用技术开创自己的世界</h1>`,
  jirengu: `<h1>2023版前端全新体系课程</h1>`,
  cplusplus: `<h1>2023版C++全新体系课程</h1>`,
  english: `<h1>程序员英语求职训练营</h1>`,
};

const navigatorConfig = {
  jirengu: {
    name: "饥人谷",
    link: "https://training.jirengu.com",
    miniImage:
      "//static.xiedaimala.com/xdml/image/5939aa7c-d446-47c4-a9c1-ea1e52b10249/2021-7-19-15-6-24.png",
    alias: "饥人谷前端",
    node: [
      {
        title: "饥人谷",
        expanded: true,
        children: [
          { title: "介绍", link: "/" },
          { title: "课程详情", link: "/new/detail" },
          { title: "教学模式", link: "/new/mode" },
          { title: "课程项目", link: "/new/projects" },
          { title: "关于我们", link: "/new/about" },
          { title: "回到旧版", link: "/old" },
          {
            title: "前端交流群",
            link:
              "https://static.xiedaimala.com/xdml/file/6e556a51-b8ff-466f-bda6-7d1847e39f2e/2019-11-19-16-3-7.jpg",
            text: "添加客服微信：xiedaimala03，<br/>备注 前端群",
          },
        ],
      },
      {
        title: "学习平台",
        expanded: false,
        link: "https://xiedaimala.com",
      },
      {
        title: "学员评价",
        expanded: false,
        link: "https://www.zhihu.com/question/41845934",
      },
      {
        title: "就业数据",
        expanded: false,
        link: "https://blog.jirengu.com/?cat=11",
      },
      {
        title: "河码社区",
        expanded: false,
        link: "https://xiedaimala.com/bbs",
      },
    ],
    icon: "hcsp-jrg-logo-white",
  },
  yinghekongjian: {
    name: "饥人谷Java",
    alias: "饥人谷Java",
    link: "https://training.jirengu.com/java",
    miniImage:
      "//static.xiedaimala.com/xdml/image/5939aa7c-d446-47c4-a9c1-ea1e52b10249/2021-7-19-15-6-19.png",
    node: [
      {
        title: "饥人谷Java",
        expanded: true,
        children: [
          { title: "介绍", link: "/java" },
          { title: "课程详情", link: "/java/detail" },
          { title: "教学模式", link: "/java/mode" },
          { title: "课程项目", link: "/java/projects" },
          { title: "关于我们", link: "/java/about" },
          {
            title: "Java交流群",
            link:
              "https://static.xiedaimala.com/xdml/image/6e556a51-b8ff-466f-bda6-7d1847e39f2e/2019-10-25-10-30-24.png",
            text: "添加客服微信：xiedaimala04，<br/>备注 Java群",
          },
        ],
      },
      {
        title: "饥人谷",
        expanded: false,
        link: "https://training.jirengu.com",
      },
      {
        title: "写代码啦",
        expanded: false,
        link: "https://xiedaimala.com",
      },
      {
        title: "河码社区",
        expanded: false,
        link: "https://xiedaimala.com/bbs",
      },
    ],
    icon: "hcsp-icon-white",
  },
  cplusplus: {
    name: "饥人谷C++",
    alias: "饥人谷C++",
    link: "https://training.jirengu.com/C++/",
    miniImage:
      "//static.xiedaimala.com/xdml/image/5939aa7c-d446-47c4-a9c1-ea1e52b10249/2021-7-19-15-6-16.jpg",
    node: [
      {
        title: "饥人谷C++",
        expanded: true,
        children: [
          { title: "介绍", link: "/C++" },
          { title: "课程详情", link: "/C++/detail" },
          { title: "教学模式", link: "/C++/mode" },
          { title: "课程项目", link: "/C++/projects" },
          { title: "关于我们", link: "/C++/about" },
          {
            title: "C++交流群",
            link:
              "https://static.xiedaimala.com/xdml/file/6e556a51-b8ff-466f-bda6-7d1847e39f2e/2019-11-19-16-3-7.jpg",
            text: "添加客服微信：xiedaimala03，<br/>备注 C++群",
          },
        ],
      },
      {
        title: "学习平台",
        expanded: false,
        link: "https://xiedaimala.com",
      },
      {
        title: "学员评价",
        expanded: false,
        link: "https://www.zhihu.com/question/41845934",
      },
      {
        title: "就业数据",
        expanded: false,
        link: "https://blog.jirengu.com/?cat=11",
      },
      {
        title: "河码社区",
        expanded: false,
        link: "https://xiedaimala.com/bbs",
      },
    ],
    icon: "hcsp-jrg-logo-white",
  },
  english: {
    name: "饥人谷",
    link: "https://training.jirengu.com/english",
    miniImage:
      "//static.xiedaimala.com/xdml/image/5939aa7c-d446-47c4-a9c1-ea1e52b10249/MjAyMi02LTE3LTExLTYtMjMtMzQw.jpg",
    alias: "英语训练营",
    node: [
      {
        title: "饥人谷",
        expanded: true,
        children: [
          { title: "介绍", link: "/english" },
          { title: "课程详情", link: "/english/detail" },
          { title: "教学模式", link: "/english/mode" },
          { title: "关于我们", link: "/english/about" },
          {
            title: "英语交流群",
            link:
              "https://static.xiedaimala.com/xdml/file/6e556a51-b8ff-466f-bda6-7d1847e39f2e/2019-11-19-16-3-7.jpg",
            text: "添加客服微信：xiedaimala03，<br/>备注 程序员英语群",
          },
        ],
      },
      {
        title: "学习平台",
        expanded: false,
        link: "https://xiedaimala.com",
      },
      {
        title: "河码社区",
        expanded: false,
        link: "https://xiedaimala.com/bbs",
      },
    ],
    icon: "hcsp-jrg-logo-white",
  },
};

const footerConfig = {
  yinghekongjian: {
    wechatQrCode:
      "https://static.xiedaimala.com/xdml/image/6e556a51-b8ff-466f-bda6-7d1847e39f2e/2019-10-25-10-30-24.png",
    weiboQrcode:
      "https://training.jirengu.com/addons/theme/hunger-new/weibo_qr.10a01022.png",
    record: "浙ICP备19022409号-1",
    pcItems: [
      [
        {
          title: "Java系统课",
          children: [
            {
              text: "2023版Java体系课「彰德」",
              link:
                "https://xiedaimala.com/courses/9990a941-54a0-4e76-9f53-d09bf01e5136#/common",
            },
            {
              text: "Java后端精进体系课",
              link:
                "https://xiedaimala.com/courses/a8fc2a00-cd14-4f1c-9a96-c7d7a7cef27b#/common",
            },
          ],
        },
      ],
      [
        {
          title: "Java专题课",
          children: [
            {
              text: "算法系列",
              link:
                "https://xiedaimala.com/courses/118b5d4e-c080-4ed7-ab55-9e7b8d175d2f#/common",
            },
            {
              text: "微服务架构",
              link:
                "https://xiedaimala.com/courses/730db4a0-6927-467d-b725-589017848952#/common",
            },
            {
              text: "Java8特性",
              link:
                "https://xiedaimala.com/courses/297dd624-50a3-435a-9e0c-5fa8f79042fd#/common",
            },
            {
              text: "Java SpringBoot系列",
              link:
                "https://xiedaimala.com/courses/77e47726-196c-4dc6-a3ee-18caaa277e8e#/common",
            },
            {
              text: "Java 动手实现核心集合",
              link:
                "https://xiedaimala.com/courses/f62a5460-ca25-43c7-951d-be4f8981e823#/common",
            },
            {
              text: "Java Collection 深入浅出",
              link:
                "https://xiedaimala.com/courses/67ce674c-180e-4ae3-a799-19a22c0f8908#/common",
            },
          ],
        },
      ],
      [
        {
          title: "更多产品",
          children: [
            { text: "饥人谷Java", link: "https://training.jirengu.com/java" },
            { text: "写代码啦", link: "https://xiedaimala.com" },
            { text: "河码", link: "https://xiedaimala.com/bbs" },
            { text: "Hunger Works", link: "http://hungerworks.com/" },
          ],
        },
      ],
      [
        {
          title: "关于 饥人谷Java",
          children: [{ text: "关于我们", link: "about" }],
        },
        {
          title: "合作伙伴",
          children: [{ text: "leanote", link: "https://leanote.com/" }],
        },
      ],
    ],
  },
  jirengu: {
    wechatQrCode:
      "https://static.xiedaimala.com/xdml/file/6e556a51-b8ff-466f-bda6-7d1847e39f2e/2019-11-19-16-3-7.jpg",
    weiboQrcode:
      "https://training.jirengu.com/addons/theme/hunger-new/weibo_qr.10a01022.png",
    record: "浙ICP备14041127号",
    pcItems: [
      [
        {
          title: "前端系统课",
          children: [
            {
              text: "体系课程-若愚",
              link:
                "https://xiedaimala.com/courses/57912a9b-6325-4d5e-a3cf-39fe676b99fa#/common",
            },
            {
              text: "体系课程-方方",
              link:
                "https://xiedaimala.com/courses/16644d89-6b17-4c2f-ac15-dabb994b7696#/common",
            },
            {
              text: "前端精进（后端方向）",
              link:
                "https://xiedaimala.com/courses/8757eca2-d1b0-4149-b196-4681670ea275#/common",
            },
            {
              text: "前端精进（科班方向）",
              link:
                "https://xiedaimala.com/courses/9e45f452-6081-4fb1-a43d-75a96dcc2595#/common",
            },
            {
              text: "前端精进（全栈开发）",
              link:
                "https://xiedaimala.com/courses/00a96d39-c34f-49f2-aff8-b2ac0cf8e9dd#/common",
            },
            {
              text: "100天前端冲刺提升班",
              link:
                "https://xiedaimala.com/courses/0a34d733-5d7c-4fec-b477-549a82386c83/random/ba427058ca#/common",
            },
            {
              text: "全栈：小米商场后端实践（Node.js高级）",
              link:
                "https://xiedaimala.com/courses/00a4dd42-e608-443d-a336-d646d1d3a740#/common",
            },
            {
              text: "全栈：小米商场前端实践（Vue.js）",
              link:
                "https://xiedaimala.com/courses/ac4d9e49-0bdc-47c8-8242-b71622367912#/common",
            },
          ],
        },
      ],
      [
        {
          title: "前端专题课",
          children: [
            {
              text: "Vue造轮子",
              link:
                "https://xiedaimala.com/courses/6d63da67-6eea-4711-aeb4-0c3a949341dc#/common",
            },
            {
              text: "React造轮子",
              link:
                "https://xiedaimala.com/courses/f720115a-c84f-4339-8852-951a86840cdd#/common",
            },
            {
              text: "JavaScript系列",
              link:
                "https://xiedaimala.com/search?keyword=JavaScript&type=courses&page=1",
            },
            {
              text: "CSS系列",
              link:
                "https://xiedaimala.com/search?keyword=CSS&type=courses&page=1",
            },
            {
              text: "Vue系列",
              link:
                "https://xiedaimala.com/search?keyword=Vue&type=courses&page=1",
            },
            {
              text: "TypeScript系列",
              link:
                "https://xiedaimala.com/search?keyword=TypeScript&type=courses&page=1",
            },
            {
              text: "React系列",
              link:
                "https://xiedaimala.com/search?keyword=React&type=courses&page=1",
            },
            {
              text: "Http深入浅出",
              link:
                "https://xiedaimala.com/courses/f544f889-4c37-44fb-83e4-84164e0192e0#/common",
            },
            {
              text: "ES6深入浅出",
              link:
                "https://xiedaimala.com/courses/12a78a03-35f9-42ea-9b37-540540460f6e#/common",
            },
            {
              text: "移动端系列",
              link:
                "https://xiedaimala.com/search?keyword=%E7%A7%BB%E5%8A%A8%E7%AB%AF&type=courses&page=1",
            },
            {
              text: "设计模式系列",
              link:
                "https://xiedaimala.com/search?keyword=%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F&type=courses&page=1",
            },
            {
              text: "必会算法",
              link:
                "https://xiedaimala.com/courses/118b5d4e-c080-4ed7-ab55-9e7b8d175d2f#/common",
            },
            {
              text: "Node.js系列",
              link:
                "https://xiedaimala.com/search?keyword=Node.js&type=courses&page=1",
            },
          ],
        },
      ],
      [
        {
          title: "更多产品",
          children: [
            { text: "饥人谷Java", link: "https://training.jirengu.com/java" },
            { text: "写代码啦", link: "https://xiedaimala.com" },
            { text: "河码", link: "https://xiedaimala.com/bbs" },
            { text: "Hunger Works", link: "http://hungerworks.com/" },
          ],
        },
      ],
      [
        {
          title: "关于 饥人谷",
          children: [{ text: "关于我们", link: "/new/about" }],
        },
        {
          title: "合作伙伴",
          children: [{ text: "leanote", link: "https://leanote.com/" }],
        },
      ],
    ],
  },
  cplusplus: {
    wechatQrCode:
      "https://static.xiedaimala.com/xdml/file/6e556a51-b8ff-466f-bda6-7d1847e39f2e/2019-11-19-16-3-7.jpg",
    weiboQrcode:
      "https://training.jirengu.com/addons/theme/hunger-new/weibo_qr.10a01022.png",
    record: "浙ICP备14041127号-1",
    pcItems: null,
  },
  english: {
    wechatQrCode:
      "https://static.xiedaimala.com/xdml/file/6e556a51-b8ff-466f-bda6-7d1847e39f2e/2019-11-19-16-3-7.jpg",
    weiboQrcode:
      "https://training.jirengu.com/addons/theme/hunger-new/weibo_qr.10a01022.png",
    record: "浙ICP备14041127号-1",
    pcItems: null,
  },
};

const videoConfig = {
  yinghekongjian: {
    disabled: false,
    poster:
      "https://static.xiedaimala.com/xdml/image/6e556a51-b8ff-466f-bda6-7d1847e39f2e/2019-9-18-18-0-57.png",
    link: "https://static.xiedaimala.com/hcsp-spread.mp4",
    descriptionUrl: "https://mp.weixin.qq.com/s/GktAwEIvrtaOh6aDzZSGug",
  },
  jirengu: {
    disabled: false,
    poster:
      "https://static.xiedaimala.com/xdml/image/6e556a51-b8ff-466f-bda6-7d1847e39f2e/2019-10-15-16-2-45.png",
    link: "https://www.bilibili.com/video/BV1CV411U71c",
    actionType: "redirect",
    descriptionUrl: "https://mp.weixin.qq.com/s/E08ID-wZwdtg1BdNlSfnKg",
  },
  cplusplus: {
    disabled: true,
    poster:
      "//static.xiedaimala.com/xdml/image/5939aa7c-d446-47c4-a9c1-ea1e52b10249/2021-7-19-14-8-28.jpg",
    link: "https://static.xiedaimala.com/jrg-spread.mp4",
    descriptionUrl: "https://mp.weixin.qq.com/s/Cv-lQzPJOGXuP-0medh0YA",
  },
  english: {
    disabled: false,
    poster:
      "//static.xiedaimala.com/xdml/image/5939aa7c-d446-47c4-a9c1-ea1e52b10249/MjAyMi02LTE3LTExLTYtMTktNDcz.jpg",
    link: "https://static.xiedaimala.com/english-spread.mp4",
    descriptionUrl: "https://mp.weixin.qq.com/s/Y0hnw1cSeieKn6Vh0jyRAw",
  },
};

const previewConfig = {
  yinghekongjian: {
    title: "国内高质量Java教学水平",
    content: [
      {
        title: "先进教学的倡导者",
        items: ["CI机器人review代码", "所有作业严格按照真实开发流程操作"],
      },
      {
        title: "不忘初衷的教育者",
        items: ["全程陪伴学生学习Java", "服务到就业、自我提升"],
      },
      {
        title: "Java领域的先驱者",
        items: ["资深从业人员", "丰富处理复杂bug的经验"],
      },
      {
        title: "真材实料的开发者",
        items: ["全程真实项目", "开发协作打磨技能"],
      },
    ],
    appointmentUrl: "http://jirengu01.mikecrm.com/EjCdM7H",
  },
  jirengu: {
    title: "国内高质量前端教学水平",
    content: [
      {
        title: "先进教学的倡导者",
        items: ["主讲人是阿里资深前端", "创业公司技术负责人"],
      },
      {
        title: "不忘初衷的教育者",
        items: ["全程陪伴学生学习前端", "服务到就业、自我提升"],
      },
      {
        title: "丰富经验的教学者",
        items: ["有 BAT 工作经验是我们讲师的最低标准"],
      },
      {
        title: "真材实料的开发者",
        items: ["全程真实项目", "开发协作打磨技能"],
      },
    ],
    appointmentUrl: "http://jirengu01.mikecrm.com/aJiF27K",
  },
  cplusplus: {
    title: "我们为何要学习C++？",
    content: [
      {
        title: "高性能",
        items: [
          "在对执行效率有严格要求的领域，例如数据库引擎、编程语言编译器、游戏和音视频等领域，C++几乎是无可替代的选择。",
        ],
        class: "cplusplus-course-advantage cplusplus-course-margin-bottom",
      },
      {
        title: "跨语言支持",
        items: [
          "其他诸如Python, Java等各种语言都提供了调用C++库的能力，例如Tensorflow就是用C++实现内核而对外提供Python接口。",
        ],
        class: "cplusplus-course-advantage cplusplus-course-margin-bottom",
      },
      {
        title: "抽象能力",
        items: [
          "支持面向对象、函数式、泛型等编程范式，具有丰富的语义表达能力。",
        ],
        class: "cplusplus-course-advantage",
      },
      {
        title: "兼容C语言",
        items: ["可以很方便地调用操作系统的底层接口。"],
        class: "cplusplus-course-advantage",
      },
      {
        title: "强大的社区",
        items: [
          "开发者中高手众多，Google, Microsoft, Intel, Tencent等大厂均积极参与。",
        ],
        class: "cplusplus-course-advantage",
      },
      {
        title: "完善的工具链",
        items: ["在众多大厂的支持下，拥有完备的编译、调试、分析、优化等工具。"],
        class: "cplusplus-course-advantage",
      },
      {
        title: "灵活性",
        items: [
          "开发者可以自主管理内存、CPU等资源的分配，按需采用不同的策略。",
        ],
        class: "cplusplus-course-advantage",
      },
      {
        title: "不可替代性",
        items: [
          "学习C++可以掌握多种编程范式，掌握阅读其他语言源码的能力，使学会其他语言变得轻松，具有更高的不可替代性。",
        ],
        class: "cplusplus-course-advantage",
      },
    ],
    courseTarget: {
      title: "课程目标",
      items: [
        "熟悉C++语言特性和标准库",
        "掌握计算机科学的基本理论知识和常用算法设计技术",
        "能够独立设计开发一个工程项目",
        "胜任相当于阿里P6及以上的开发工作",
      ],
      class: "cplusplus-course-target cplusplus-course-advantage",
    },
    appointmentUrl: "http://jirengu01.mikecrm.com/xYsaCCj",
  },
  english: {
    title: "帮助你掌握程序员英语技能",
    content: [
      {
        title: "程序员定制版英语课程",
        items: [
          "针对对海外工作机会有兴趣开发者们",
          "对开发岗位有针对性的英语课",
        ],
      },
      {
        title: "不教“哑巴英语”",
        items: [
          "应试的英语教学不能满足英语工作的需求",
          "通过高频次、日常化的英语交流提高口语",
        ],
      },
      {
        title: "针对性的英语求职培训",
        items: [
          "从单次到语法到写作到求职全面学习",
          "打造漂亮的linkedin个人页面、Github个人主页等",
        ],
      },
      {
        title: "英语求职全方位指导",
        items: [
          "有竞争力的英文简历、求职信",
          "面试环节，技术面试/综合面试的技巧培训",
        ],
      },
    ],
    courseTarget: null,
    appointmentUrl: "http://jirengu01.mikecrm.com/BKCqS0k",
  },
};

const teacherConfig = {
  yinghekongjian: {
    teacherList: [
      {
        name: "无隅",
        introduction: `<h3>无隅</h3><h6>从这里开始 带你开启一线大厂工程师之路</h6>
  <p>你好，我是无隅，欢迎加入饥人谷。在接下来的几个月，我会与你一道，一起探索Java与系统架构设计的世界。</p>
  <p>我目前在Amazon担任软件工程师。团队所从事的是公司核心业务，对于大规模的分布式系统，如何更快更稳定尽量不出错永远是技术孜孜不倦乐此不疲追求的目标。我们不需要“差不多”或“还行”的代码，而是需要达到高质量设计与实现的水准。</p>
  <p>一线大厂是很多同学梦寐以求的岗位，大家缺乏的并不是机会，而是通过面试的经验与信心。所以我希望能够将一线研发的经验规范和需要掌握的知识体系在大家初入后端世界的时候就带给大家，让这些经验与理念深入到你的脑海里，有个良好的开端。</p>
  <p>最后我想给大家说的是，学习是一件漫长的事情。自然界的一项根本法则就是为了赢得力量，必须努力突破极限，而这是痛苦的。我们可以选择健康并痛苦的事实，也可以选择不健康但舒适的幻觉。短时间并不能感觉到差别，当你放到很长时间维度里面，坚持一年两年，五年十年.....最后的成就绝对是指数级的差距。所以我希望你能和我坚持下来，共同成长。遇到问题选择的不是逃避，而是努力探寻答案与解决方法。这一次，就让我们一起来探索后端世界的奥秘，一起开启一线大厂工程师之路！</p>
  <p>我在饥人谷会开设如下的一些课程，通过这些模块化的课程，希望能帮助大家系统且有体系地掌握核心知识：
    <a href="https://xiedaimala.com/courses/118b5d4e-c080-4ed7-ab55-9e7b8d175d2f" target="_blank">《程序员的算法课》</a>、
    <a href="https://xiedaimala.com/courses/82f9fd03-2528-4e68-ba42-f3fd7820535d" target="_blank">《从零开始设计模式》</a>、
    <a href="https://xiedaimala.com/courses/730db4a0-6927-467d-b725-589017848952" target="_blank">《微服务架构实战》</a>、
    <a href="https://xiedaimala.com/courses/297dd624-50a3-435a-9e0c-5fa8f79042fd" target="_blank">《Java 8特性实战》</a> 
    未完待续...</p>
  `,
        image:
          "https://static.xiedaimala.com/xdml/image/6e556a51-b8ff-466f-bda6-7d1847e39f2e/2019-9-16-21-34-20.png",
        mobileImage:
          "https://static.xiedaimala.com/xdml/image/6e556a51-b8ff-466f-bda6-7d1847e39f2e/2019-10-22-11-28-40.png",
      },
    ],
  },
  jirengu: {
    teacherList: [
      {
        name: "方方老师",
        introduction: `<h3>方方</h3><h6>方方老师，资深前端开发、饥人谷资深前端讲师。华中科技大学毕业，毕业后先后在腾讯、阿里巴巴和彩程任职</h6>
            <p>你好，我叫方应杭，大家一般叫我方方。我做前端开发已经十年有余了， Vue / React / Angular.js / Angular 等什么都用过，最终我发现，它们都是类似的。</p>
            <p>但令我惊讶的是，新的前端新人似乎觉得这些前端框架水火不容、非此即彼。于是我尝试去了解前端新人的学习方法和路径，并逐渐理解了他/她们为什么认为这些框架差异很大，并为此开发了前端体系课，帮助了很多自学者。</p>
            <p>讲课三年，我逐渐发现「自己会写代码」和「教会别人写代码」是两个完全不同的事情。自己写代码的时候只要让自己理解原理即可，而教会别人写代码的要务则是站在学生的角度，了解他是如何思考问题的，并指出他的问题。并且我还逐渐发现，有的时候新人学不会一个知识，不是因为新人的智商太低，而是因为教材说得不够清晰，老师讲得不够深刻。</p>
            <p>我还发现，学习的重点之一是习惯的养成，很多在职程序员没有写博客、做总结的习惯，导致他们工作两三年后水平停滞不前，最终工资被倒挂，甚至无力跳槽，这其中有一个重要的原因就是他们在入门的时候没有养成良好的学习习惯，比如看书必须记笔记，有了感悟最好写博客记录一下，发现知识盲区一定要去搜索权威文档而不是听信二手知识等等。</p>
            <p>这些习惯我一直都有，并且受益良多。我觉得每个程序员都应该有这些好习惯，因此我在课程中用各种办法培养学生养成这些习惯。</p>
            <p>所以，如果你希望能够在编程（不只是前端）的路上保持前行，也许我的课程可以帮你。</p>`,
        image:
          "https://static.xiedaimala.com/xdml/image/6e556a51-b8ff-466f-bda6-7d1847e39f2e/2019-10-22-16-38-41.png",
        mobileImage:
          "https://static.xiedaimala.com/xdml/image/6e556a51-b8ff-466f-bda6-7d1847e39f2e/2019-10-22-16-38-36.png",
      },
      {
        name: "若愚老师",
        introduction: `<h3>若愚</h3><h6>前百度、阿里巴巴工程师，饥人谷最受欢迎的讲师之一，擅长 Node.js、Vue.js技术栈 ，善于把复杂的问题简单化</h6>
            <p>我是若愚，做开发已接近8年，硕士毕业后在百度做前端开发，后离开北京到了杭州的阿里，之后离职创业成立饥人谷。</p>
            <p>“师者，传道授业解惑也”。作为老师，最低要求是“解惑”，能认真、耐心、负责的解答学生的每一个问题，包括技术问题、学习方法问题、求职问题、职业发展问题。更高的层级是“授业”，能够传承衣钵，让学生真正掌握吃饭的技能，并且能让其顺利入行。最高层级是“传道”，我理解的“传道”也就是饥人谷的使命——<strong>培养有灵魂的前端工程师。</strong></p>
            <p>何为工程师的“灵魂”？</p>
            <ul>
                <li>1. 真实，杜绝弄虚作假</li>
                <li>2. 善于学习、勤于思考、乐于动手</li>
                <li>3. 对极致的向往，对美的追求</li>
                <li>4. 乐观自信不盲从、善于表达会沟通</li>
            </ul>
            <p>5年来亲手送到工作岗位的工程师接近两千人，遍布各大互联网企业包括阿里、百度、腾讯、字节跳动、京东、美团、华为、拼多多、网易、有赞、滴滴、360、facebook等。</p>
            <p>千人千面，但至少有一面是相似的，就是工程师的“灵魂”。</p>`,
        image:
          "https://static.xiedaimala.com/xdml/image/6e556a51-b8ff-466f-bda6-7d1847e39f2e/2019-10-15-15-57-5.png",
        mobileImage:
          "https://static.xiedaimala.com/xdml/file/6e556a51-b8ff-466f-bda6-7d1847e39f2e/2019-10-22-11-31-59.jpg",
      },
    ],
  },
  cplusplus: {
    teacherList: [
      {
        name: "九月老师",
        introduction: `<h3>九月老师</h3><h6>北大硕士，前阿里腾讯C++研发经历<br/><br/>参与设计开发支撑花呗双十一的计算引擎</h6>
            <p>你好，我是九月。</p>
            <p>很多人也许会认为，一门编程语言就是一项独立的技能。但实际并不是这样，<span class="highlight">不同的语言之间或多或少会共享某些常见的语言特性</span>。比如C++和JavaScript都支持面向对象的范式，Java和Python都有垃圾回收，JavaScript和Golang都支持协程，当然我举以上三个例子的时候也选了组内差异比较大的。</p>
            <p>我接触过 Java / Pascal / Python / JavaScript / Erlang / Rust 等语言，它们彼此之间差异不小。但是追溯到底层，最终仍然是作为机器指令而运行，并没有什么神奇的魔法。<span class="highlight">因此如果掌握一门离机器足够近的语言，是可以对其他语言的“难度”产生免疫的。</span></p>
            <p>我第一份工作的开发语言是Java，但那之前我没有学习过，有着C++的底子，在面试之前大略地过了一遍《Core Java》就顺利入职了，并且通过阅读JVM specification还在部门做Java一些语言特性的实现原理分享。</p>
            <p>这些习惯我一直都有，并且受益良多。我觉得每个程序员都应该有这些好习惯，因此我在课程中用各种办法培养学生养成这些习惯。</p>
            <p>你也可以通过掌握C++这一足够接近机器，同时也具备丰富抽象语义的语言，更好地理解计算机系统。希望在你学习编程的路程中，可以帮到你。</p>`,
        image:
          "//static.xiedaimala.com/xdml/image/5939aa7c-d446-47c4-a9c1-ea1e52b10249/2021-7-20-12-30-35.png",
        mobileImage:
          "//static.xiedaimala.com/xdml/image/5939aa7c-d446-47c4-a9c1-ea1e52b10249/2021-7-20-12-30-23.png",
      },
    ],
  },
  english: {
    teacherList: [
      {
        name: "Ronnie",
        introduction: `<h3>Ronnie</h3><h6>北美生活11年，雅思裸考8.5（满分9分），托福119（满分120分）</h6>
  <p>想扎实的提高学习水平是一个漫长的过程，或者说是一种生活方式。大多数人错误的认为，只要一个程序员的技术能力过硬，英语差一点也无所谓。然而，<b>英语不只是在工作中的应用，更是一个发现机会，拓展职业维度的工具</b>，既然你点开了这个链接，就说明你对英语的学习多多少少的有些兴趣。不要着急，先允许我介绍一下我自己。</p>
  <p>我是Ronnie，已经在北美生活了11年，英语的学习已经成为了我生活中的一部分。我本科毕业于波士顿大学的传媒学院（我可是一枚正经的文科生），在广告业实习试水后决定暂时放弃这个有趣的行业转行技术。到现在第一份前端的工作入职也差不多一年了，多多少少的有一些经验给大家分享一下。我可以很自信的讲，本科我在人文科学的学习中一直在锻炼英语的写作和表达水平，这给了我相对于理科生没有的优势。<b>通过更好的表达自己从而获得和自己能力匹配，甚至于更好的机会。会写代码的人有很多，好的机会也有很多，怎样在北美众多求职者中走出自己独特的路线，从而脱颖而出，一切的一切都基于对于英语的掌握。</b></p>
  <p>我对于标准化的英语考试不感兴趣，但是无奈于学校的要求，考过几次。雅思裸考8.5，没上过补习班，托福119，这也是快3年前的事情了。做题的技巧也是有一些的，但我更注重对英语的长期积累。考一个高的分数只能代表你对于考试的熟悉程度，而对于英语这门语言的掌握可以为你打开视野，创造更多的机会。
目前我就职于多伦多FinTech创业公司。我对设计很感兴趣，也是Awwwards2022年官方评审团的评委。我并不是什么天才型的选手，我能做到的，你也可以做到。希望我通过对自己经验和经历的分享，可以多多少少的帮助到大家。</p>
`,
        image:
          "//static.xiedaimala.com/xdml/image/5939aa7c-d446-47c4-a9c1-ea1e52b10249/MjAyMi02LTE3LTEyLTI3LTM1LTYyOQ==.png",
        mobileImage:
          "//static.xiedaimala.com/xdml/image/5939aa7c-d446-47c4-a9c1-ea1e52b10249/MjAyMi02LTE3LTEyLTI5LTEyLTkyOA==.png",
      },
    ],
  },
};

const courseConfig = {
  jirengu: {
    description: `我们对每个教学环节进行评估，经众多富有前端经验的老师反复推敲后，制定高效前端学习模式
        <br/>课程模式：通关任务＋拓展直播＋实践项目＋就业辅导全方位指导`,
    items: [
      [
        {
          image:
            "https://static.xiedaimala.com/xdml/image/6e556a51-b8ff-466f-bda6-7d1847e39f2e/2019-10-15-16-20-36.png",
          title: "通关任务（120H+）",
          content: "夯实基础、进度可控、海量实战、code review",
          description: [
            "包含知识总结任务、代码实现任务、架构设计任务、贯穿课程的项目任务等",
            "每章节配套课后作业，由专门老师批改点评以及学生互评",
            "学习期间有疑问任课老师无时差答疑",
          ],
          visible: true,
        },
        {
          image:
            "https://static.xiedaimala.com/xdml/image/6e556a51-b8ff-466f-bda6-7d1847e39f2e/2019-10-15-16-26-6.png",
          title: "拓展课程（6个月）",
          content: "突破瓶颈、开阔眼界、深入学习、实时互动",
          description: [
            "每周2次直播课，每次直播2课时(小时)",
            "直播内容包含进阶提高知识点、课程答疑、模拟面试、就业指导等",
            "每周2次集中答疑，提前收集同学课程疑问，线上统一解答疑问，手把手教学",
            "直播弹幕实时互动，课后录播无限期回放",
          ],
          visible: true,
        },
      ],
      [
        {
          image:
            "https://static.xiedaimala.com/xdml/image/6e556a51-b8ff-466f-bda6-7d1847e39f2e/2019-10-15-16-26-13.png",
          title: "实践项目（20+）",
          content: "主流框架、大型项目、对接企业",
          description: [
            "单独项目群，老师手把手指导，直到项目上线",
            "N多项目选择，新颖原创不撞车，弥补经验缺失",
            "项目与企业对接，工作可直接上手",
          ],
          visible: true,
        },
        {
          image:
            "https://static.xiedaimala.com/xdml/image/6e556a51-b8ff-466f-bda6-7d1847e39f2e/2019-10-15-16-26-20.png",
          title: "阶段性联考",
          content: "大牛指导、分组协作、真实开发",
          description: [
            "独家考试系统，班级定期联考",
            "测试真实水平，做到心中有数",
            "查缺补漏，老师针对性补课",
          ],
          visible: true,
        },
      ],
    ],
  },
  yinghekongjian: {
    description:
      "我们对每个教学环节进行评估，经众多富有Java经验的老师反复推敲后，制定高效Java学习模式",
    items: [
      [
        {
          image:
            "https://static.xiedaimala.com/xdml/image/6e556a51-b8ff-466f-bda6-7d1847e39f2e/2019-9-10-16-16-3.png",
          title: "任务闯关课",
          content: "夯实基础、进度可控、海量实战、code review",
          description: [
            "彰德老师亲自制作全套通关任务",
            "视频、文档、博客、代码、实操、项目、架构",
            "Github提交、CI机器人判题、review所有代码",
            "每一份作业进行老师批改+同学互评",
          ],
          visible: true,
        },
        {
          image:
            "https://static.xiedaimala.com/xdml/image/6e556a51-b8ff-466f-bda6-7d1847e39f2e/2019-9-10-16-15-54.png",
          title: "拓展直播课",
          content: "突破瓶颈、开阔眼界、深入学习、实时互动",
          description: [
            "2晚/周、持续半年",
            "高级知识点、课程答疑、模拟面试、就业指导",
            "直播弹幕实时互动，课后录播无限期回放",
          ],
          visible: true,
        },
      ],
      [
        {
          image:
            "https://static.xiedaimala.com/xdml/image/6e556a51-b8ff-466f-bda6-7d1847e39f2e/2019-9-10-16-15-49.png",
          title: "阶段性联考",
          content: "实时考核、查漏补缺、效果监测、班级排名",
          description: [
            "独家考试系统，班级定期联考",
            "测试真实水平，做到心中有数",
            "查缺补漏，老师针对性补课",
          ],
          visible: true,
        },
        {
          image:
            "https://static.xiedaimala.com/xdml/image/6e556a51-b8ff-466f-bda6-7d1847e39f2e/2019-9-10-16-15-58.png",
          title: "线下训练营",
          content: "大牛指导、分组协作、真实开发",
          description: [
            "线下编程马拉松，真实团队协同开发",
            "老师面对面指导，现场code review",
            "项目评选，荣誉证书",
          ],
          visible: true,
        },
      ],
    ],
  },
  cplusplus: {
    description: `经过众多富有C++经验的老师反复推敲，几轮的大纲教学试验，对每个教学环节进行评估，制定高质量的C++学习模式
        <br/>课程模式：每周视频更新＋每周直播＋实践项目＋就业辅导全方位指导`,
    items: [
      [
        {
          image:
            "https://static.xiedaimala.com/xdml/image/5939aa7c-d446-47c4-a9c1-ea1e52b10249/2021-7-16-11-13-57.jpg",
          title: "知识体系（100章+）",
          content: "夯实基础、进度可控、海量实战、code review",
          description: [
            "每周更新视频+PPT+课后作业，夯实基础",
            "每章节配套课后作业，由专门老师批改点评以及学生互评",
            "学习期间有疑问任课老师无时差答疑",
          ],
          visible: true,
        },
        {
          image:
            "https://static.xiedaimala.com/xdml/image/5939aa7c-d446-47c4-a9c1-ea1e52b10249/2021-7-16-11-14-2.jpg",
          title: "每周直播课（6个月）",
          content: "突破瓶颈、开阔眼界、深入学习、实时互动",
          description: [
            "当周作业讲解+互动答疑",
            "每周1次直播课，每次直播1小时",
            "直播弹幕实时互动，课后录播无限期回放",
          ],
          visible: true,
        },
      ],
      [
        {
          image:
            "https://static.xiedaimala.com/xdml/image/5939aa7c-d446-47c4-a9c1-ea1e52b10249/2021-7-16-11-14-6.jpg",
          title: "实践项目（小项目+大项目）",
          content: "主流框架、大型项目、对接企业",
          description: [
            "小项目穿插在知识点中",
            "4大项目对接工作",
            "单独项目群，老师手把手指导，直到项目上线",
          ],
          visible: true,
        },
        {
          image:
            "https://static.xiedaimala.com/xdml/image/5939aa7c-d446-47c4-a9c1-ea1e52b10249/2021-7-16-11-14-8.jpg",
          title: "全面课程服务（班级服务+就业服务）",
          content: "大牛指导、分组协作、真实开发",
          description: [
            "任课老师全程指导",
            "班主任每周监督学习",
            "各式班级活动活跃学习气氛",
            "简历指导、面试指导，服务至就业",
          ],
          visible: true,
        },
      ],
    ],
  },
  english: {
    description: `摒弃传统应试英语教学模式，科学、合理、系统性地安排针对程序员的英语学习，<br/>打造英语学习环境，训练程序员英语
        <br/>学习流程：英语体系学习＋每天定量学习＋每周直播口语交流＋英语求职全方位指导`,
    items: [
      [
        {
          image:
            "//static.xiedaimala.com/xdml/image/5939aa7c-d446-47c4-a9c1-ea1e52b10249/MjAyMi02LTE3LTE0LTIzLTUtNzA4.jpg",
          title: "英语体系学习（约16周课程）",
          content: "从单词、阅读、语法、写作、到听、说、求职全方位学习",
          description: [
            "包含单词学习、英语文章阅读、常见语法学习等",
            "英语基础学习后培养写作、听、口语等能力",
            "做好英语求职的充分准备，培训英语求职能力",
          ],
          visible: true,
        },
        {
          image:
            "https://static.xiedaimala.com/xdml/image/6e556a51-b8ff-466f-bda6-7d1847e39f2e/2019-10-15-16-26-6.png",
          title: "每周定量学习（每天练习1H）",
          content: "突破瓶颈、开阔眼界",
          description: [
            "课程定期发布，学习之后需完成作业",
            "每天定期学习，词汇、写作、阅读的积累",
            "每周的固定积累性作业，学习打卡，高学习氛围",
          ],
          visible: true,
        },
      ],
      [
        {
          image:
            "https://static.xiedaimala.com/xdml/image/6e556a51-b8ff-466f-bda6-7d1847e39f2e/2019-10-15-16-26-13.png",
          title: "每周直播口语交流（面对面口语）",
          content: "深入学习、实时互动",
          description: [
            "每周安排不同的内容一起互动，答疑解惑",
            "面对面口语交流，充分的学习环境，培养语感",
            "模拟英语面试场景，提前适应英语面试",
          ],
          visible: true,
        },
        {
          image:
            "//static.xiedaimala.com/xdml/image/5939aa7c-d446-47c4-a9c1-ea1e52b10249/MjAyMi02LTE3LTE0LTIzLTEwLTExOQ==.jpg",
          title: "英语求职全方位指导",
          content: "大牛指导、实力输出",
          description: [
            "任课老师全程指导，高配版口语训练",
            "训练求职时所需内容：简历、求职信等相关文件",
            "训练工作时所需内容：综合面试、日常交流等",
          ],
          visible: true,
        },
      ],
    ],
  },
};

const projectConfig = {
  yinghekongjian: {
    title: "全面、深度、紧贴实战",
    subTitle:
      "通过对Java的全面学习，充分利用时间紧密学习，精通每个知识点，加以实战项目将知识点融会贯通，学以致用，直接上手工作",
    courseTitle: "体系课程涵盖40个阶段，初、中、高级Java核心知识",
    courseDescription:
      "我们希望同学在学习过程中可以同时获得快乐与知识，因此我们加入了很多有趣的环节，让学习变得不那么枯燥。通过各位大牛老师的精心打造，你可以很流畅地从入门开始学习，全面了解后端基础知识、Java语言入门及应用、基本数据结构和算法知识、Java Web开发、框架使用、前后端协作、发布与部署的基础知识、面试技巧等，直到找到心仪的工作。我们一起来让Java学习变得轻松愉悦。",
    courseLink: "detail",
    courseListImg:
      "https://static.xiedaimala.com/xdml/image/6e556a51-b8ff-466f-bda6-7d1847e39f2e/2019-10-30-10-49-31.png",
    projectTitle: "三大实战项目，让你轻松应对日常工作与面试",
    projectDescription:
      "全新项目，各有侧重，拒绝平庸，拒绝千篇一律；完全与实际工作所对应，在学习过程中体验工作的乐趣；提前感受项目的各大环节，将知识点融会贯通。",
    projectLink: "detail#project-indicator",
    projectImageFloatUp: false,
    projectImages: [
      {
        url:
          "https://static.xiedaimala.com/xdml/image/6e556a51-b8ff-466f-bda6-7d1847e39f2e/2019-10-15-10-1-23.png",
      },
      {
        url:
          "https://static.xiedaimala.com/xdml/image/6e556a51-b8ff-466f-bda6-7d1847e39f2e/2019-10-15-10-1-19.png",
      },
      {
        url:
          "https://static.xiedaimala.com/xdml/image/6e556a51-b8ff-466f-bda6-7d1847e39f2e/2019-10-15-10-1-14.png",
      },
    ],
  },
  jirengu: {
    title: "全面、深度、紧贴实战",
    subTitle:
      "通过对前端的全面学习，充分利用时间紧密学习，精通每个知识点，加以实战项目将知识点融会贯通，学以致用，直接上手工作",
    courseTitle: "体系课程涵盖40个阶段，初、中、高级前端核心知识",
    courseDescription: `本课程为前端系统就业班课程，适合零基础同学和有前端开发经验需要系统提升的同学(待遇在15k以下的同学)。课程循序渐进讲解和实践前端开发技术栈及大量实战项目，如HTML5、CSS3、ES6、JavaScript 核心知识、JavaScript 高级知识、工程化、模块化、Node.js、Webpack、Vue.js、React.js 等。课程在教学过程中，渗透开发协作、调试、服务器部署、搜索等软技能的训练，带领学生成为一名合格甚至是优秀的前端程序员。`,
    courseLink: "/new/detail",
    courseListImg:
      "https://static.xiedaimala.com/xdml/image/6e556a51-b8ff-466f-bda6-7d1847e39f2e/2019-10-30-10-49-36.png",
    projectTitle: "十大实战项目，让你轻松应对日常工作与面试",
    projectDescription:
      "全新项目，各有侧重，拒绝平庸，拒绝千篇一律；完全与实际工作所对应，在学习过程中体验工作的乐趣；提前感受项目的各大环节，将知识点融会贯通。",
    projectLink: "/new/detail#project-indicator",
    projectImageFloatUp: true,
    projectImages: [
      {
        url:
          "https://static.xiedaimala.com/xdml/image/6e556a51-b8ff-466f-bda6-7d1847e39f2e/2019-10-29-16-43-40.png",
      },
      {
        url:
          "https://static.xiedaimala.com/xdml/image/6e556a51-b8ff-466f-bda6-7d1847e39f2e/2019-10-29-16-43-46.png",
      },
      {
        url:
          "https://static.xiedaimala.com/xdml/image/6e556a51-b8ff-466f-bda6-7d1847e39f2e/2019-10-29-16-43-51.png",
      },
      {
        url:
          "https://static.xiedaimala.com/xdml/image/6e556a51-b8ff-466f-bda6-7d1847e39f2e/2019-10-29-16-44-7.png",
      },
      {
        url:
          "https://static.xiedaimala.com/xdml/image/6e556a51-b8ff-466f-bda6-7d1847e39f2e/2019-10-29-16-44-15.png",
      },
    ],
  },
  cplusplus: {
    title: "全面、深度、紧贴实战",
    subTitle:
      "深入到C++的每个知识点，分模块从基础到工程实践、到算法、到项目，知识点融会贯通，学以致用，胜任工作",
    courseTitle: "体系课程涵盖8大阶段，初、中、高级C++核心知识",
    courseDescription: `<div class="custom-title" id="cplusplus-course-description-first-title">阶段一：C++语言基础夯实（8周）</div><div class="custom-content">熟悉C++语言语法、掌握兼有底层效率和高层抽象的思维方式。</div>
    <div class="custom-title">阶段二：工程能力实践（4周）</div><div class="custom-content">掌握开发中常用工具，提高研发效率和形成良好的开发习惯。</div>
    <div class="custom-title">阶段三：并发编程和网络IO（3周）</div><div class="custom-content">理解并发和并行的技术手段，学习高效应用程序的开发和设计权衡。</div>
    <div class="custom-title">阶段四：算法精进（6周）</div><div class="custom-content">构建对基础算法和数据结构的知识体系，提高编码内功。</div>
    <div class="custom-title">阶段五：项目实践（4周）</div><div class="custom-content">通过从基础服务到应用的项目实战，培养通用的系统设计和开发经验。</div>
    <div class="custom-title">阶段六：找工作（1周）</div><div class="custom-content">简历指导和投递技巧，笔试面试高频考点讲解，指导面试技巧，顺利入职。</div>`,
    courseLink: "/C++/detail",
    courseListImg:
      "//static.xiedaimala.com/xdml/image/5939aa7c-d446-47c4-a9c1-ea1e52b10249/2021-7-16-11-52-2.png",
    projectTitle: "四大实战项目，让你轻松应对日常工作与面试",
    projectDescription:
      "全新项目，各有侧重，拒绝平庸，拒绝千篇一律；完全与实际工作所对应，在学习过程中体验工作的乐趣；提前感受项目的各大环节，将知识点融会贯通。",
    projectLink: "/C++/detail#project-indicator",
    projectImageFloatUp: true,
    projectImages: [
      {
        url:
          "//static.xiedaimala.com/xdml/image/5939aa7c-d446-47c4-a9c1-ea1e52b10249/2021-7-16-19-3-1.png",
      },
      {
        url:
          "//static.xiedaimala.com/xdml/image/5939aa7c-d446-47c4-a9c1-ea1e52b10249/2021-7-16-19-3-6.png",
      },
      {
        url:
          "//static.xiedaimala.com/xdml/image/5939aa7c-d446-47c4-a9c1-ea1e52b10249/2021-7-16-19-3-10.png",
      },
      {
        url:
          "//static.xiedaimala.com/xdml/image/5939aa7c-d446-47c4-a9c1-ea1e52b10249/2021-7-16-19-3-13.png",
      },
    ],
  },
};

const learningConfig = {
  yinghekongjian: {
    href: {
      course: "/java/mode",
      class: "/java/mode#class-indicator",
      job: "/java/mode#job-indicator",
      promise: "/java/mode#job-indicator",
    },
    promise:
      "承诺一周且5个任务内退全款，1个月内且初级任务之前可申请退款（扣除已经学习的费用）",
  },
  jirengu: {
    href: {
      course: "/new/mode",
      class: "/new/mode#class-indicator",
      job: "/new/mode#job-indicator",
      promise: "/new/mode#job-indicator",
    },
    promise:
      "承诺一周且5个任务内退全款，3个月内且任务44前可申请退款（扣除已经学习的费用）",
  },
  cplusplus: {
    href: {
      course: "/C++/mode",
      class: "/C++/mode#class-indicator",
      job: "/C++/mode#job-indicator",
      promise: "/C++/mode#job-indicator",
    },
    promise:
      "承诺一周且5个任务内退全款，4个月内且高级任务前可申请退款（扣除已经学习的费用）",
  },
  english: {
    href: {
      course: "/english/mode",
      class: "/english/mode#class-indicator",
      job: "/english/mode#job-indicator",
      promise: "/english/mode#job-indicator",
    },
    course: [
      '任课老师每天答疑，有问题随时call老师',
      '大量学习资料，视频主导、文章辅助、英语练习',
      '每周面对面英语练习'
    ],
    classes: [
      "进群后全英文交流，打造英语学习氛围",
      "各项班级活动，堪比线下的超活跃学习氛围",
      "结伴小组，每周对赌计划，学习委员奖等超多学习活动",
    ],
    job: [
      '输出有竞争力的英文简历；反复批改打磨后的求职信',
      '漂亮的linkedin个人页面；吸引眼球的个人主页；对口的Github个人主页',
      '面试环节，技术面试/综合面试的技巧培训',
    ],
    promise: 
      "开课1周内，可无条件申请退全款，1周之后不退款",
    title: '学习与就业服务'
  }
};

const experienceConfig = {
  yinghekongjian: {
    enable: false,
    pictureSrc:
      "https://static.xiedaimala.com/xdml/image/6e556a51-b8ff-466f-bda6-7d1847e39f2e/2019-9-10-16-2-11.png",
    pdfLinks: [
      {
        title: "饥人谷 Java课程大纲.pdf",
        link:
          "https://static.xiedaimala.com/xdml/file/6e556a51-b8ff-466f-bda6-7d1847e39f2e/2019-10-30-18-11-1.pdf",
      },
    ],
    articleLinks: [
      {
        title: "Java学习指南",
        subTitle: "优质原创文章",
        content: "记录老师的分享，展望业界的前沿",
        link: "https://zhuanlan.zhihu.com/c_183152541",
      },
      {
        title: "饥人谷编程",
        subTitle: "高质量原创Java视频",
        content: "一波操作带你畅游Java世界",
        link:
          "https://space.bilibili.com/437871172?spm_id_from=333.788.b_765f7570696e666f.1",
      },
    ],
    contactLink: "/java/contact",
  },
  jirengu: {
    enable: true,
    pictureSrc:
      "https://static.xiedaimala.com/xdml/image/6e556a51-b8ff-466f-bda6-7d1847e39f2e/2019-10-15-16-41-52.png",
    dataBlocks: [
      {
        title: "5",
        unit: "年",
        description: "培训经验",
      },
      {
        title: "95+",
        unit: "%",
        description: "就业率",
      },
      {
        title: "2K+",
        unit: "位",
        description: "就业学员",
      },
      {
        title: "40+",
        unit: "%",
        description: "入学率来自朋友介绍",
      },
    ],
    pdfLinks: [
      {
        title: "饥人谷 前端课程大纲（方方版）.pdf",
        link:
          "https://static.xiedaimala.com/xdml/file/6e556a51-b8ff-466f-bda6-7d1847e39f2e/2019-10-30-18-11-36.pdf",
      },
      {
        title: "饥人谷 前端课程大纲（若愚版）.pdf",
        link:
          "https://static.xiedaimala.com/xdml/file/6e556a51-b8ff-466f-bda6-7d1847e39f2e/2019-10-30-18-11-43.pdf",
      },
    ],
    commentLink: {
      subTitle: "真实故事",
      title: "数千同学的真实转行经历",
      content: `快来了解 零基础转行、文科生转行、医学生转行、后端转前端、兵哥哥转行的故事吧！不论是自学过的、前端在职的、小白转行的你都可以在这里找到与你相似的经历`,
      linkTo: "了解他们的真实故事",
      link: "https://www.zhihu.com/question/41845934",
    },
    articleLinks: [
      {
        title: "前端学习指南",
        subTitle: "优质原创文章",
        content: "记录老师的分享，展望业界的前沿",
        link: "https://zhuanlan.zhihu.com/study-fe",
      },
      {
        title: "小谷悠悠伴我行",
        subTitle: "学员优秀笔记分享",
        content: "点滴学习时光，汇聚知识河流",
        link: "https://zhuanlan.zhihu.com/xiaogu",
      },
    ],
    contactLink: "/new/contact",
  },
  cplusplus: {
    enable: false,
    pictureSrc:
      "https://static.xiedaimala.com/xdml/image/6e556a51-b8ff-466f-bda6-7d1847e39f2e/2019-9-10-16-2-11.png",
    pdfLinks: [
      {
        title: "饥人谷2023版 C++课程大纲.pdf",
        link:
          "https://static.xiedaimala.com/%E9%A5%A5%E4%BA%BA%E8%B0%B72021%E7%89%88C%2B%2B%E8%AF%BE%E7%A8%8B%E5%A4%A7%E7%BA%B2.pdf",
      },
    ],
    articleLinks: [
      {
        title: "C++学习指南",
        subTitle: "优质原创文章",
        content: "记录老师的分享，展望业界的前沿",
        link: "https://www.zhihu.com/column/c_1393888776066854912",
      },
      {
        title: "饥人谷C加加",
        subTitle: "免费原创学习视频",
        content: "解析C++学习路径，萌新学习不走弯路",
        link: "https://space.bilibili.com/66311169",
      },
    ],
    contactLink: "/C++/contact",
  },
  english: {
    enable: false,
    pdfLinks: [
      {
        title: "【饥人谷】程序员英语求职训练营大纲.pdf",
        link:
          "//static.xiedaimala.com/xdml/file/5939aa7c-d446-47c4-a9c1-ea1e52b10249/MjAyMi02LTE3LTE1LTU2LTUwLTcxMw==.pdf",
      },
    ],
    articleLinks: [],
    contactLink: "/english/contact",
  },
};

export {
  titleConfig,
  navigatorConfig,
  footerConfig,
  videoConfig,
  previewConfig,
  teacherConfig,
  courseConfig,
  experienceConfig,
  learningConfig,
  projectConfig,
};
