import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Button from "~/components/Button";
import Product from "~/components/Product";
import config from "~/config";
import style from "./Home.module.scss";

import * as productServices from "~/services/productServices";

const cx = classNames.bind(style);

function Home() {
  const [newProduct, setNewProduct] = useState([]);

  useEffect(() => {
    const fetchNewProducts = async () => {
      const result = await productServices.newProduct(4);
      setNewProduct(result);
    };

    fetchNewProducts();
  }, []);

  return (
    <>
      <div className={cx("img-wrap")}>
        <div className={cx("img-inner")}></div>
        <div className={cx("caption")}>
          <h1>{config.texts.welcome}</h1>
          <p>{config.texts.describeHome}</p>
          <Button primary to={config.routes.product}>
            {config.texts.shopNow}
          </Button>
        </div>
      </div>
      <div className={cx("new-product-wrap")}>
        <h2 className={cx("new-product-wrap-tile")}>
          {config.texts.titleNewProducts}
        </h2>
        <Row className="justify-content-md-center">
          {newProduct.map((result, index) => (
            <Product key={index} product={result} />
          ))}
        </Row>
      </div>
    </>
  );
}

export default Home;
