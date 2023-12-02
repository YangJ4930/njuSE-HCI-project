/* eslint-disable */
import legacyPlugin from '@vitejs/plugin-legacy';
import * as path from 'path';
import vitePluginReactJsSupport from 'vite-plugin-react-js-support';
import reactRefresh from '@vitejs/plugin-react-refresh';
// @see https://cn.vitejs.dev/config/
export default ({ command, mode }) => {
  let rollupOptions = {};
  if (command === 'serve') {
    rollupOptions.input = [];
  }

    let optimizeDeps = {};
    if (command === 'serve') {
        optimizeDeps.entries = false;
    }

    let alias = {
        'react-native': 'react-native-web'
    };

    let proxy = {};

    // todo 替换为原有变量
    let define = {
        'process.env.APP_IS_LOCAL': command === 'serve' ? '"true"' : '"false"',
        'process.env.REACT_APP_IS_LOCAL': command === 'serve' ? '"true"' : '"false"',
        'process.env.NODE_ENV': '"development"',
        'process.env.PUBLIC_URL': '""',
        'process.env.FAST_REFRESH': 'true'
    };

    let esbuild = {};

  return {
      base: "./", // index.html文件所在位置
      root: "./", // js导入的资源路径，src
      resolve: {
          alias,
      },
      define: define,
      server: {
          // 代理
          proxy,
      },
      build: {
          target: "es2015",
          minify: "terser", // 是否进行压缩,boolean | 'terser' | 'esbuild',默认使用terser
          manifest: false, // 是否产出maifest.json
          sourcemap: false, // 是否产出soucemap.json
          outDir: "build", // 产出目录
          rollupOptions,
      },
      esbuild,

      plugins: [
          legacyPlugin({
              targets: [
                  "Android > 39",
                  "Chrome >= 60",
                  "Safari >= 10.1",
                  "iOS >= 10.3",
                  "Firefox >= 54",
                  "Edge >= 15",
              ],
          }),
          vitePluginReactJsSupport([], {
              jsxInject: true,
          }),
          reactRefresh(),
      ],
      css: {
          preprocessorOptions: {
              less: {
                  // 支持内联 JavaScript
                  javascriptEnabled: true,
              },
          },
          define: define,
          server: {
              // 代理
              proxy,
          },
          build: {
              target: "es2015",
              minify: "terser", // 是否进行压缩,boolean | 'terser' | 'esbuild',默认使用terser
              manifest: false, // 是否产出maifest.json
              sourcemap: false, // 是否产出soucemap.json
              outDir: "build", // 产出目录
              rollupOptions,
          },
          esbuild,

          plugins: [
              legacyPlugin({
                  targets: [
                      "Android > 39",
                      "Chrome >= 60",
                      "Safari >= 10.1",
                      "iOS >= 10.3",
                      "Firefox >= 54",
                      "Edge >= 15",
                  ],
              }),
              vitePluginReactJsSupport([], {
                  jsxInject: true,
              }),
              reactRefresh(),
          ],
          css: {
              preprocessorOptions: {
                  less: {
                      // 支持内联 JavaScript
                      javascriptEnabled: true,
                  },
                  define: define,
                  server: {
                      // 代理
                      proxy
                  },
                  build: {
                      target: 'es2015',
                      minify: 'terser', // 是否进行压缩,boolean | 'terser' | 'esbuild',默认使用terser
                      manifest: false, // 是否产出maifest.json
                      sourcemap: false, // 是否产出soucemap.json
                      outDir: 'build', // 产出目录
                      rollupOptions
                  },
                  esbuild,
                  optimizeDeps,
                  plugins: [
                      legacyPlugin({
                          targets: [
                              'Android > 39',
                              'Chrome >= 60',
                              'Safari >= 10.1',
                              'iOS >= 10.3',
                              'Firefox >= 54',
                              'Edge >= 15'
                          ]
                      }),
                      vitePluginReactJsSupport([], {
                          jsxInject: true
                      }),
                      reactRefresh()
                  ],
                  css: {
                      preprocessorOptions: {
                          less: {
                              // 支持内联 JavaScript
                              javascriptEnabled: true
                          }
                      }
                  }
              }
          }
      }
  }
}

