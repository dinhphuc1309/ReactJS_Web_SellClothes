import { Link, useParams } from "react-router-dom";
import classNames from "classnames/bind";
import { MdKeyboardArrowRight } from "react-icons/md";

import styles from "./ProductDetail.module.scss";
import config from "~/config";

const cx = classNames.bind(styles);

function ProductDetail() {
  const { idProduct } = useParams();
  console.log(idProduct);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("breadcrumb")}>
        <div className={cx("breadcrumb-inner")}>
          <Link to={config.routes.home}>{config.texts.home}</Link>
          <MdKeyboardArrowRight />
          <Link to={config.routes.products}>{config.texts.products}</Link>
          <MdKeyboardArrowRight />
          <p>{config.texts.products}</p>
        </div>
      </div>

      <div className={cx("inner")}>
        <h2 className={cx("heading")}>{config.texts.titleProductsPage}</h2>
      </div>
    </div>
  );
}

export default ProductDetail;
