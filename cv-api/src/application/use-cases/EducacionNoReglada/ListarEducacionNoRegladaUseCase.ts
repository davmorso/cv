import { IEducacionNoReglada } from '../../../domain/models/IEducacionNoReglada';
import { IEducacionNoRegladaRepository } from '../../../domain/repositories/IEducacionNoRegladaRepository';

export class ListarEducacionNoRegladaUseCase {
    private educacionNoRegladaRepository: IEducacionNoRegladaRepository;

    constructor(educacionNoRegladaRepository: IEducacionNoRegladaRepository) {
        this.educacionNoRegladaRepository = educacionNoRegladaRepository;
    }

        async execute(): Promise<IEducacionNoReglada[]> {
            return this.educacionNoRegladaRepository.listarEducacionNoReglada();
        }
    }