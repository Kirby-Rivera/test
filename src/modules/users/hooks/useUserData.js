import { useState } from "react";

function useUserData() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [currentId, setCurrentId] = useState(null);

  return {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    currentId,
    setCurrentId,
  };
}

export default useUserData;
