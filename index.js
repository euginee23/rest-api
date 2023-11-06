import Express, { json, Router } from "express";
import dotenv from "dotenv";
dotenv.config();

const { API_URL } = process.env;
const app = Express();
const router = Router();

app.use(json()).use(
  router.get("/", function (req, res) {
    return res.send("Hello from rest-api v2");
  }),
  router.post("/post-request/:gwapo", (req, res) => {
    const body = req.body;
    const params = req.params;
    const queryParams = req.query;
    res
      .status(200)
      .json({ Body: body, Params: params, "Query Params": queryParams });
  }),
);

app.listen(3000, function () {
  console.log(API_URL);
  console.log("Server is running at port 3000");
});
