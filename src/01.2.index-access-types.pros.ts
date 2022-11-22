/**
 * ¿Cómo podemos mejorar el uso de nuestros tipos en la aplicación?
 *
 * A veces exportamos y usamos directamente un tipo que pertenece a un modelo...
 * - ¿Qué ocurriría si alguien cambia el tipo del ID de User?
 * - ¿Quién tiene la información sobre la propiedad ID?
 */
export type UserId = string;

export interface User {
  id: UserId;
  firstName: string;
  lastName: string;
}

type Id = User["id"];
