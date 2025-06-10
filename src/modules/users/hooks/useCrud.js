import { getUsers } from "controllers/userController";
import { useState, useEffect } from "react";

export function useCrud() {
  const [users, setUsers] = useState();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers(); 
        setUsers(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchUsers();
  }, []);

  return {
    users,
  };
}
