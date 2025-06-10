import { getUsers, deleteUser, createUser } from "controllers/userController";
import { useState, useEffect } from "react";

export function useCrud() {
  const [users, setUsers] = useState(null);
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
    const userData = {
      id: 12 + 1,
      firstName: firstName,
      lastName: lastName,
      email: email,
    };

    try {
      const addedUser = await createUser(userData);

      setUsers((prevUsers) => [...prevUsers, addedUser]);
    } catch (err) {
      console.error("Error adding user:", err);
    }
  }

  return { users, loading, error, deleteCurrentUser, addNewUser };
}
