import { Equal, Expect } from "./helpers";

interface User {
  id: string;
  firstName: string;
  lastName: string;
}

/**
 * ❓ Cómo podemos crear un nuevo tipo sólo con las propiedades
 * firstName y lastName de User mediante Omit y Pick?
 */

type TypeWithOmit = unknown;
type TypeWithPick = unknown;

type tests = [Expect<Equal<TypeWithOmit, { firstName: string; lastName: string }>>];
type test2 = [Expect<Equal<TypeWithPick, { firstName: string; lastName: string }>>];


