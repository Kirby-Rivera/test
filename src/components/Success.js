import { useState } from "react";

function Success(props) {
  const { message } = props;
  const [show, setShow] = useState(null);

  setTimeout(() => {
    setShow(false);
  }, 3000);

  if (!show) {
    setTimeout(() => {
      setShow(true);
    }, 2000);
  }

  return <div className="success-msg">{show ? message : ""}</div>;
}

export default Success;
