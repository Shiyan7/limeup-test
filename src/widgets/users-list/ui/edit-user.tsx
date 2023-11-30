import { useState } from "react";
import { Flex, Modal, Input, Button } from "@mantine/core";
import { usersModel } from "../model";
import { User } from "../types";

interface EditNameProps {
  opened: boolean;
  close: () => void;
  user: User;
}

export const EditUser = ({ opened, close, user }: EditNameProps) => {
  const [name, setName] = useState(user.name);

  const handleEditName = () => {
    usersModel.editName(user, name);
    close();
  };

  return (
    <Modal
      size="sm"
      zIndex={1000}
      centered
      opened={opened}
      onClose={close}
      title="Edit name"
    >
      <Flex direction="column">
        <Input
          mb="10"
          w="100%"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Изменить имя пользователя"
        />
        <Button ml="auto" onClick={handleEditName}>
          Save
        </Button>
      </Flex>
    </Modal>
  );
};
