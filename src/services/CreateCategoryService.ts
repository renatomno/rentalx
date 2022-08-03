import { ICategoryRepository } from "../repositories/ICategoryRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryService {
  constructor(private CategoriesRepository: ICategoryRepository) {}

  execute({ name, description }: IRequest): void {
    const categoryAlreadyExists = this.CategoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error(`Category ${name} already exists`);
    }

    this.CategoriesRepository.create({ name, description });
  }
}

export { CreateCategoryService };
