import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Product.module.scss";
import config from "~/config";
import imgProduct from "~/assets/images/productImage.png";

const cx = classNames.bind(styles);
// function Product({ product }) {
//   return (
//     <Col md={3} className={cx("product-wrap")}>
//       <Link to={`${config.routes.productDetail}${product.NameProduct}`}>
//         <img
//           className={cx("product-image")}
//           src={product.ImageProduct}
//           alt={product.ImageProduct}
//         />

//         <div className={cx("product-info-wrap")}>
//           <div className={cx("product-info")}>
//             <p title="product" className={cx("product-name")}>
//               {product.NameProduct}
//             </p>
//             <p title="size" className={cx("product-size")}>
//               xs
//             </p>
//           </div>

//           <p className={cx("product-price")}>
//             {product.PriceProduct}
//             <span className={cx("currency-symbol")}>&#160;VND</span>
//           </p>
//         </div>
//       </Link>
//     </Col>
//   );
// }

function Product({ product }) {
  let VND = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  return (
    <Col md={3} className={cx("product-wrap")}>
      <div className={cx("product-inner")}>
        <Link to={``}>
          <img className={cx("product-image")} src={imgProduct} alt="s" />

          <div className={cx("product-info-wrap")}>
            <p title="product" className={cx("product-name")}>
              áo
            </p>

            <p className={cx("product-price")}>{VND.format(10000)}</p>
          </div>
        </Link>
      </div>
    </Col>
  );
}

export default Product;
