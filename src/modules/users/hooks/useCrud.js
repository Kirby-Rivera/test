import {
  getUsers,
  deleteUser,
  createUser,
  updateUser,
} from "controllers/userController";
import { useState, useEffect } from "react";

export function useCrud() {
  const [users, setUsers] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const result = await getUsers();
        setUsers(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  async function deleteCurrentUser(userId) {
    try {
      await deleteUser(userId);

      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
    } catch (err) {
      console.error("Error deleting user:", err);
    }
  }

  async function addNewUser(firstName, lastName, email) {
    const arrayIds = users.map((user) => user.id);

    const userData = {
      id: Math.max(...arrayIds) + 1,
      firstName: firstName,
      lastName: lastName,
      email: email,
      image: "https://dummyjson.com/icon/michaelw/128",
    };

    try {
      await createUser(userData);

      setUsers((prevUsers) => [...prevUsers, userData]);
    } catch (err) {
      console.error("Error adding user:", err);
    }
  }

  async function editUser(id, firstName, lastName, email) {
    const newUserData = {
      id: id,
      firstName: firstName,
      lastName: lastName,
      email: email,
      image: "https://dummyjson.com/icon/michaelw/128",
    };

    try {
      await updateUser(id, newUserData);

      setUsers((prevUsers) =>
        prevUsers.map((user) => (user.id === id ? newUserData : user))
      );
    } catch (err) {
      console.error("Error adding user:", err);
    }
  }

  return { users, loading, error, deleteCurrentUser, addNewUser, editUser };
}
