import { Equal, Expect } from "./helpers";

interface Attributes {
  firstName: string;
  lastName: string;
  age: number;
}

/**
 * ❓ Cómo podemos crear un tipo que parta de los miembros en Attributes
 * pero que su valor sea una función que devuelva el tipo inicial de cada uno?
 * 🕵️‍♀️ Tipos mapeados y operadores que ya hemos visto 💪
 */

type AttributeGetters = unknown;

type tests = [
  Expect<
    Equal<
      AttributeGetters,
      {
        firstName: () => string;
        lastName: () => string;
        age: () => number;
      }
    >
  >,
];
