import { Equal, Expect } from "./helpers/type-utils";

export const programModeEnumMap = {
  GROUP: "group",
  ANNOUNCEMENT: "announcement",
  ONE_ON_ONE: "1on1",
} as const;

export type IndividualProgram = typeof programModeEnumMap[
  | "GROUP"
  | "ANNOUNCEMENT"
  | "ONE_ON_ONE"];

type tests = [
  Expect<
    Equal<
      IndividualProgram,
      "group" | "announcement" | "1on1"
    >
  >,
];
