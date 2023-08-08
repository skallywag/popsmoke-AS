import { ProductController } from "../controllers/productService.controller";

const productRoutes = (app: any) => {
  const product = ProductController;
  const router = require("express").Router();

  router.post("/create", product.createProduct);
  router.get("/products", product.getProducts);
  router.get("/product-details/:productId", product.getProductById);
  router.post("/update/views/:productId", product.updateProductView);

  app.use("/api/product", router);
};

export default productRoutes;
