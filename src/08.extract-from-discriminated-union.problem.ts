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
 * ❓ Cómo podemos extraer la unión que cumple con el tipo de evento de 🐁?
 */
type ClickEvent = unknown

type tests = [Expect<Equal<ClickEvent, { type: "click"; event: MouseEvent }>>];
