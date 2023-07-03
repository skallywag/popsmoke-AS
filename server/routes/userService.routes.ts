import { UserController } from "../controllers/userService.controller";

const userRoutes = (app: any) => {
  const user = UserController;
  const router = require("express").Router();

  router.post("/login", user.userLogin);
  router.post("/create", user.userCreate);

  app.use("/api/user", router);
};

export default userRoutes;
