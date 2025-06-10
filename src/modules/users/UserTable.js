import { useCrud } from "modules/users/hooks/useCrud";
import { usePageNav } from "modules/users/hooks/usePageNav";
import { Table } from "reactstrap";

import { VECTOR_ICONS } from "assets/vector-icons";

import { useState } from "react";

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
  const { users, loading, error, deleteCurrentUser } = useCrud();
  const { paginatedUsers, handlePageChange, currentPage, totalPages } =
    usePageNav({ users });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  if (message) {
    setTimeout(() => {
      setMessage("");
    }, 3000);
  }

  return (
    <>
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
                    Delete
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
