import { ProductController } from "../controllers/productService.controller";

const productRoutes = (app: any) => {
  const product = ProductController;
  const router = require("express").Router();

  router.post("/create", product.createProduct);
  router.get("/products", product.getProducts);

  app.use("/api/product", router);
};

export default productRoutes;
