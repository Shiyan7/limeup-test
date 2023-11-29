import { makeAutoObservable } from "mobx";
import { notifications } from "@mantine/notifications";
import { User, getAllUsers } from "../api";

class UsersModel {
  users: User[] = [];
  isLoading = true;

  constructor() {
    makeAutoObservable(this);
  }

  editName(id: number, newName: string) {
    this.users = this.users.map((user) => {
      const newUser = { ...user, name: newName } as User;

      if (user.id === id) {
        notifications.show({
          message: `Username ${user.name} has been changed to ${newName}`,
          color: "orange",
        });

        return newUser;
      }

      return user;
    });
  }

  addUser(name: string) {
    if (name.trim()) {
      const newUser = {
        id: Math.random(),
        name,
      } as User;

      this.users = [newUser, ...this.users];

      notifications.show({
        message: "New user added",
        color: "green",
      });
    }
  }

  deleteUser(id: number) {
    this.users = this.users.filter((user) => user.id !== id);

    notifications.show({
      message: "User deleted",
      color: "orange",
    });
  }

  async getAll() {
    const users = await getAllUsers();

    this.users = users;
    this.isLoading = false;
  }
}

export const usersModel = new UsersModel();
