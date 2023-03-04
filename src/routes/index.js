import config from "~/config";
import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Upload from "~/pages/Upload";
import { HeaderOnly } from "~/layouts";

const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.following, component: Following, layout: null },
  { path: config.routes.upload, component: Upload, layout: HeaderOnly },
];

//Đăng nhập mới vào được không thì sẽ chuyển tới trang đăng nhập
const privateRoutes = [];

export { publicRoutes, privateRoutes };
