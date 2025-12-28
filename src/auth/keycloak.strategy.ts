import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { passportJwtSecret } from 'jwks-rsa';

// Keycloak JWT Payload Interface
export interface KeycloakJwtPayload {
    exp: number;
    iat: number;
    sub: string;
    email_verified: boolean;
    preferred_username: string;
    email?: string;
    realm_access?: {
        roles: string[];
    };
    resource_access?: {
        [clientId: string]: {
            roles: string[];
        };
    };
}

@Injectable()
export class KeycloakStrategy extends PassportStrategy(Strategy, 'keycloak') {
    constructor() {
        const keycloakUrl = process.env.KEYCLOAK_URL || 'http://localhost:8080';
        const realm = process.env.KEYCLOAK_REALM || 'film';

        super({
            // JWT aus Authorization Header extrahieren
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            // Keycloak JWKS Endpunkt für öffentliche Schlüssel
            secretOrKeyProvider: passportJwtSecret({
                cache: true,
                rateLimit: true,
                jwksRequestsPerMinute: 5,
                jwksUri: `${keycloakUrl}/realms/${realm}/protocol/openid-connect/certs`,
            }),
            // Token Issuer validieren
            issuer: `${keycloakUrl}/realms/${realm}`,
            // Audience nicht strikt prüfen (Keycloak setzt das nicht immer)
            audience: process.env.KEYCLOAK_CLIENT_ID || 'film-api',
            algorithms: ['RS256'],
        });
    }

    // Wird aufgerufen wenn Token valide ist
    validate(payload: KeycloakJwtPayload) {
        // Extrahiere Rollen aus dem Token
        const realmRoles = payload.realm_access?.roles || [];
        const clientRoles = payload.resource_access?.['film-api']?.roles || [];

        return {
            userId: payload.sub,
            username: payload.preferred_username,
            email: payload.email,
            roles: [...realmRoles, ...clientRoles],
        };
    }
}
