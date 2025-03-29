/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {

  硬件与半导体: [
    'Home',
    {
      type: 'category',
      label: '基础知识',
      link: {
        type: 'generated-index',
        //description: '',
        keywords: ['硬件与半导体', '硬件与半导体基础知识', '电阻', '电容', '电感', '磁珠', '二极管', '三极管', 'MOS', '运算放大器', '数字电路', '设计规范', '推挽开漏', '共模差模', '储存介质', '锂电池', '编码器'],
      },
      items: [
        '基本元器件-电阻',
        '基本元器件-电容',
        '基本元器件-电感与磁珠',
        '基本元器件-二极管',
        '基本元器件-晶体三级管',
        '基本元器件-场效应管',
        '基本元器件-光电耦合器',
        '基本元器件-运算放大器',
        '数字电路基础知识',
        'ADC与DAC基础知识',
        '推挽与开漏输出',
        '共模信号与差模信号',
        '数字电路中的竞争与冒险',
        '存储器的分类',
        '保险丝的选型',
        '锂电池选型指南',
        '编码器的几种输出方式',
        '防反接电路的设计',
        '个人PCB设计规范',
      ],
    },

    {
      type: 'category',
      label: '嵌入式硬件',
      link: {
        type: 'generated-index',
        //description: ' ',
        //keywords: ['硬件与半导体', '协议', '通信协议', '逻辑电平', 'SPI', 'I2C', 'CAN', 'USB', ],
      },
      items: [
        'RobotCtrl-STM32通用开发套件',
        'RobotCtrl_Core-核心板',
        'RobotCtrl_Func-外设拓展板',
        'RobotCtrl_Power-电源供电板',
        'Flip-基于全志F1C200s的Linux开发板',
        'OSD335x最小系统的设计',
        '如何设计一款单片机的最小系统', // CSDN
        'STM32F4硬件开发',
        'SwiftCtrl-蓝牙手柄',
        '自制CMSIS-DAP',
        //'X86平台的硬件测试',
      ],
    },

    {
      type: 'category',
      label: '电机驱动',
      link: {
        type: 'generated-index',
        //description: ' ',
        //keywords: ['硬件与半导体', '协议', '通信协议', '逻辑电平', 'SPI', 'I2C', 'CAN', 'USB', ],
      },
      items: [
        '直流有刷电机驱动的设计',
        'TinyDVR-小巧身材，满载动力',
        'RaptorDVR-集成稳压的30A双电机驱动',
        'AirForce-充满灵性的电机驱动模块',
        'ZenDriver-高性能的电机驱动',
        '电机驱动方案-IR2104S',
      ],
    },

    {
      type: 'category',
      label: '通信协议',
      link: {
        type: 'generated-index',
        //description: ' ',
        keywords: ['硬件与半导体', '协议', '通信协议', '逻辑电平', 'SPI', 'I2C', 'CAN', 'USB',],
      },
      items: [
        '通信协议-数字逻辑电平',
        '通信协议-串口通信',
        '通信协议-SPI',
        '通信协议-I2C',
        '通信协议-CAN',
        '通信协议-USB',
        '通信协议-以太网',
      ],
    },

    {
      type: 'category',
      label: '电源设计',
      link: {
        type: 'generated-index',
        //description: ' ',
        keywords: ['x', 'x'],
      },
      items: [
        '电源设计-方案确定',
        '电源拓扑-线性稳压',
        '电源拓扑-开关稳压（非隔离型）',
        '电源拓扑-开关稳压（隔离型）',
        '电源设计-开关稳压IC（非隔离型）',
        '电源设计-自举电路',
        '电源设计-纹波噪声与测量方法',
        '电源设计-LDO电源抑制比（PSRR）与测量方法',
        '电源方案（LDO）-XC6206',
        '电源方案（Buck）-LMR14050',
        '电源方案（Buck）-TPS54531',
        '电源方案（Buck）-XL2009E1',
        '电源方案（Boost）-SX1308',
        '电源方案（PMIC）-EA3036C',
        '电源方案（PMIC）-EA3059',
      ],
    },


    {
      type: 'category',
      label: '射频电路',
      link: {
        type: 'generated-index',
        //description: ' ',
        keywords: ['x', 'x'],
      },
      items: [
        //'射频-基础知识',
        '射频-组件与系统-导线',
        '射频-组件与系统-电阻',
        '射频-组件与系统-电容',
        '射频-谐振电路-基本定义',
        '射频-谐振电路-无损组件的共振',
        '射频-谐振电路-负载Q值',
        //'射频-无线电波与天线',
        '射频-S参数',
        '射频-天线基础知识',
        '射频-天线的分类与选型',
        '史密斯圆图与匹配电路基础',
        '一般天线匹配电路的设计',
      ],
    },


    {
      type: 'category',
      label: '信号与电源完整性',
      link: {
        type: 'generated-index',
        //description: ' ',
        slug: '/硬件与半导体',
        keywords: ['x', 'x'],
      },
      items: [
        '高速电路的设计',
        '信号完整性-基础概念',
        '信号完整性-时域与频域',
        '信号完整性-阻抗与电气模型',
        '信号完整性-电阻的物理基础',
        '信号完整性-传输线',
        '信号完整性-失真',
        '信号完整性-串扰',
        '电源完整性设计',
        'ESD基础知识',
        'EMC设计指南',
        '信号地与机壳地间的EMC设计',
      ],
    },

    {
      type: 'category',
      label: '半导体自动化测试',
      link: {
        type: 'generated-index',
        //description: ' ',
        keywords: ['x', 'x'],
      },
      items: [
        '半导体测试基础-基本概念',
        '半导体测试基础-OS测试',
        '半导体测试基础-DC参数测试',
        '半导体测试基础-功能测试',
        '半导体测试基础-AC参数测试',
      ],
    },

    {
      type: 'category',
      label: '软件与仪器使用',
      link: {
        type: 'generated-index',
        //description: ' ',
        keywords: ['x', 'x'],
      },
      items: [
        'AD常用技巧',
        'AD基本操作-环境搭建',
        'AD基本操作-基础知识',
        'AD基本操作-原理图绘制',
        'AD基本操作-多板系统设计',
        'AD使用Git的注意事项',
        '函数思想在电路设计中的应用',
        'OrCAD配置与技巧',
        '示波器的触发模式',
        '网络分析仪的使用',
        '逻辑分析仪的使用',
        '宽带注入变压器的使用',
        '线性注入器的使用',
      ],
    },


    {
      type: 'category',
      label: 'ATE Test Fundamental',
      link: {
        type: 'generated-index',
        //description: 'describtion to be updated',
        keywords: ['x', 'x'],
      },
      items: [
        'Continuity_Test',
        'DC_Parameters',
        'IDD_Test',
        'Leakage_Test',
        'Level_Threshold_Test',
        'Digital_Functional_Test',
      ],
    },
    {
      type: 'category',
      label: 'ATE Mixed Signal Test',
      link: {
        type: 'generated-index',
        slug: '/ATE',
        //description: 'describtion to be updated',
        keywords: ['x', 'x'],
      },
      items: [
        'Basics_of_Mixed_Signal_Test',
        'Basics_of_Fourier_Transform',
        'ADC-Static_Parameters',
        'ADC-Dynamic_Parameters',
        'DAC-Static_Parameters',
        'DAC-Dynamic_Parameters',
        'Troubleshooting_of_ADC_and_DAC',
      ],
    },
    {
      type: 'category',
      label: 'ATE Coding Syntax',
      link: {
        type: 'generated-index',
        //description: 'describtion to be updated',
        keywords: ['x', 'x'],
      },
      items: [
        'VBT_Syntax-TheHdw',
        'VBT_Syntax-TheHdw-DCVI',
        'VBT_Syntax-TheExec-Flow',
        'Pattern_Syntax_Notes',
        'DCVI_Alarms'
      ],
    },
    ],

};

module.exports = sidebars;


// unlist：
//'unlist/电源设计-LDO跳变抑制能力对比测试记录',
//'unlist/CentOS安装Docker',
//'unlist/乐谱-Imagine',
//'unlist/Docker方式运行code-server',
//'unlist/T-Clock桌上小钟（旧）',
//'unlist/构建知识管理系统',
//'unlist/回归博客',
//'unlist/团队知识库搭建记录-DokuWiki',
//'unlist/个人知识库极简搭建指南-VuePress',
//'unlist/博客转至GitBook',
//'unlist/浅谈Bitcron博客平台',
//'unlist/基于docsify搭建个人Wiki',
//'unlist/PCB名片的设计',
//'unlist/如何用LaTeX写论文',

// preview
//'我是如何做数据容灾的',
//'如何用Markdown写学术论文',
//'AD基本操作-PCB绘制',
//'AD基本操作-库文件绘制',
