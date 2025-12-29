import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { KeycloakStrategy } from './keycloak.strategy';
import { KeycloakAuthGuard } from './keycloak-auth.guard';
import { RolesGuard } from './roles.guard';

@Module({
    imports: [PassportModule.register({ defaultStrategy: 'keycloak' })],
    providers: [KeycloakStrategy, KeycloakAuthGuard, RolesGuard],
    exports: [PassportModule, KeycloakAuthGuard, RolesGuard],
})
export class AuthModule {}
