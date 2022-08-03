import { Category } from "../models/Category";
import { ICategoryRepository, ICreateCategoryDTO } from "./ICategoryRepository";

class PostgresCategoriesRepository implements ICategoryRepository {
  list(): Category[] {
    console.log("chamou no list");
    throw new Error("Method not implemented.");
  }
  create({ name, description }: ICreateCategoryDTO): void {
    console.log("chamou o create");
    throw new Error("Method not implemented.");
  }
  findByName(name: string): Category {
    console.log("chamou o findbyname");
    throw new Error("Method not implemented.");
  }
}

export { PostgresCategoriesRepository };
