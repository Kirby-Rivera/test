function Modal({ children, title }) {
  return (
    <div>
      <h4>{title}</h4>
      {children}
    </div>
  );
}

export default Modal;
