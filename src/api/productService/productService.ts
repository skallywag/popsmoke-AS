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

  getProducts: async () => {
    const response = await axios.get(
      `http://localhost:8080/api/product/products`
    );
    return response.data;
  },

  getProductById: async (id: string) => {
    const response = await axios.get(
      `http://localhost:8080/api/product/product-details/${id}`
    );
    return response.data;
  },
};
