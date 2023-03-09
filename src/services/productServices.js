import request from "~/utils/request";

export const newProduct = async (soLuong) => {
  try {
    const res = await request.get(`products/latest/${soLuong}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllSex = async () => {
  try {
    const res = await request.get("products/GetAllSex");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllType = async () => {
  try {
    const res = await request.get("products/GetAllProductType");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
