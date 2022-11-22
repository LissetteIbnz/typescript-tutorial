interface User {
  firstName: string;
  lastName: string;
  age: number;
}

type ValidationForm<Form> = {
  [Property in keyof Form]: {
    hasError: boolean;
    error: string;
  };
};


const validationsUser: ValidationForm<User> = {
  // Vamos a mapear nuestro genérico 👇
};

/**
 * Cosas interesantes a tener en cuenta
 * - Si alguna propiedad fuera opcional, cómo la hacemos requerida? 🤔
 * - Podemos acceder al valor real de la propiedad que estamos mapeando 💪
 */