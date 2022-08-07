import { Request, Response, Router } from 'express';

import { CategoryRespository } from '../repositories/CategoriesRepository';

const categoriesRoutes = Router();
const categoriesRepository = new CategoryRespository();

categoriesRoutes.post('/', (request: Request, response: Response) => {
  const { name, description } = request.body;

  categoriesRepository.create({ name, description });

  return response.status(201).send();
});

categoriesRoutes.get('/', (request, response) => {
  const categories = categoriesRepository.list();

  return response.status(200).json(categories);
});

export { categoriesRoutes };
