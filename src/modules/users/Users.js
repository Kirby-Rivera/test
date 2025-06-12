import UserTable from "./UserTable";
import { UserDataProvider } from "modules/users/UserDataProvider";

function Users() {
  return (
    <UserDataProvider>
      <UserTable />
    </UserDataProvider>
  );
}

export default Users;
