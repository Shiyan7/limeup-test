import { useEffect } from "react";
import { usersModel } from "../model";
import {
  Grid,
  Container,
  Loader as MantineLoader,
  Flex,
  Box,
  Text,
} from "@mantine/core";
import { observer } from "mobx-react";
import { UserCard } from "./user-card";
import { AddUser } from "./add-user";

export const UsersList = observer(() => {
  const { users, isLoading } = usersModel;

  useEffect(() => {
    usersModel.getAll();
  }, []);

  if (isLoading) {
    return (
      <Flex h="100vh" align="center" justify="center">
        <MantineLoader size="lg" />
      </Flex>
    );
  }

  const Items = (
    <Grid>
      {users.map((user, idx) => (
        <Grid.Col key={user.id} span={{ base: 12, md: 6 }}>
          <UserCard index={idx + 1} user={user} />
        </Grid.Col>
      ))}
    </Grid>
  );

  const NoResultsMessage = (
    <Text fw="bold" fz="20" lh="20px">
      No users
    </Text>
  );

  return (
    <Container>
      <Text pt="40" fw="bold" fz="30" lh="30px">
        Users
      </Text>
      <AddUser />
      <Box py="xl">{users.length ? Items : NoResultsMessage}</Box>
    </Container>
  );
});
