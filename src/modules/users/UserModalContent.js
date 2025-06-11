function UserModalContent(props) {
  const { current, fName, lName, mail, id, onFChange, onLChange, onEChange, add, edit } = props

  return current === "add-user" ? (
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
      <button onClick={add}>
        Add User
      </button>
    </div>
  ) : current === "edit-user" ? (
    <div>

    </div>
  ) : current === "delete-user" ? (
    <div>This is delete User</div>
  ) : (
    <div>This is profile</div>
  );
}

export default UserModalContent;
