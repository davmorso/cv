import { IEducacionReglada } from '../../../domain/models/IEducacionReglada';
import { IEducacionRegladaRepository } from '../../../domain/repositories/IEducacionRegladaRepository';

export class ListarEducacionRegladaUseCase {
    private educacionRegladaRepository: IEducacionRegladaRepository;

    constructor(educacionRegladaRepository: IEducacionRegladaRepository) {
        this.educacionRegladaRepository = educacionRegladaRepository;
    }

    async execute(): Promise<IEducacionReglada[]> {
        return this.educacionRegladaRepository.listarEducacionReglada();
    }
}