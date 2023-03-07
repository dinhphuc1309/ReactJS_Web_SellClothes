import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Product.module.scss";
import config from "~/config";

const cx = classNames.bind(styles);
function Product({ product }) {
  return (
    <Col md={3} xxl={2} className={cx("product-wrap")}>
      <Link to={`${config.routes.productDetail}${product.NameProduct}`}>
        <img
          className={cx("product-image")}
          src={product.ImageProduct}
          alt={product.ImageProduct}
        />

        <div className={cx("product-info-wrap")}>
          <div className={cx("product-info")}>
            <p title="product" className={cx("product-name")}>
              {product.NameProduct}
            </p>
            <p title="size" className={cx("product-size")}>
              xs
            </p>
          </div>

          <p className={cx("product-price")}>
            {product.PriceProduct}
            <span className={cx("currency-symbol")}>&#160;VND</span>
          </p>
        </div>
      </Link>
    </Col>
  );
}

export default Product;
