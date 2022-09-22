import { Equal, Expect } from "./helpers";

const makeQuery = (
  url: string,
  opts?: {
    method?: string;
    headers?: {
      [key: string]: string;
    };
    body?: string;
  }
) => { };

/**
 * ❓ Cómo podemos extraer los parámetros de la función makeQuery?
 * 🕵️‍♀️ Parámetros, parámetros...
 */
type MakeQueryParameters = unknown;

type tests = [
  Expect<
    Equal<
      MakeQueryParameters,
      [
        url: string,
        opts?: {
          method?: string;
          headers?: {
            [key: string]: string;
          };
          body?: string;
        }
      ]
    >
  >
];
