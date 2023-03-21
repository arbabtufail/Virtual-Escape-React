import { useState, useEffect, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import "./BlurredFrame.styles.scss";
import Input from "components/ui/input/Input";
import Button from "components/ui/button/Button";
import FingerPrint from "assets/icons/finger.png";
import { useAuthContext } from "context/AuthContainer";
import { MAIN_ROUTE } from "containers/routes/constants";
import FingerPrint2 from "assets/icons/fingerprint.svg";
import LoginScreenText from "../login-screen-text/LoginScreenText";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const BlurredFrame = () => {
  const [isDisabledValid, setIsDisabledValid] = useState(true);
  const { isAuthenticated, setLogin } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate(MAIN_ROUTE);
    }
  }, [isAuthenticated]);

  function handleChange(event) {
    if (event.target.value.length === 8) {
      setIsDisabledValid(false);
    } else {
      setIsDisabledValid(true);
    }
  }

  const onClickHandleChange = () => {
    setLogin("tokenString");
  };

  function handleSubmit(event) {}

  return (
    <div className="full-div">
      <div className="escape-login-container">
        <div className="blurred-frame-content">
          <LoginScreenText>
            <h3 className="heading-text">VIRTUAL ESCAPE</h3>
            <div className="sentence">
              Enter your game code below to get started
            </div>
          </LoginScreenText>
          <form onSubmit={handleSubmit}>
            <div className="input-center">
              <Input
                type="text"
                handleChange={handleChange}
                placeholder="Game Code"
                maximumLength={8}
              />
              <Fragment>
                <div className="oval" id="my-element">
                  ?
                </div>
                <Tooltip anchorId="my-element" className="red">
                  <span>Your game code should be 8 characters long</span>
                </Tooltip>
              </Fragment>
            </div>

            <div className="button-container">
              <Button buttonClass="test-connection-button">
                TEST CONNECTION
              </Button>
              {isDisabledValid ? (
                <Button
                  type="submit"
                  buttonClass="log-in-button"
                  onClickHandler={onClickHandleChange}
                  isDisabled={isDisabledValid}
                >
                  LOG IN{" "}
                  <img
                    className="disabled-fingerprint"
                    src={FingerPrint}
                    alt=""
                  />
                </Button>
              ) : (
                <Button
                  type="submit"
                  buttonClass="log-in-button"
                  onClickHandler={onClickHandleChange}
                  isDisabled={isDisabledValid}
                >
                  LOG IN{" "}
                  <img className="fingerprint" src={FingerPrint2} alt="" />
                </Button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default BlurredFrame;
