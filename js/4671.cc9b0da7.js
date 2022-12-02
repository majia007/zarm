(self.webpackChunksite=self.webpackChunksite||[]).push([[4671],{44671:function(n,e,r){"use strict";r.r(e),e.default='# 国际化\n\nZarm 目前的默认文案是中文，如果需要使用其他语言，可以参考下面的方案。\n\n## ConfigProvider\n\nZarm 提供了一个 React 组件 [ConfigProvider](#/components/config-provider) 用于全局配置国际化文案。\n\n```jsx\nimport zhCN from \'zarm/lib/config-provider/locale/zh_CN\';\n\nreturn (\n  <ConfigProvider locale={zhCN}>\n    <App />\n  </ConfigProvider>\n);\n```\n\n注意：`zh_CN` 是文件名，以下表格也遵循同样的规则。\n\n目前支持以下语言：\n\n| 语言         | 文件名 |\n| ------------ | ------ |\n| 英语（美式） | en_US  |\n| 简体中文     | zh_CN  |\n\n具体的使用方法请参考 [ConfigProvider 文档](#/components/config-provider)。\n\n## 增加语言包\n\n如果你找不到你需要的语言包，欢迎你在 <a href="https://github.com/ZhongAnTech/zarm/blob/master/packages/zarm/src/config-provider/locale/en_US.tsx" target="_blank">英文语言包</a> 的基础上创建一个新的语言包，并给我们发一个 Pull Request。\n'}}]);