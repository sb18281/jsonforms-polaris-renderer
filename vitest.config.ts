import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        include: ['test/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
        environment: 'jsdom',
        globals: true,
        setupFiles: './test/setup.ts'
    }
})
