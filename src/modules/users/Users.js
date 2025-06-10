import { useState } from "react";
import UserTable from "./UserTable";
import { Button } from "reactstrap";
import Modal from "components/Modal";
import UserModalContent from "./UserModalContent";

function Users() {
  const [userModal, setUserModal] = useState(false);

  function handleModal(prev) {
    setUserModal((prev = !prev));
  }

  return (
    <>
      <div className="mt-3 text-right">
        <Button onClick={() => handleModal(userModal)} color="primary">
          + Add User
        </Button>
      </div>

      {userModal && (
        <Modal>
          <UserModalContent current={"add-user"}/>
        </Modal>
      )}

      <UserTable />
    </>
  );
}

export default Users;
