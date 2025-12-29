/**
 * ============================================================
 * KEYCLOAK AUTH GUARD
 * ============================================================
 *
 * Dieser Guard schützt Endpunkte vor unauthentifizierten Zugriffen.
 * Er nutzt die Passport-JWT-Strategie um Keycloak-Tokens zu validieren.
 *
 * Verwendung: @UseGuards(KeycloakAuthGuard) auf Controller/Route
 */

import { Injectable, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class KeycloakAuthGuard extends AuthGuard('keycloak') {
    /**
     * Wird nach der Token-Validierung aufgerufen.
     * Wirft UnauthorizedException wenn Token ungültig oder User nicht vorhanden.
     */
    handleRequest<TUser = unknown>(
        err: Error | null,
        user: TUser | false,
        _info: unknown,
        _context: ExecutionContext,
    ): TUser {
        if (err || !user) {
            throw err || new UnauthorizedException('Ungültiger oder fehlender Token');
        }
        return user;
    }
}
