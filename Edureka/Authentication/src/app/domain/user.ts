export interface DbUser {
  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  token: string;
}
export const emptyDBUser: DbUser = {
  id: -1,
  username: "",
  password: "",
  firstName: "",
  lastName: "",
  token: "",
};
export interface User {
  id: number;
  firstName: string;
  lastName: string;
  auth: Auth | null;
}
export const emptyUser: User = {
  id: -1,
  firstName: "",
  lastName: "",
  auth: null,
};

export interface Auth {
  id: number;
  username: string;
  password: string;
  token: string | null;
}
export const emptyAuth: Auth = {
  id: -1,
  username: "",
  password: "",
  token: "",
};
