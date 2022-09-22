import { Equal, Expect } from "./helpers";

interface Rol {
  actions: string[];
  enabled: boolean;
}

const getEnabledRoles = (roles: Rol[]) => {
  return roles.filter(rol => rol.enabled).flatMap(rol => rol.actions)
}

/**
 * ❓ Cómo podemos obtener el tipo retornado por la función getEnabledRoles?
 */
type EnableRoles = unknown;

type tests = [Expect<Equal<EnableRoles, string[]>>];

