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

/**
 * ❓ Cómo podemos excluir de la unión de tipos Event, los que no son un evento de teclado?
 */
type NonKeyDownEvents = unknown;

type tests = [
  Expect<
    Equal<
      NonKeyDownEvents,
      | { type: "click"; event: MouseEvent }
      | { type: "focus"; event: FocusEvent }
    >
  >,
];

