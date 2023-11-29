import { useState } from "react";
import { observer } from "mobx-react";
import { useDisclosure } from "@mantine/hooks";
import { Group, Text, ActionIcon, Paper, Overlay } from "@mantine/core";
import { IconEdit, IconTrash, IconPower } from "@tabler/icons-react";
import { usersModel } from "../model";
import type { User } from "../api";
import { EditUser } from "./edit-user";

interface UserProps {
  user: User;
  index: number;
}

export const UserCard = observer(({ user, index }: UserProps) => {
  const [opened, { open: openEditModal, close }] = useDisclosure(false);

  const [isPowered, setIsPowered] = useState(true);

  const actions = [
    { onClick: openEditModal, icon: <IconEdit /> },
    {
      onClick: () => usersModel.deleteUser(user.id),
      color: "red",
      icon: <IconTrash />,
    },
    {
      onClick: () => setIsPowered((prev) => !prev),
      style: { zIndex: 201 },
      color: isPowered ? "green" : "red",
      icon: <IconPower />,
    },
  ];

  return (
    <Paper pos="relative" withBorder p="lg">
      {!isPowered && <Overlay color="#fff" blur={5} />}
      <Group justify="space-between">
        <Text mr="5">
          <b>{index}.</b> {user.name}
        </Text>
        <Group>
          {actions.map(({ icon, ...rest }, idx) => (
            <ActionIcon key={idx} size="lg" variant="light" {...rest}>
              {icon}
            </ActionIcon>
          ))}
        </Group>
      </Group>
      <EditUser opened={opened} close={close} user={user} />
    </Paper>
  );
});
