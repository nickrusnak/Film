import { describe, it, expect } from 'vitest';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from './app.module';

describe('AppModule', () => {
    let module: TestingModule;

    it('sollte das Modul erfolgreich erstellen', async () => {
        module = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        expect(module).toBeDefined();
    });

    it('sollte die App starten können', async () => {
        module = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        const app = module.createNestApplication();
        await app.init();

        expect(app).toBeDefined();

        await app.close();
    });
});
