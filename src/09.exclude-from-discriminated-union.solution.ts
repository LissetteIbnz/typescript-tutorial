import { Equal, Expect } from "./helpers";

export type Event =
  | {
    type: "click";
    event: MouseEvent;
  }
  | {
    type: "focus";
    event: FocusEvent;
  }
  | {
    type: "keydown";
    event: KeyboardEvent;
  };

type NonKeyDownEvents = Exclude<Event, { type: "keydown" }>;

type tests = [
  Expect<
    Equal<
      NonKeyDownEvents,
      | { type: "click"; event: MouseEvent }
      | { type: "focus"; event: FocusEvent }
    >
  >,
];
