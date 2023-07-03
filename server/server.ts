import express, { Application } from "express";
import userServiceRoutes from "./routes/userService.routes";
import cors from "cors";

const corsOptions = {
  origin: "http://localhost:5173",
};

const app: Application = express();
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

userServiceRoutes(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

export default app;
