import "./Input.styles.scss";
function Input(props) {
  return (
    <input
      className="input-textField"
      type={props.type}
      id={props.id}
      placeholder={props.placeholder}
      style={{ color: "white" }}
      value={props.value}
      onChange={props.handleChange}
      minLength={8}
      required
    />
  );
}

export default Input;
