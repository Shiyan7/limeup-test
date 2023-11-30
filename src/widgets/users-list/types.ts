import { Instance } from "mobx-state-tree";
import { UserModel } from "./model";

export interface User extends Instance<typeof UserModel> {}
