import { useUserData } from "./UserDataProvider";
import UserModalContent from "./UserModalContent";

function UserModal(props) {
  const { add, edit, current, del } = props;
  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    currentId,
    clearInputs
  } = useUserData();

  return (
    <UserModalContent
      current={current}
      fName={firstName}
      lName={lastName}
      mail={email}
      onFChange={(e) => setFirstName(e.target.value)}
      onLChange={(e) => setLastName(e.target.value)}
      onEChange={(e) => setEmail(e.target.value)}
      onClick={
        current === "add-user"
          ? () => {
              add(firstName, lastName, email);
              clearInputs("User added successfully.");
            }
          : current === "edit-user"
          ? () => {
              edit(currentId, firstName, lastName, email);
              clearInputs("User edited successfully.");
            }
          : current === "delete-user"
          ? () => {
              del(currentId);
              clearInputs("User deleted successfully.");
            }
          : null
      }
    />
  );
}

export default UserModal;
