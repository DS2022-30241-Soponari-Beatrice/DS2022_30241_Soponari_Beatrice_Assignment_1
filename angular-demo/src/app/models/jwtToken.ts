import {Role} from "./role";

export interface jwtToken {
  role: Role
  accessToken: string;
}
