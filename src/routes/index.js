import config from "~/config";
import Home from "~/pages/Home";
import Product from "~/pages/Product";
import About from "~/pages/About";
import ProductDetail from "~/pages/ProductDetail";
import Login from "~/pages/Authentication/Login";
import Register from "~/pages/Authentication/Register";

const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.product, component: Product },
  { path: config.routes.productDetail, component: ProductDetail },
  { path: config.routes.about, component: About },
  { path: config.routes.login, component: Login },
  { path: config.routes.register, component: Register },
];

//Đăng nhập mới vào được không thì sẽ chuyển tới trang đăng nhập
const privateRoutes = [];

export { publicRoutes, privateRoutes };
