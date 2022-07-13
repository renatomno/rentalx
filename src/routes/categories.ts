import { Router } from "express";

import { CategoriesRepository } from "../repositories/CategoriesRepository";
import { CreateCategoryService } from "../services/CreateCategoryService";

const categoriesRouter = Router();

const categoryRepository = new CategoriesRepository();

categoriesRouter.post("/", (request, response) => {
  const { name, description } = request.body;

  const createCategoryService = new CreateCategoryService(categoryRepository);

  createCategoryService.execute({ name, description });

  response.status(200).json({ message: "Category created successfully" });
});

categoriesRouter.get("/", (request, response) => {
  const allCategories = categoryRepository.list();

  return response.status(200).send(allCategories);
});

export { categoriesRouter };
