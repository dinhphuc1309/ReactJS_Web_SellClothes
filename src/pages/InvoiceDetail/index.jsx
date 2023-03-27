import { useParams } from "react-router-dom";

function InvoiceDetail() {
  const { idInvoice } = useParams();
  return <h1>{idInvoice}</h1>;
}

export default InvoiceDetail;
