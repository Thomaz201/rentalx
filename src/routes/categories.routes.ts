import { Request, Response, Router } from 'express';

import { createCategoryController } from '../modules/cars/useCases/Categories/createCategory';
import { listCategoriesController } from '../modules/cars/useCases/Categories/listCategories';

const categoriesRoutes = Router();

categoriesRoutes.post('/', (request: Request, response: Response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.get('/', (request: Request, response: Response) => {
  return listCategoriesController.handle(request, response);
});

export { categoriesRoutes };
