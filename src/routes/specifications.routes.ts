import { Router, Request, Response } from 'express';

import { SpecificationsRepository } from '../modules/cars/repositories/Specifications/SpecificationsRepository';
import { CreateSpecificationService } from '../modules/cars/services/Specifications/CreateSpecificationService';

const specificationsRoutes = Router();
const specificationsRepository = new SpecificationsRepository();

specificationsRoutes.post('/', (request: Request, response: Response) => {
  const { name, description } = request.body;

  const createCategoryService = new CreateSpecificationService(
    specificationsRepository,
  );

  createCategoryService.execute({ name, description });

  return response.status(201).send();
});

specificationsRoutes.get('/', (request: Request, response: Response) => {
  const specifications = specificationsRepository.list();

  return response.status(200).json(specifications);
});

export { specificationsRoutes };
