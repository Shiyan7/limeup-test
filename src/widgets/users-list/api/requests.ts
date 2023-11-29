import { api } from "@/shared/api";
import { User } from "./types";

export const getAllUsers = async () => {
  return await api.get("/users").json<User[]>();
};
