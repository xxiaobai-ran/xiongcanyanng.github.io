<template><div><p>theme: defaultTheme({
// 在这里进行配置
navbar: [
// NavbarItem
{ text: '首页', link: '/', },
// NavbarGroup
{
text: 'una的博客',
children: [
{ text: 'Github', link: '/' },
{ text: '知乎', link: '/' },
{ text: '掘金', link: '/' },
],
},
],
sidebar: [
{
text: '前言',
collapsible: false,
children: [
{ text: '内容介绍' },
{ text: '使用指南' }
]
},
{
text: '算法学习',
link: '/Algorithm/Divide&amp;Conquer',
collapsible: false,
children: [
{ text: '分治法', link: '/Algorithm/Divide&amp;Conquer' }
],
}
]
}),</p>
</div></template>


