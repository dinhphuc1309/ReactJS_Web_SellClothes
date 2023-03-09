import { Col, Row } from "react-bootstrap";
import classNames from "classnames/bind";
import styles from "./Products.module.scss";
import Button from "~/components/Button";
import Product from "~/components/Product";
import { useEffect } from "react";
import * as productServices from "~/services/productServices";
import { useDispatch, useSelector } from "react-redux";
import productsSlice from "./productsSlice";
import { categorySelector } from "~/redux/selectors";

const cx = classNames.bind(styles);
function Products() {
  const dispatch = useDispatch();

  const category = useSelector(categorySelector);

  console.log("render");
  useEffect(() => {
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
  }, [dispatch]);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("breadcrumb")}>
        <div className={cx("breadcrumb-inner")}>
          <a href="index.php">Home </a>
          <a href="products.php">Product</a>
        </div>
      </div>
      <div className={cx("inner")}>
        <h2 className={cx("heading")}>Living room</h2>
        <Row>
          <Col md={3}>
            <div className={cx("sidebar")}>
              <div className={cx("text")}>Category</div>
              <div>
                {category.sex?.map((sex) => (
                  <div key={sex.id} className={cx("sidebar-sex-wrap")}>
                    <Button expand selected>
                      {sex.NameSex}
                    </Button>
                    <ul className={cx("sidebar-category-wrap")}>
                      {category.type.map((type) => {
                        if (type.Sex.id === sex.id) {
                          return (
                            <li key={type.id}>
                              <Button expand selected>
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
              <Product />

              <Product />

              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Products;
