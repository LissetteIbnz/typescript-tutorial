export { }

interface TextVariants {
  primary: "black";
  secondary: "grey";
  danger: "red"
}

type PrimaryColor = TextVariants["primary"];

type NoDangerColor = TextVariants["primary" | "secondary"] // 👈 Nos devuelve una unión de tipos

type Color = TextVariants[keyof TextVariants]; // 👈 Nos devuelve una unión de tipos

// Con Arrays...
type Letters = ["a", "b", "c"]

type AorB = Letters[0 | 1]

type Letter = Letters[number]

// Anidados...
interface UserRoleConfig {
  user: ["view", "create", "update"];
  admin: ["view", "create", "update", "delete"];
}

type Actions = UserRoleConfig[keyof UserRoleConfig][number]
      //^?


// ⛔️ No podemos usar strings como claves...
const key = "primary";
type Primary = TextVariants[key]

// ... pero sí podemos usar un tipo 😅
type primary = "primary";
type Primary2 = TextVariants[primary]
type Primary3 = TextVariants[typeof key]


/**
 * ¿Cómo podemos mejorar el uso de nuestra base de tipos en la aplicación?
 * A veces exportamos y usamos directamente un tipo que pertenece a un modelo...
 * - ¿Qué ocurriría si alguien cambia el tipo del id de User?
 * - ¿Quién tiene la información sobre la propiedad ID?
 */
type UserId = string;

export interface User {
  id: boolean;
  firstName: string;
  lastName: string;
}

type Id = User["id"]
