import { ProductController } from "../controllers/productService.controller";

const productRoutes = (app: any) => {
  const product = ProductController;
  const router = require("express").Router();

  router.post("/create", product.createProduct);

  app.use("/api/product", router);
};

export default productRoutes;
