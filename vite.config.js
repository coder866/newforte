import { createVuePlugin } from 'vite-plugin-vue2';
import path from 'path'
export default ({ command }) => ({
    base: command === "serve" ? "" : "/build/",
    publicDir: "fake_dir_so_nothing_gets_copied",
    build: {
        outDir: "public/build",
        rollupOptions: {
            input: ["resources/js/app.js"],
        },
    },
    server: {
        strictPort: true,
        port: 3001
    },
    resolve: {
        modules: ['node_modules'],
        alias:[
            {
                find: /^~.+/,
                replacement: (val) => {
                  return val.replace(/^~/, "");
                },
            },            {
                find: "@",
                replacement: (val) => {
                  return val.replace("@", "resources/js/src");
                },
            },
        
    ],
        
    },
     plugins: [createVuePlugin()],
});
