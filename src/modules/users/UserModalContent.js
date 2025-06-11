function UserModalContent(props) {
  const {
    current,
    fName,
    lName,
    mail,
    onFChange,
    onLChange,
    onEChange,
    add,
  } = props;

  return current === "add-user" || current === "edit-user" ? (
    <div>
      <input
        type="text"
        placeholder="First Name"
        value={fName}
        onChange={onFChange}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lName}
        onChange={onLChange}
      />
      <input
        type="text"
        placeholder="Email"
        value={mail}
        onChange={onEChange}
      />
      <button onClick={add}>{current === "add-user" ? "Add user" : "Edit user"}</button>
    </div>
  ) : current === "delete-user" ? (
    <div>This is delete User</div>
  ) : (
    <div>This is profile</div>
  );
}

export default UserModalContent;
