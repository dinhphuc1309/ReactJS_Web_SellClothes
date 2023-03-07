import config from "~/config";
import Home from "~/pages/Home";
import Product from "~/pages/Product";
import About from "~/pages/About";
import ProductDetail from "~/pages/ProductDetail";

const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.product, component: Product },
  { path: config.routes.productDetail, component: ProductDetail },
  { path: config.routes.about, component: About },
];

//Đăng nhập mới vào được không thì sẽ chuyển tới trang đăng nhập
const privateRoutes = [];

export { publicRoutes, privateRoutes };
