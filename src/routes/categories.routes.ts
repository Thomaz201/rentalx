import { Request, Response, Router } from 'express';

import { CategoryRepository } from '../modules/cars/repositories/Categories/CategoriesRepository';
import { CreateCategoryService } from '../modules/cars/services/Categories/CreateCategoryService';

const categoriesRoutes = Router();
const categoriesRepository = new CategoryRepository();

categoriesRoutes.post('/', (request: Request, response: Response) => {
  const { name, description } = request.body;

  const createCategoryService = new CreateCategoryService(categoriesRepository);

  createCategoryService.execute({ name, description });

  return response.status(201).send();
});

categoriesRoutes.get('/', (request: Request, response: Response) => {
  const categories = categoriesRepository.list();

  return response.status(200).json(categories);
});

export { categoriesRoutes };
