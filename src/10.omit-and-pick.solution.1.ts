import { Equal, Expect } from "./helpers";

interface User {
  id: string;
  firstName: string;
  lastName: string;
}

/**
 * ¿Cómo podemos crear un nuevo tipo sólo con las propiedades
 * firstName y lastName de User?
 */

type MyType = Omit<User, "id">;

type tests = [Expect<Equal<MyType, { firstName: string; lastName: string }>>];

