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

type AvailableRoles = keyof typeof roles;

type tests = [Expect<Equal<AvailableRoles, "user" | "admin" | "guest">>];

