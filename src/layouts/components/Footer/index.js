import styles from "./Footer.module.scss";
import classNames from "classnames/bind";
import { Col, Row } from "react-bootstrap";
import config from "~/config";

const cx = classNames.bind(styles);

function Footer() {
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  return (
    <footer className={cx("wrapper")}>
      <div className={cx("inner")}>
        <Row>
          <Col sm={2}>
            <h1>{config.texts.logo}</h1>
            <p>{config.texts.describe}</p>
          </Col>
          <Col sm={{ span: 2, offset: 1 }}>
            <strong>Contact info</strong>
            <p>
              {config.texts.numberPhone}
              <br />
              {config.texts.email}
            </p>
          </Col>
        </Row>
        <Col sm={10} className={`${cx("copy-right")} mx-auto text-center`}>
          <hr />
          <p>
            Copyright {date}. Design by {config.texts.logo}.
          </p>
        </Col>
      </div>
    </footer>
  );
}

export default Footer;
