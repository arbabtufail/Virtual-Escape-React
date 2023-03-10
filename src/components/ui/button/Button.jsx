import "./Button.styles.scss";

const Button = ({ children, buttonClass, type, onClickHandler }) => {
  return (
    <button type={type} className={buttonClass} onClick={onClickHandler}>
      {children}
    </button>
  );
};

export default Button;
