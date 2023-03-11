import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import classNames from "classnames/bind";

import styles from "./Products.module.scss";
import Button from "~/components/Button";
import Product from "~/components/Product";
import * as productServices from "~/services/productServices";
import productsSlice from "./productsSlice";
import { categorySelector, currentProductsSelector } from "~/redux/selectors";
import { useChangeStateNav } from "~/hooks";
import config from "~/config";
import Pagination from "~/pages/Products/components/Pagination";

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
    productServices.getAllProducts(dispatch);
  }, [dispatch]);

  const handleChangeSelected = (idSex, idType) => {
    if (idType) {
      dispatch(productsSlice.actions.setSelected(idType));
    } else {
      dispatch(productsSlice.actions.setSelected(idSex));
      productServices.getAllProductsBySex(idSex, dispatch);
    }
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("breadcrumb")}>
        <div className={cx("breadcrumb-inner")}>
          <a href="index.php">Home </a>
          <a href="products.php">Product</a>
        </div>
      </div>
      <div className={cx("inner")}>
        <h2 className={cx("heading")}>{config.texts.titleProductsPage}</h2>
        <Row>
          <Col md={3}>
            <div className={cx("sidebar")}>
              <div className={cx("text")}>Category</div>
              <div>
                {category.sex?.map((sex) => (
                  <div key={sex.id} className={cx("sidebar-sex-wrap")}>
                    <Button
                      expand
                      selected={sex.id === category.selected}
                      onClick={() => {
                        handleChangeSelected(sex.id);
                      }}
                    >
                      {sex.NameSex}
                    </Button>
                    <ul className={cx("sidebar-category-wrap")}>
                      {category.type.map((type) => {
                        if (type.Sex.id === sex.id) {
                          return (
                            <li key={type.id}>
                              <Button
                                expand
                                selected={type.id === category.selected}
                                onClick={() => {
                                  handleChangeSelected(sex.id, type.id);
                                }}
                              >
                                {type.NameProductType}
                              </Button>
                            </li>
                          );
                        }
                        return null;
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </Col>
          <Col md={9}>
            <Row>
              {currentProducts?.map((product, index) => (
                <Product key={index} product={product} />
              ))}
            </Row>
            <Pagination></Pagination>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Products;
