export { }

interface Fish {
  swim: () => string;
}

interface Bird {
  fly: () => string;
}

/**
 * ❓ Cómo podemos ejecutar cada acción según el tipo de mascota?
 * 🕵️‍♀️ Guardas de tipo, operador in...
 */
const invokeAction = (pet: Fish | Bird): string => {
  // pet.swim() y pet.fly() 🙏
}


