export const redirects = JSON.parse("{\"/Algorithm/Divide&Conquer.html\":\"/Algorithm/Divide_Conquer.html\"}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/xiongcanyanng/Desktop/个人博客/xxiaobai-ran.github.io/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Hello VuePress"} }],
  ["/Algorithm/Divide_Conquer.html", { loader: () => import(/* webpackChunkName: "Algorithm_Divide_Conquer.html" */"/Users/xiongcanyanng/Desktop/个人博客/xxiaobai-ran.github.io/docs/.vuepress/.temp/pages/Algorithm/Divide_Conquer.html.js"), meta: {"title":"11111"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/xiongcanyanng/Desktop/个人博客/xxiaobai-ran.github.io/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
