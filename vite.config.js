import {defineConfig} from 'vite';
import {join, resolve} from 'path';
import vue from '@vitejs/plugin-vue';

const rootPath = import.meta.url.toString().replace('file://', '').replace('/vite.config.js', '').trim();

//import url from 'url';
//const __filename = url.fileURLToPath(import.meta.url);
//const __dirname = path.dirname(__filename);

const aliases = [
    //{find: 'vue$', replacement: 'vue/dist/vue.runtime.esm.js'},
    {find: /~(.+)/, replacement: resolve(rootPath, './node_modules/$1')},
    {find: /@\//, replacement: resolve(rootPath, './js') + '/'},
    {find: /@common\//, replacement: resolve(rootPath, './js/Theme/Common') + '/'},
    {find: /@scss\//, replacement: resolve(rootPath, './scss') + '/'},
    //{find: '@sass', replacement: resolve(rootPath, './resources/sass') + '/'},
];

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: aliases,
    },
    // define: {
    //     'process.platform': 'browser'
    // },
    // optimizeDeps: {
    //     esbuildOptions: {
    //         target: ['esnext'],
    //     }
    // },
    build: {
        target: ['esnext'],
        lib: {
            entry: resolve(rootPath, 'js/index.js'),
            name: 'ThemeLib',
            fileName: (format) => `theme-lib.${format}.js`,
        },
        rollupOptions: {
            // make sure to externalize deps that shouldn't be bundled
            // into your library
            external: ['vue'],
            output: {
                // Provide global variables to use in the UMD build
                // for externalized deps
                globals: {
                    vue: 'Vue',
                },
            },
        },
    },
});
