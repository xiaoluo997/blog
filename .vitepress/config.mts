import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '小洛 blog',
  description: '小洛的转码日记，记录转码心得和前端知识。',
  srcDir: 'src/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        text: '简介',
        items: [
          { text: '自我介绍', link: '/guide/about-me.md' },
          { text: '快速开始', link: '/guide/getting-started.md' },
        ],
      },
      {
        text: '技术博客',
        items: [
          {
            text: '博客目录',
            link: '/blog/content.md',
          },
          {
            text: 'Vue',
            link: '/blog/vue/vue-reactive-1.md',
            collapsed: true,
            items: [
              { text: 'Vue响应式原理', link: '/blog/vue/vue-reactive-1' },
              { text: 'Watcher', link: '/blog/vue/watcher.md' },
              { text: '监听属性 watch', link: '/blog/vue/watch.md' },
              { text: '计算属性 computed', link: '/blog/vue/computed.md' },
              {
                text: '依赖收集',
                link: '/blog/vue/dependencies-collection.md',
              },
              {
                text: 'vue2对数组的特殊处理',
                link: '/blog/vue/array-handle.md',
              },
              {
                text: 'vue2对对象的特殊处理',
                link: '/blog/vue/object-handle.md',
              },
              {
                text: '自定义事件',
                link: '/blog/vue/define-event.md',
              },
              {
                text: '虚拟Dom',
                link: '/blog/vue/virutal-dom.md',
              },
              {
                text: 'Vue2 diff 算法(双端diff)',
                link: '/blog/vue/vue2-diff.md',
              },
              {
                text: '组件更新',
                link: '/blog/vue/component-update.md',
              },
              {
                text: 'nextTick是什么?',
                link: '/blog/vue/next-tick.md',
              },
              {
                text: 'Vue3 diff 算法(快速diff)',
                link: '/blog/vue/vue3-diff.md',
              },
            ],
          },
          {
            text: 'React',
            link: '/blog/react/jsx.md',
            collapsed: true,
            items: [{ text: '初识JSX', link: '/blog/react/jsx.md' }],
          },
          {
            text: '算法',
            link: '/blog/algorithm/getting-started.md',
            collapsed: true,
            items: [
              { text: '快速开始', link: '/blog/algorithm/getting-started.md' },
              {
                text: '排序算法',
                link: '/blog/algorithm/sort/sort.md',
                collapsed: true,
                items: [
                  {
                    text: '冒泡排序',
                    link: '/blog/algorithm/sort/bubble.md',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        text: '转码日记',
        items: [
          { text: '我为什么吗要转吗', link: '/code-journal/why-code.md' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ],
      },
      {
        text: 'Q&A',
        items: [
          { text: '答疑', link: '/qa/qa.md' },
          { text: '网站搭建教程', link: '/qa/site-build.md' },
        ],
      },
      {
        text: '联系博主',
        link: '/me/me.md',
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/xiaoluo997/blog' },
    ],
  },
  outDir: './dist',
})
