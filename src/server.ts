import express from "express";

import { categoriesRouter } from "./routes/categories";

const app = express();

app.use(express.json());
app.use("/categories", categoriesRouter);

app.listen(3000);
