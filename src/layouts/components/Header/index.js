import classNames from "classnames/bind";
import { useDispatch, useSelector } from "react-redux";
import { MdSearch, MdOutlineShoppingCart } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import styles from "./Header.module.scss";
import config from "~/config";
import Button from "~/components/Button";
import { stateNavSelector } from "~/redux/selectors";
import headerSlice from "./headerSlice";
import { Col, Row } from "react-bootstrap";

const cx = classNames.bind(styles);

function Header() {
  const dispatch = useDispatch();

  const stateNav = useSelector(stateNavSelector);

  const handleChangeNav = (data) => {
    dispatch(headerSlice.actions.navigationChange(data));
  };

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
                onClick={() => {
                  handleChangeNav(config.routes.home);
                }}
              >
                {config.texts.home}
              </Button>
            </Col>
            <Col>
              <Button
                selected={stateNav === config.routes.products}
                navigation
                to={config.routes.products}
                onClick={() => {
                  handleChangeNav(config.routes.products);
                }}
              >
                {config.texts.products}
              </Button>
            </Col>
            <Col>
              <Button
                selected={stateNav === config.routes.about}
                navigation
                to={config.routes.about}
                onClick={() => {
                  handleChangeNav(config.routes.about);
                }}
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
              <Button to={config.routes.login} className={cx("icon")}>
                <RxAvatar />
              </Button>
            </Col>
          </Row>
        </div>
      </div>
    </header>
  );
}

export default Header;
