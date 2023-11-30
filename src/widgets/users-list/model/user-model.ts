import { types } from "mobx-state-tree";

export const UserModel = types
  .model({
    id: types.identifierNumber,
    name: types.string,
  })
  .actions((self) => ({
    editName(newName: string) {
      self.name = newName;
    },
  }));
