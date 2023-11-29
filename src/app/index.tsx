import { UsersList } from "@/widgets/users-list";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";

export const App = () => {
  return (
    <MantineProvider>
      <UsersList />
      <Notifications w={250} />
    </MantineProvider>
  );
};
