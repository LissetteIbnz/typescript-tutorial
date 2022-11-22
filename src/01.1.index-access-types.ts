export interface TextVariants {
  primary: "black";
  secondary: "grey";
  danger: "red";
}

type PrimaryColor = TextVariants["primary"];

type NoDangerColor = TextVariants["primary" | "secondary"]; // 👈 Nos devuelve una unión de tipos

type Color = TextVariants[keyof TextVariants]; // 👈 Nos devuelve una unión de tipos



// Con Arrays...
type Letters = ["a", "b", "c"];

type AorB = Letters[0 | 1];

type Letter = Letters[number];



// Propiedades con arrays...
interface UserRoleConfig {
  user: ["view", "create", "update", "otraCosa"];
  admin: ["view", "create", "update", "delete"];
}

type Actions = UserRoleConfig[keyof UserRoleConfig][number];
type FirstAction = UserRoleConfig[keyof UserRoleConfig][0]



// ⛔️ No podemos usar strings como claves...
const key = "primary";
type Primary = TextVariants[key];

// ... pero sí podemos usar un tipo 😅
type primary = "primary";
type Primary2 = TextVariants[primary];

// Typeof nos permite extraer el tipo de una variable
type Primary3 = TextVariants[typeof key];
