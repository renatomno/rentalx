import { Category } from "../models/Category";

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoryRepository {
  list(): Category[];
  create({ name, description }: ICreateCategoryDTO): void;
  findByName(name: string): Category;
}

export { ICategoryRepository, ICreateCategoryDTO };
