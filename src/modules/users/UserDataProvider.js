import { createContext, useContext, useState } from "react";

export const UserDataContext = createContext();

export function UserDataProvider({ children }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [currentId, setCurrentId] = useState(null);
  const [isModalOpen, setisModalOpen] = useState(false);
  const [currentModal, setCurrentModal] = useState("");
  const [message, setMessage] = useState("");

  function clearInputs(mess) {
    setFirstName("");
    setLastName("");
    setEmail("");
    setCurrentId(0);

    handleModal(isModalOpen, currentModal);

    setMessage(mess);
  }

  function handleModal(prev, curr) {
    setisModalOpen((prev = !prev));
    setCurrentModal(curr);
    setFirstName("");
    setLastName("");
    setEmail("");
    setCurrentId(0);
  }

  return (
    <UserDataContext.Provider
      value={{
        firstName,
        setFirstName,
        lastName,
        setLastName,
        email,
        setEmail,
        currentId,
        setCurrentId,
        isModalOpen,
        currentModal,
        handleModal,
        message,
        setMessage,
        clearInputs,
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
}

export function useUserData() {
  return useContext(UserDataContext);
}
