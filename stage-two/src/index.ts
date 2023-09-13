import express from "express";
import "./db/db.index";
import ApiRouter from "./api/api.route";

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//api Route
app.use("/api", ApiRouter);
