export { }

interface Fish {
  swim: () => string;
}

interface Bird {
  fly: () => string;
}

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}


const invokeAction = (pet: Fish | Bird): string => {
  if (isFish(pet)) {
    return pet.swim();
  }

  return pet.fly();
}
