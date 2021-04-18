export interface User {
  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  token: string;
}
export const emptyUser: User = {
  id: -1,
  username: "",
  password: "",
  firstName: "",
  lastName: "",
  token: "",
};
