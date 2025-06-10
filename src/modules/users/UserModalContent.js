import { useState } from "react";
import { useCrud } from "./hooks/useCrud";

function UserModalContent(props) {
  const { current } = props;
  const { addNewUser } = useCrud();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  return current === "add-user" ? (
    <div>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={() => addNewUser(firstName, lastName, email)}>Add User</button>
    </div>
  ) : current === "edit-user" ? (
    <div>This is edit user</div>
  ) : current === "delete-user" ? (
    <div>This is delete User</div>
  ) : (
    <div>This is profile</div>
  );
}

export default UserModalContent;
