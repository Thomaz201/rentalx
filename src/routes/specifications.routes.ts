import { Router, Request, Response } from 'express';

import { createSpecificationController } from '../modules/cars/useCases/Specifications/createSpecification';
import { listSpecificationController } from '../modules/cars/useCases/Specifications/listSpecifications';

const specificationsRoutes = Router();

specificationsRoutes.post('/', (request: Request, response: Response) => {
  return createSpecificationController.handle(request, response);
});

specificationsRoutes.get('/', (request: Request, response: Response) => {
  return listSpecificationController.handle(request, response);
});

export { specificationsRoutes };
