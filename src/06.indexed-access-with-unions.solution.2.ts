import { Equal, Expect } from "./helpers";

export const programModeEnumMap = {
  GROUP: "group",
  ANNOUNCEMENT: "announcement",
  ONE_ON_ONE: "1on1",
} as const;

export type IndividualProgram = typeof programModeEnumMap[keyof typeof programModeEnumMap];

type tests = [
  Expect<
    Equal<
      IndividualProgram,
      "group" | "announcement" | "1on1"
    >
  >,
];
