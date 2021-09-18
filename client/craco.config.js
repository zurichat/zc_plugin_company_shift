const path = require("path")
const SystemJSPublicPathPlugin = require("systemjs-webpack-interop/SystemJSPublicPathWebpackPlugin")

module.exports = {
  webpack: {
    plugins: {
      add: [
        new SystemJSPublicPathPlugin({
          systemjsModuleName: `zuri-employeeshift`,
        }),
      ],
      remove: ["HtmlWebpackPlugin"],
    },
    configure: webpackConfig => {
      webpackConfig.entry = path.resolve("src/zuri-employeeshift.js") //make sure this points to the new entry file you created in the previous step
      webpackConfig.output.filename = "zuri-employeeshift.js"
      webpackConfig.output.libraryTarget = "system"

      delete webpackConfig.optimization.runtimeChunk

      webpackConfig.optimization.splitChunks = {
        chunks: "async",
      }

      webpackConfig.module.rules[1].oneOf.forEach(x => {
        if (!x.use) return
        if (Array.isArray(x.use)) {
          x.use.forEach(use => {
            if (use.loader && use.loader.includes("mini-css-extract-plugin"))
              use.loader = require.resolve("style-loader/dist/cjs.js")
          })
        }
      })

      webpackConfig.module.rules.push({ parser: { system: false } })

      return webpackConfig
    },
  },
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
}