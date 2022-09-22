import { Equal, Expect } from "./helpers";

export const programModeEnumMap = {
  GROUP: "group",
  ANNOUNCEMENT: "announcement",
  ONE_ON_ONE: "1on1",
  otro: ""
} as const;

/**
 * Necesitamos extraer los valores de programModeEnumMap. ¿Cómo lo hacemos?
 */
export type IndividualProgram = unknown;

type tests = [
  Expect<
    Equal<
      IndividualProgram,
      "group" | "announcement" | "1on1" | ""
    >
  >,
];
