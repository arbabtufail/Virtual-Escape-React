import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "context/auth-context/AuthContext";
import "./BlurredFrame.styles.scss";
import Input from "components/ui/input/Input";
import Button from "components/ui/button/Button";
import ScreenText from "components/shared/screen-text/ScreenText";
import FingerPrint from "assets/icons/finger.png";

const BlurredFrame = () => {
  const [password, setPassword] = useState("");
  const [isDisabledValid, setIsDisabledValid] = useState(true);
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  console.log("lllllll", isDisabledValid);
  console.log("auth is:  ", isAuthenticated);
  console.log("password length is:  ", password.length);

  function handleChange(event) {
    setPassword(event.target.value);
    if (event.target.value.length === 8) {
      setIsAuthenticated(true);
      setIsDisabledValid(false);
    } else {
      setIsDisabledValid(true);
      setIsAuthenticated(false);
    }
  }

  const onClickHandleChange = () => {
    console.log("here on click");
    if (password.length === 8) {
      navigate("/home");
    }
  };

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="full-div">
      <div className="escape-login-container">
        <div className="blurred-frame-content">
          <ScreenText>
            <h3 className="heading-text">VIRTUAL ESCAPE</h3>
            <div className="sentence">
              Enter your game code below to get started
            </div>
          </ScreenText>
          <form onSubmit={handleSubmit}>
            <div className="input-center">
              <Input
                type="password"
                value={password}
                handleChange={handleChange}
                placeholder="Game Code"
                maximumLength={8}
              />
              <div className="oval">
                <p>?</p>
              </div>
            </div>

            <div className="button-container">
              <Button buttonClass="test-connection-button">
                Test Connection
              </Button>
              <Button
                type="submit"
                buttonClass="log-in-button"
                onClickHandler={onClickHandleChange}
                isDisabled={isDisabledValid}
              >
                LOG IN <img src={FingerPrint} alt="" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default BlurredFrame;
