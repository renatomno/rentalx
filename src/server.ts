import express from "express";

import { categoriesRouter } from "./routes/categories.routes";
import { specificationsRouter } from "./routes/specifications.routes";

const app = express();

app.use(express.json());
app.use("/categories", categoriesRouter);
app.use("/specifications", specificationsRouter);
app.listen(3000);
