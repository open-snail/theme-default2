export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    // 直接加载一个 Node.js 模块。（在这里它是一个 Sass 文件）
    // 项目里要用的 CSS 文件
    // '@/assets/css/main.css',
    // // 项目里要使用的 SCSS 文件
    // '@/assets/css/main.scss',
    'element-ui/lib/theme-chalk/index.css',
    'reset.css',
    '@/static/css/reset.css',
    '@/static/css/github-markdown.css',
    '@/assets/iconfont/iconfont.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/element-ui',
    { src: '~plugins/highlight.js' },
    { src: '~plugins/auth.js', ssr: false },
    { src: "~/plugins/axios.js" },
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    proxy: true,
    progress: false
    // See https://github.com/nuxt-community/axios-module#options
  },
  proxy: [
    [
      '/api/blog',
      {
        target: `http://helloblog.byteblogs.com/api/blog/`, // api主机
        pathRewrite: { '^/api/blog': '/' }
      }
    ]
  ],
  /*
   ** Build configuration
   */
  build: {
    transpile: [/^element-ui/],
    /*
     * 收起在head里面的css代码有利于seo
     */
    extractCSS: true,
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
