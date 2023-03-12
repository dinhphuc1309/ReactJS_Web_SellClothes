import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import classNames from "classnames/bind";

import styles from "./Products.module.scss";
import Product from "~/components/Product";
import * as productServices from "~/services/productServices";
import productsSlice from "./productsSlice";
import { categorySelector, currentProductsSelector } from "~/redux/selectors";
import { useChangeStateNav } from "~/hooks";
import config from "~/config";
import Pagination from "~/pages/Products/components/Pagination";
import Sidebar from "~/pages/Products/components/Sidebar";

const cx = classNames.bind(styles);

function Products() {
  const dispatch = useDispatch();
  const location = useLocation();

  const category = useSelector(categorySelector);
  const currentProducts = useSelector(currentProductsSelector);

  useChangeStateNav(location);

  console.log("render màn hình products");
  useEffect(() => {
    console.log("render lấy tất cả sản phẩm");
    const fetchCategory = async () => {
      const newListSex = await productServices.getAllSex();
      const newListType = await productServices.getAllType();
      const category = {
        sex: newListSex,
        type: newListType,
      };
      dispatch(productsSlice.actions.setCategory(category));
    };
    fetchCategory();
    if (category.selected === "") {
      productServices.getAllProducts(dispatch);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("breadcrumb")}>
        <div className={cx("breadcrumb-inner")}>
          <Link>Home</Link>
          <Link>Products</Link>
        </div>
      </div>

      <div className={cx("inner")}>
        <h2 className={cx("heading")}>{config.texts.titleProductsPage}</h2>
        <Row>
          <Col md={3}>
            <Sidebar category={category} dispatch={dispatch} />
          </Col>
          <Col md={9}>
            <Row>
              {currentProducts?.map((product, index) => (
                <Product key={index} product={product} />
              ))}
            </Row>
            <Pagination />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Products;
