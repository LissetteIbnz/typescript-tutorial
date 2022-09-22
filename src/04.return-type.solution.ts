import { Equal, Expect } from "./helpers";

interface Rol {
  actions: string[];
  enabled: boolean;
}

const getRoles = (roles: Rol[]) => {
  return roles.filter(rol => rol.enabled).flatMap(rol => rol.actions)
}

/**
 * ¿Cómo podemos obtener el tipo directamente de la función?
 */
type EnableRoles = ReturnType<typeof getRoles>;

type tests = [Expect<Equal<EnableRoles, string[]>>];

