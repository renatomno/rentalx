import { Specification } from "../models/Specification";
import { ISpecificationDTO } from "./ISpecificationRepository";

class CreateSpecificationRepository {
  specifications: Specification[];
  constructor() {
    this.specifications = [];
  }

  create({ name, description }: ISpecificationDTO): void {
    const specification = new Specification(name, description);
    this.specifications.push(specification);
  }

  list(): Specification[] {
    return this.specifications;
  }
}

export { CreateSpecificationRepository };
