import { Category } from '../model/Category';

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

class CategoryRespository {
  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  list(): Category[] {
    return this.categories;
  }

  create({ name, description }: ICreateCategoryDTO): void {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });

    this.categories.push(category);
  }
}

export { CategoryRespository };