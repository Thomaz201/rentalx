import { Request, Response, Router } from 'express';
import multer from 'multer';

import { createCategoryController } from '../modules/cars/useCases/Categories/createCategory';
import { importCategoriesController } from '../modules/cars/useCases/Categories/importCategories';
import { listCategoriesController } from '../modules/cars/useCases/Categories/listCategories';

const upload = multer({
  dest: './temp',
});

const categoriesRoutes = Router();

categoriesRoutes.post('/', (request: Request, response: Response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.get('/', (request: Request, response: Response) => {
  return listCategoriesController.handle(request, response);
});

categoriesRoutes.post(
  '/import',
  upload.single('file'),
  (request: Request, response: Response) => {
    return importCategoriesController.handle(request, response);
  },
);

export { categoriesRoutes };
