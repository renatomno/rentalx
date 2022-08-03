import { Router } from "express";
import { CreateSpecificationRepository } from "../modules/cars/repositories/SpecificationRepository";
import { CreateSpecificationService } from "../modules/cars/services/CreateSpecificationService";

const specificationsRouter = Router();
const SpecificationRepository = new CreateSpecificationRepository();

specificationsRouter.post("/", (request, response) => {
  const { name, description } = request.body;
  const service = new CreateSpecificationService(SpecificationRepository);

  service.execute({ name, description });
  response.status(201).send();
});

specificationsRouter.get("/", (request, response) => {
  const allSpecifications = SpecificationRepository.list();

  response.status(200).json(allSpecifications).send();
});

export { specificationsRouter };
