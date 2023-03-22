import { useParams } from "react-router-dom";

function ProductDetail() {
  const { idProduct } = useParams();
  console.log(idProduct);
  return <h2>{idProduct}</h2>;
}

export default ProductDetail;
