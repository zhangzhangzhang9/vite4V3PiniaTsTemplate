import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path'; //这个path用到了上面安装的@types/node
import viteCompression from 'vite-plugin-compression'; // 生成.gz文件
// https://vitejs.dev/config/
export default ({ mode }) => {
  console.log('mode', loadEnv(mode, process.cwd()).VITE_BASE_URL); //127.0.0.1:9000/api
  return defineConfig({
    base: '', // 开发或生产环境服务的公共基础路径
    optimizeDeps: {
      force: true // 强制进行依赖预构建
    },
    plugins: [
      vue(),
      {
        ...viteCompression(),
        apply: 'build',
      },
    ],
    //这里进行配置别名
    resolve: {
      alias: {
        '@': path.resolve('./src'), // @代替src
        '#': path.resolve('./types'), // #代替types
      },
      // extensions: ['.js', '.ts', '.json'] // 导入时想要省略的扩展名列表默认值为 ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'] 
    },
    // css 公共部分
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/index.scss";',
        },
      },
      // 移动端适配 postcssPxToViewport
      // postcss: {
      //   plugins: [
      //     // viewport 布局适配
      //     postcssPxToViewport({
      //       viewportWidth: 375
      //     })
      //   ]
      // }
    },
    // 端口 proxy代理
    server: {
      host: '0.0.0.0',
      port: 9999,
      open: true,
      https: false,
      proxy: {
        '/api': {
          target: '要代理的地址',
          changeOrigin: true,
          ws: true,
          rewrite: (path: string) => path.replace(/^\/api/, ''),
        },
      },
    },
    // 通过() => import()形式加载的组件会自动分包，第三方插件需手动分包
    build: {
      outDir: 'dist', // 打包文件的输出目录
      assetsDir: 'static', // 静态资源的存放目录
      assetsInlineLimit: 4096, // 图片转 base64 编码的阈值
      rollupOptions: {
        output: {
          manualChunks: {
            vue: ['vue', 'pinia', 'vue-router'],
            // elementIcons: ['@element-plus/icons-vue'],
          },
          // js和css文件夹分离
          chunkFileNames: "static/js/[name]-[hash].js",
          entryFileNames: "static/js/[name]-[hash].js",
          assetFileNames: "static/[ext]/[name]-[hash].[ext]",
        },
      },
    },
  });
};
