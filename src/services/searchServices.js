import request from "~/utils/request";

export const search = async (q, type = "less") => {
  try {
    const res = await request.get("users/AddSizeProduct", {
      params: {
        q,
        type,
      },
    });
    return res.data.data;
  } catch (error) {
    console.log(error);
  }
};
