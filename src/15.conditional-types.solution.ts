import { Equal, Expect } from "./helpers";

interface User {
  rol: "user";
}

interface Admin {
  rol: "admin";
}

interface Guest {
  rol: "guest";
}

type CanUpdate<T> = T extends { rol: "user" | "admin" } ? true : false

type tests = Expect<Equal<CanUpdate<User>, true>>
type tests1 = Expect<Equal<CanUpdate<Admin>, true>>
type tests2 = Expect<Equal<CanUpdate<Guest>, false>>