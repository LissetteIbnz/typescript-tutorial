export { }

/**
 * ❓ Cómo podemos restringir el uso de la función 'getNames' para que el
 * parámetro que permita pasar sea sólo una colección de objetos 
 * que tenga una propiedad 'name' como un string?
 */

function getNames<T extends { name: string }>(persons: T[]): string[] {
  return persons.map(person => person.name)
}

getNames([{
  name: "irrelevant",
  other: {
    id: 1,
  }
}])