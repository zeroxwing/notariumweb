import {Profile} from "./profile";
export interface User{
  id: number | undefined
  firstname: string | undefined
  lastname: string | undefined
  passwd: string | undefined
  username: string | undefined
  profile: Profile | undefined
}
