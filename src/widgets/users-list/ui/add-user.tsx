import { Group, Input, Button } from "@mantine/core";
import { observer } from "mobx-react";
import { usersModel } from "../model";
import { useState } from "react";

export const AddUser = observer(() => {
  const [name, setName] = useState("");

  const handleAddUser = () => {
    usersModel.addUser(name);

    setName("");
  };

  return (
    <form noValidate onSubmit={(e) => e.preventDefault()}>
      <Group pt="30">
        <Input
          size="md"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name of user"
        />
        <Button
          variant="gradient"
          type="submit"
          onClick={handleAddUser}
          size="md"
        >
          Create user
        </Button>
      </Group>
    </form>
  );
});
