import { Router } from "express";

import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepository";
import { CreateSpecificationRepository } from "../modules/cars/repositories/SpecificationRepository";
import { CreateCategoryService } from "../modules/cars/services/CreateCategoryService";

const categoriesRouter = Router();
const specificationsRouter = Router();

const categoryRepository = new CategoriesRepository();
const SpecificationRepository = new CreateSpecificationRepository();

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
