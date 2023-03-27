import { useLocation } from "react-router-dom";

function OrderNotice() {
  const location = useLocation();
  const Notice = location.state.response;
  console.log(Notice);
  return <h1>{Notice.message}</h1>;
}

export default OrderNotice;
