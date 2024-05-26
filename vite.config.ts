import { externalizeDeps } from 'vite-plugin-externalize-deps'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
    build: {
        target: 'node18',
        lib: {
            entry: ['./src/extension.ts'],
            formats: ['cjs']
        },
        rollupOptions: {
            external: ['vscode']
        }
    },
    plugins: [
        dts({
            copyDtsFiles: true
        }),
        externalizeDeps(),
    ]
})
