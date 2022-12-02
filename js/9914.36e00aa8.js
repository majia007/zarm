(self.webpackChunksite=self.webpackChunksite||[]).push([[9914],{89914:function(n,e,t){"use strict";t.r(e),e.default='# TabBar 标签栏\n\n## 基本用法\n\n```jsx\nimport { useState } from \'react\';\nimport { Icon, TabBar, Cell, Button } from \'zarm\';\n\nconst TabIcon = Icon.createFromIconfont(\'//at.alicdn.com/t/font_1340918_mk657pke2hj.js\');\n\nconst Demo = () => {\n  const [activeKey, setActiveKey] = useState(\'home\');\n  const [visible, setVisible] = useState(true);\n\n  return (\n    <>\n      <Cell\n        description={\n          <Button\n            size="xs"\n            onClick={() => {\n              setVisible(!visible);\n            }}\n          >\n            {visible ? \'隐藏\' : \'展示\'}\n          </Button>\n        }\n      >\n        隐藏 | 展示\n      </Cell>\n\n      <TabBar visible={visible} activeKey={activeKey} onChange={setActiveKey}>\n        <TabBar.Item itemKey="home" title="主页" icon={<TabIcon type="home" />} />\n        <TabBar.Item\n          itemKey="found"\n          title="保险"\n          icon={<TabIcon type="insurance" />}\n          badge={{ shape: \'circle\', text: \'3\' }}\n        />\n        <TabBar.Item\n          itemKey="me"\n          title="我的"\n          icon={<TabIcon type="user" />}\n          badge={{ shape: \'dot\' }}\n        />\n      </TabBar>\n    </>\n  );\n};\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n## API\n\n### TabBar\n\n| 属性             | 类型                               | 默认值 | 说明                       |\n| :--------------- | :--------------------------------- | :----- | :------------------------- |\n| activeKey        | number \\| string                   | -      | 当前选中项                 |\n| defaultActiveKey | number \\| string                   | -      | 初始选中项, 默认第一个选中 |\n| onChange         | (value?: number \\| string) => void | -      | 值变化时触发的回调函数     |\n| visible          | boolean                            | `true` | 是否显示                   |\n\n### TabBar.Item\n\n| 属性       | 类型             | 默认值 | 说明                                                 |\n| :--------- | :--------------- | :----- | :--------------------------------------------------- |\n| itemKey    | number \\| string | -      | 唯一标识，对应`activeKey`，不设置则默认取 index 索引 |\n| title      | ReactNode        | -      | 标题文字                                             |\n| icon       | ReactNode        | -      | 图标                                                 |\n| activeIcon | ReactNode        | -      | 选中时图标，不设置等同 icon 属性的值                 |\n| badge      | Object           | -      | 参考`Badge`组件                                      |\n'}}]);