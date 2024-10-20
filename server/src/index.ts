import express, { Application, Request, Response } from "express";
import "dotenv/config";
import cors from "cors";
const app: Application = express();
import router from "./routes/index.js";

const PORT = process.env.PORT || 7000;
// * Routes

// * Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req: Request, res: Response) => {
  return res.send("It's working 🙌");
});
app.use("/api", router);

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
