import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";

import styles from "./Product.module.scss";
// eslint-disable-next-line
import config from "~/config";
import imgProduct from "~/assets/images/productImage.png";

const cx = classNames.bind(styles);

function Product({ product }) {
  let VND = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  return (
    <Col md={3} className={cx("product-wrap")}>
      <div className={cx("product-inner")}>
        <Link to={``}>
          <img
            className={cx("product-image")}
            src={imgProduct}
            alt={product.NameProduct}
          />

          <div className={cx("product-info-wrap")}>
            <p title="product" className={cx("product-name")}>
              {product.NameProduct}
            </p>

            <p className={cx("product-price")}>
              {VND.format(product.PriceProduct)}
            </p>
          </div>
        </Link>
      </div>
    </Col>
  );
}

export default Product;
