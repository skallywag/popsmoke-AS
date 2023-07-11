import axios from "axios";

export const productService = {
  createProduct: async (
    data: Api.Product.Req.Create
  ): Promise<Api.Product.Res.Create> => {
    const response = await axios.post(
      `http://localhost:8080/api/product/create`,
      data
    );
    return response.data;
  },
};