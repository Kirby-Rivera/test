import useUserData from "./hooks/useUserData";
import UserModalContent from "./UserModalContent";

function UserModal(props) {
  const { add, edit, current, id, fName, lName, eMail } = props;
  const { firstName, setFirstName, lastName, setLastName, email, setEmail } =
    useUserData();

  current == "edit-user" ? () => setFirstName(fName) : null;

  return current === "add-user" ? (
    <UserModalContent
      current={current}
      fName={firstName}
      lName={lastName}
      mail={email}
      onFChange={(e) => setFirstName(e.target.value)}
      onLChange={(e) => setLastName(e.target.value)}
      onEChange={(e) => setEmail(e.target.value)}
      add={() => add(firstName, lastName, email)}
    />
  ) : (
    current === "edit-user" && (
      <UserModalContent
        current={current}
        fName={firstName}
        lName={lastName}
        mail={email}
        onFChange={(e) => setFirstName(e.target.value)}
        onLChange={(e) => setLastName(e.target.value)}
        onEChange={(e) => setEmail(e.target.value)}
        add={() => {
          edit(id, firstName, lastName, email);
        }}
      />
    )
  );
}

export default UserModal;
