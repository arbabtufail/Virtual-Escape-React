import { useState } from "react";
import "./BlurredFrame.styles.scss";
import Input from "components/ui/input/Input";
import Button from "components/ui/button/Button";
import ScreenText from "components/shared/screen-text/ScreenText";
import FingerPrint from "assets/icons/finger.png";

const BlurredFrame = () => {
  const [password, setPassword] = useState("");

  function handleChange(event) {
    setPassword(event.target.value);
  }

  const onClickHandleChange = () => {};

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
