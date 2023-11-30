import { notifications } from "@mantine/notifications";
import { getAllUsers } from "../api";
import { destroy, flow, types } from "mobx-state-tree";
import { User } from "../types";
import { UserModel } from "./user-model";

const UsersModel = types
  .model({
    users: types.array(UserModel),
    isLoading: true,
  })
  .actions((self) => ({
    editName(user: User, newName: string) {
      notifications.show({
        message: `Username ${user.name} has been changed to ${newName}`,
        color: "orange",
      });

      user.editName(newName);
    },
    addUser(name: string) {
      if (name.trim()) {
        const newUser = {
          id: Math.random(),
          name,
        } as User;

        notifications.show({
          message: "New user added",
          color: "green",
        });

        self.users.unshift(newUser);
      }
    },
    deleteUser(user: User) {
      destroy(user);

      notifications.show({
        message: "User deleted",
        color: "orange",
      });
    },
    getAll: flow(function* () {
      try {
        const users = yield getAllUsers();

        self.users = users;
        self.isLoading = false;
      } catch (error) {
        console.error("Error fetching users:", error);
        self.isLoading = false;
      }
    }),
  }));

export const usersModel = UsersModel.create();
