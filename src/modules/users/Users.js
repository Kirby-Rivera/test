import UserTable from "./UserTable";
import { Button } from "reactstrap";

function Users() {
  return (
    <>
      <div className="mt-3 text-right">
        <Button color="primary">+ Add User</Button>
      </div>

      <UserTable />
    </>
  );
}

export default Users;
