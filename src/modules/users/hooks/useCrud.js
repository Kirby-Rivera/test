import { getUsers, deleteUser } from "controllers/userController";
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
      const delete_user = await deleteUser(userId);

      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));

    } catch (err) {
      console.error("Error deleting user:", err);
    }
  }

  return { users, loading, error, deleteCurrentUser };
}
