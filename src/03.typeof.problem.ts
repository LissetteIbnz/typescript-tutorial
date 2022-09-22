import { Equal, Expect } from "./helpers";

const roles = {
  user: {
    actions: ["view", "create", "update"],
  },
  admin: {
    actions: ["view", "create", "update", "delete"],
  },
  guest: {
    actions: ["view"],
  },
};

/**
 * ❓ Cómo podemos extraer las claves de roles siendo un objeto? (tipado al vuelo)
 */
type AvailableRoles = unknown;

type tests = [Expect<Equal<AvailableRoles, "user" | "admin" | "guest">>];

