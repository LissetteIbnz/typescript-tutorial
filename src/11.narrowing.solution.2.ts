export { }

interface Fish {
  swim: () => string;
}

interface Bird {
  fly: () => string;
}


const invokeAction = (pet: Fish | Bird): string => {
  if ("swim" in pet) {
    return pet.swim();
  }

  return pet.fly();
}
