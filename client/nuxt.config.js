const pkg = require("./package");
const webpack = require("webpack");
module.exports = {
  mode: "universal",

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "3B8070" },

  /*
   ** Global CSS
   */
  css: ["./node_modules/bootstrap/dist/css/bootstrap.css"],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["~plugins/bootstrap.js", "~plugins/mixins/user.js"],

  /*
   ** Nuxt.js modules
   */
  modules: [
    "@nuxtjs/auth",
    "@nuxtjs/axios",
    // Doc: https://bootstrap-vue.js.org/docs/
    "bootstrap-vue/nuxt"
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    baseURL: "http://msic.io:8888/api"
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: "auth/login",
            method: "post",
            propertyName: "data.token"
          },
          user: { url: "auth/me", method: "post", propertyName: "data" },
          logout: { url: "auth/logout", method: "post" }
        }
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    vendor: ["jquery", "bootstrap"],
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
      })
    ],
    extend(config, ctx) {}
  }
};
