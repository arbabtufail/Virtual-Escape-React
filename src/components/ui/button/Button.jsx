import "./Button.styles.scss";

const Button = ({
  children,
  buttonClass,
  type,
  onClickHandler,
  isDisabled,
}) => {
  return (
    <button
      type={type}
      className={buttonClass}
      onClick={onClickHandler}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};

export default Button;
