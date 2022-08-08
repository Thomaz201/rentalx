import { Specification } from '../../../model/Specification';
import { ISpecificationsRepository } from '../../../repositories/Specifications/ISpecificationsRepository';

class ListSpecificationUseCase {
  constructor(private specificationsRepository: ISpecificationsRepository) {}

  execute(): Specification[] {
    return this.specificationsRepository.list();
  }
}

export { ListSpecificationUseCase };
