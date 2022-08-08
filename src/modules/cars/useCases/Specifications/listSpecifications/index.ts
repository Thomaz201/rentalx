import { SpecificationsRepository } from '../../../repositories/Specifications/implementations/SpecificationsRepository';
import { ListSpecificationsController } from './ListSpecificationsController';
import { ListSpecificationUseCase } from './ListSpecificationsUseCase';

const specificationsRepository = SpecificationsRepository.getInstance();

const listSpecificationUseCase = new ListSpecificationUseCase(
  specificationsRepository,
);

const listSpecificationController = new ListSpecificationsController(
  listSpecificationUseCase,
);

export { listSpecificationController };
