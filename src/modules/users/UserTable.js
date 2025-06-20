import { useCrud } from "modules/users/hooks/useCrud";
import { usePageNav } from "modules/users/hooks/usePageNav";
import { Table } from "reactstrap";
import { VECTOR_ICONS } from "assets/vector-icons";
import { useState } from "react";
import { Button } from "reactstrap";
import UserModal from "./UserModal";
import useUserData from "./hooks/useUserData";
import Modal from "components/Modal";
import UserModalContent from "./UserModalContent";
import styles from "./Users.module.scss";

function NavBtn(props) {
  const { onClick, title } = props;

  return (
    <button className={styles["table-nav-btn"]} onClick={onClick}>
      {title}
    </button>
  );
}

function UserTable() {
  const [message, setMessage] = useState("");
  const [isModalOpen, setisModalOpen] = useState(false);
  const [currentModal, setCurrentModal] = useState("");
  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    currentId,
    setCurrentId,
  } = useUserData();
  const { users, loading, error, deleteCurrentUser, editUser, addNewUser } =
    useCrud();
  const { paginatedUsers, handlePageChange, currentPage, totalPages } =
    usePageNav({ users });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  if (message) {
    setTimeout(() => {
      setMessage("");
    }, 3000);
  }

  function handleModal(prev, curr) {
    setisModalOpen((prev = !prev));
    setCurrentModal(curr);
  }

  return (
    <>
      <div className="mt-3 text-right">
        <Button
          onClick={() => handleModal(isModalOpen, "add-user")}
          color="primary"
        >
          + Add User
        </Button>
      </div>

      {isModalOpen &&
        (currentModal === "add-user" ? (
          <Modal title={"Add user:"}>
            <UserModal current={currentModal} add={addNewUser} />
          </Modal>
        ) : (
          currentModal === "edit-user" && (
            <Modal title={"Edit User:"}>
              <UserModal
                current={currentModal}
                edit={editUser}
                id={currentId}
                fName={firstName}
                lName={lastName}
                eMail={email}
              />
            </Modal>
          )
        ))}

      <div>{message}</div>

      <Table className="mt-3">
        <thead>
          <tr className={styles["table-header-row"]}>
            <th>ID</th>
            <th>Profile</th>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody className={styles["table-body"]}>
          {paginatedUsers?.map((user, index) => {
            return (
              <tr key={index} className={styles["table-body-row"]}>
                <td>{user.id}</td>
                <td>
                  <img
                    className={styles["user-profile"]}
                    src={user.image}
                    alt="user-profile"
                  />
                </td>
                <td>{user.email}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>
                  <button
                    onClick={() => {
                      deleteCurrentUser(user.id);
                      setMessage("User Deleted Successfully");
                    }}
                  >
                    {VECTOR_ICONS.deleteIcon}
                  </button>
                  <button
                    onClick={() => {
                      handleModal(isModalOpen, "edit-user");
                      setFirstName(user.firstName);
                      setLastName(user.lastName);
                      setEmail(user.email);
                      setCurrentId(user.id);
                    }}
                  >
                    {VECTOR_ICONS.editIcon}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <div className={styles["table-nav"]}>
        <NavBtn
          onClick={() => handlePageChange(currentPage - 1)}
          title={VECTOR_ICONS.chevronLeft}
        />
        <span className={styles["table-nav-current"]}>
          {currentPage} of {totalPages}
        </span>
        <NavBtn
          onClick={() => handlePageChange(currentPage + 1)}
          title={VECTOR_ICONS.chevronRight}
        />
      </div>
    </>
  );
}

export default UserTable;
