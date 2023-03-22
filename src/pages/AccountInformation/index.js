import classNames from "classnames/bind";
import { Col, Row } from "react-bootstrap";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./AccountInformation.module.scss";
import config from "~/config";
import Button from "~/components/Button";
import { currentUserSelector, messageUpdate } from "~/redux/selectors";
import * as authServices from "~/services/authServices";

const cx = classNames.bind(styles);

function AccountInformation() {
  const dispatch = useDispatch();
  const currentUser = useSelector(currentUserSelector);
  const updateMess = useSelector(messageUpdate);

  const [fullName, setFullName] = useState(currentUser.FullName);
  const [email, setEmail] = useState(currentUser.Email);
  const [address, setAddress] = useState(currentUser.AddressUser);
  const [phone, setPhone] = useState(currentUser.PhoneNumber);

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [repassNewPassword, setRepassNewPassword] = useState("");

  const handleUpdateUser = (e) => {
    e.preventDefault();
    const userInfo = {
      FullName: fullName,
      Email: email,
      PhoneNumber: phone,
      AddressUser: address,
    };
    authServices.updateUser(
      currentUser.id,
      userInfo,
      currentUser.token,
      dispatch
    );
  };

  return (
    <div className={cx("background")}>
      <div className={`${cx("wrapper")} shadow`}>
        <h2 className="text-left mb-5">Account information</h2>
        <form onSubmit={handleUpdateUser}>
          <Row className="justify-content-between">
            <Col md={5}>
              <div className={cx("group-infor")}>
                <p>Tên người dùng</p>
                <input
                  type="text"
                  name="fullName"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>
              <div className={cx("group-infor")}>
                <p>Mail</p>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className={cx("group-infor")}>
                <p>Số điện thoại</p>
                <input
                  type="tel"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <div className={cx("group-infor")}>
                <p>Địa chỉ</p>
                <input
                  type="text"
                  name="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>
            </Col>
            <Col md={5}>
              <p className={cx("title-content-wrap")}>Đổi mật khẩu</p>
              <div className={cx("group-infor")}>
                <p>Mật khẩu cũ</p>
                <input
                  type="password"
                  name="oldPass"
                  onChange={(e) => setOldPassword(e.target.value)}
                />
              </div>
              <div className={cx("group-infor")}>
                <p>Mật khẩu mới</p>
                <input
                  type="password"
                  name="newPass"
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>
              <div className={cx("group-infor")}>
                <p>Nhập lại mật khẩu mới</p>
                <input
                  type="password"
                  name="reNewPass"
                  onChange={(e) => setRepassNewPassword(e.target.value)}
                />
              </div>
              {updateMess && <p className="mt-4">{updateMess}</p>}
              <div className={cx("group-button")}>
                <Button outline to={config.routes.home}>
                  Home
                </Button>
                <Button primary type="submit">
                  Save
                </Button>
              </div>
            </Col>
          </Row>
        </form>
      </div>
    </div>
  );
}

export default AccountInformation;
