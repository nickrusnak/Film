import { SetMetadata } from '@nestjs/common';

export const ROLES_KEY = 'roles';

// Decorator um benötigte Rollen zu definieren
// Verwendung: @Roles('admin', 'user')
export const Roles = (...roles: string[]) => SetMetadata(ROLES_KEY, roles);
