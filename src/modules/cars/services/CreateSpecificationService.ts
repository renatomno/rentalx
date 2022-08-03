import { Specification } from "../models/Specification";
import { ISpecificationRepository } from "../repositories/ISpecificationRepository";

class CreateSpecificationService {
  private specificationRepository: ISpecificationRepository;

  constructor(specificationRepository) {
    this.specificationRepository = specificationRepository;
  }

  execute(name: string, description: string): void {
    this.specificationRepository.create(name, description);
  }
}

export { CreateSpecificationService };
