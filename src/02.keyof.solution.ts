import { Equal, Expect } from "./helpers";

interface Roles {
  user: { actions: string[] };
  admin: { actions: string[] };
  guest: { actions: string[] };
}


type AvailableRoles = keyof Roles;

type tests = [Expect<Equal<AvailableRoles, "user" | "admin" | "guest">>];
