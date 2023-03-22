import classNames from "classnames/bind";
import { useSelector } from "react-redux";
import { Col, NavDropdown, Row } from "react-bootstrap";
import { MdSearch, MdOutlineShoppingCart } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";

import styles from "./Header.module.scss";
import config from "~/config";
import Button from "~/components/Button";
import { stateNavSelector, currentUserSelector } from "~/redux/selectors";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Header() {
  const stateNav = useSelector(stateNavSelector);
  const currentUser = useSelector(currentUserSelector);

  const handleLogout = () => {};

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <label className={cx("logo")}>{config.texts.logo}</label>
        <div className={cx("action")}>
          <Row className={cx("action-nav")}>
            <Col>
              <Button
                selected={stateNav === config.routes.home}
                navigation
                to={config.routes.home}
              >
                {config.texts.home}
              </Button>
            </Col>
            <Col>
              <Button
                selected={stateNav === config.routes.products}
                navigation
                to={config.routes.products}
              >
                {config.texts.products}
              </Button>
            </Col>
            <Col>
              <Button
                selected={stateNav === config.routes.about}
                navigation
                to={config.routes.about}
              >
                {config.texts.about}
              </Button>
            </Col>
          </Row>
          <Row className={cx("action-icon")}>
            <Col>
              <Button className={cx("icon")}>
                <MdSearch />
              </Button>
            </Col>
            <Col>
              <Button className={cx("icon")}>
                <MdOutlineShoppingCart />
              </Button>
            </Col>
            <Col>
              {currentUser ? (
                <NavDropdown
                  id="nav-dropdown-user"
                  title={currentUser.FullName}
                >
                  <NavDropdown.Item>
                    <Link
                      className={cx("dropdown-item")}
                      to={
                        config.routes.AccountInformation + currentUser.FullName
                      }
                    >
                      Account Information
                    </Link>
                  </NavDropdown.Item>

                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={handleLogout}>
                    <p className={cx("dropdown-item m-0")}>Logout</p>
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Button to={config.routes.login} className={cx("icon")}>
                  <RxAvatar />
                </Button>
              )}
            </Col>
          </Row>
        </div>
      </div>
    </header>
  );
}

export default Header;
