import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import { FaEnvelope, FaLock } from "react-icons/fa";

import style from "../Authentication.module.scss";
import config from "~/config";
import imgAuthen from "~/assets/images/authenbackgroundImage.jpg";
import Button from "~/components/Button";
import * as authServices from "~/services/authServices";

const cx = classNames.bind(style);
function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const newUser = {
      Email: email,
      PasswordUser: password,
    };

    authServices.loginUser(newUser, dispatch, navigate);
  };

  return (
    <div className={cx("background")}>
      <div className={`${cx("container-authenForm")} shadow`}>
        <div className={cx("cover")}>
          <img src={imgAuthen} alt="" />
        </div>
        <div className={cx("form-content")}>
          <div>
            <div className={cx("title")}>{config.texts.titleLogin}</div>
            <form className="input-boxes" onSubmit={handleLogin}>
              <div className={cx("input-box")}>
                <FaEnvelope className={cx("icon")} />
                <input
                  type="email"
                  placeholder={config.texts.enterYourEmail}
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className={cx("input-box")}>
                <FaLock className={cx("icon")} />
                <input
                  type="password"
                  placeholder={config.texts.enterYourPassword}
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <a
                className={cx("text")}
                href="https://www.google.com.vn"
                target="_blank"
                rel="noreferrer"
              >
                {config.texts.forgotPassword}
              </a>

              <Button className={cx("button")} primary type="submit">
                {config.texts.buttonLogin}
              </Button>
              <div className={cx("textChangeScreen")}>
                <p>{config.texts.doYouHaveAnAccount}</p>
                <Button text to={config.routes.register}>
                  {config.texts.registerNow}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
