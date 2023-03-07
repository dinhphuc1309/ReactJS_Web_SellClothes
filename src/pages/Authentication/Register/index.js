import style from "../Authentication.module.scss";
import classNames from "classnames/bind";
import config from "~/config";
import imgAuthen from "~/assets/images/authenbackgroundImage.jpg";
import {
  FaEnvelope,
  FaLock,
  FaUser,
  FaLocationArrow,
  FaPhoneAlt,
} from "react-icons/fa";
import Button from "~/components/Button";

const cx = classNames.bind(style);

function Register() {
  return (
    <div className={cx("background")}>
      <div className={`${cx("container-authenForm")} shadow`}>
        <div className={cx("cover")}>
          <img src={imgAuthen} alt="" />
        </div>
        <div className={cx("form-content")}>
          <div>
            <div className={cx("title")}>{config.texts.titleRegister}</div>
            <div className="input-boxes">
              <div className={cx("input-box")}>
                <FaUser className={cx("icon")} />
                <input
                  type="text"
                  placeholder={config.texts.enterYourName}
                  name="fullName"
                  required
                />
              </div>
              <div className={cx("input-box")}>
                <FaEnvelope className={cx("icon")} />
                <input
                  type="email"
                  placeholder={config.texts.enterYourEmail}
                  name="email"
                  required
                />
              </div>
              <div className={cx("input-box")}>
                <FaLocationArrow className={cx("icon")} />
                <input
                  type="text"
                  placeholder={config.texts.enterYourAddress}
                  name="address"
                  required
                />
              </div>
              <div className={cx("input-box")}>
                <FaPhoneAlt className={cx("icon")} />
                <input
                  type="tel"
                  placeholder={config.texts.enterYourPhone}
                  name="phone"
                  required
                />
              </div>
              <div className={cx("input-box")}>
                <FaLock className={cx("icon")} />
                <input
                  type="password"
                  placeholder={config.texts.enterYourPassword}
                  name="password"
                  required
                />
              </div>
              <div className={cx("input-box")}>
                <FaLock className={cx("icon")} />
                <input
                  type="password"
                  placeholder={config.texts.confirmPassword}
                  name="repass"
                  required
                />
              </div>

              <Button className={cx("button")} primary>
                {config.texts.buttonRegister}
              </Button>
              <div className={cx("textChangeScreen")}>
                <p>{config.texts.alreadyHaveAnAccount}</p>
                <Button text to={config.routes.login}>
                  {config.texts.loginNow}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
