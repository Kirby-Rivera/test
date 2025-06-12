function UserModalContent(props) {
  const {
    current,
    fName,
    lName,
    mail,
    onFChange,
    onLChange,
    onEChange,
    onClick,
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
      <button onClick={onClick}>
        {current === "add-user" ? "Add user" : "Edit user"}
      </button>
    </div>
  ) : current === "delete-user" ? (
    <div>
      <p>Are you sure you want to delete this user?</p>
      <p>
        Full Name: {fName} {lName}
      </p>
      <p>E-mail: {mail}</p>
      <button onClick={onClick}>Delete</button>
    </div>
  ) : (
    <div>This is profile</div>
  );
}

export default UserModalContent;
