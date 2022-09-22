import { Equal, Expect } from "./helpers";

interface Roles {
  user: { actions: string[] };
  admin: { actions: string[] };
  guest: { actions: string[] };
}


/**
 * ❓ Cómo podemos obtener las claves de la interface Roles?
 */
type AvailableRoles = unknown;

type tests = [Expect<Equal<AvailableRoles, "user" | "admin" | "guest">>];

