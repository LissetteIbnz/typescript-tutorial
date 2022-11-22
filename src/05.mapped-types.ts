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
  
};
