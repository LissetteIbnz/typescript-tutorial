export { }


interface User {
  id: string;
  firstName: string;
  lastName: string;
}

/**
 * CHALLENGE:
 * 😅 ¿Sabías que OMIT no comprueba si las propiedades existen en el objeto? 
 */
type OmitType = Omit<User, "irrelevant">;

/**
* 👇 Esta es la definición original del Omit...
* ¿qué tenemos que cambiar para que sólo admita propiedades conocidas del primer argumento?
*/
type OmitOwn<T, K> = { [P in Exclude<keyof T, K>]: T[P]; };
