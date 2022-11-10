import {Role} from "./role";

export interface User {
  username: string;
  password: string;
  name: string;
  role: Role;
  id: String;
}
