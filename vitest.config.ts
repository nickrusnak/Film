import swc from 'unplugin-swc';
import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        // Globale Test-Konfiguration
        globals: true,
        // Root-Verzeichnis für Tests
        root: './',
        // Test-Pattern
        include: ['**/*.spec.ts', '**/*.test.ts'],
        // Environment für NestJS
        environment: 'node',
        // Coverage
        coverage: {
            provider: 'v8',
            reporter: ['text', 'html'],
            include: ['src/**/*.ts'],
            exclude: ['src/**/*.spec.ts', 'src/**/*.test.ts', 'src/generated/**'],
        },
        // Timeouts
        testTimeout: 10000,
        hookTimeout: 10000,
    },
    plugins: [
        // SWC Plugin für schnelle TypeScript-Kompilierung
        swc.vite({
            module: { type: 'es6' },
        }),
    ],
});
