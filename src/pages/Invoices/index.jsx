import classNames from "classnames/bind";
import Button from "~/components/Button";
import config from "~/config";

import styles from "./Invoices.module.scss";

const cx = classNames.bind(styles);

function Invoices() {
  let VND = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  return (
    <div className={cx("background")}>
      <div className={cx("inner")}>
        <h2 className={cx("heading")}>History</h2>
        <div className={cx("wrap-history")}>
          <div className={cx("history-card")}>
            <div>
              <p className={cx("title-card")}>Mã hóa đơn</p>
              <p>123</p>
            </div>
            <div>
              <p className={cx("title-card")}>Tổng tiền</p>
              <p>{VND.format(1000000)}</p>
            </div>

            <Button to={config.routes.invoices + "/" + 123} primary>
              Detail
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Invoices;
