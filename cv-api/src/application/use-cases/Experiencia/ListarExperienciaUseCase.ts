import { IExperiencia } from '../../../domain/models/IExperiencia';
import { IExperienciaRepository } from '../../../domain/repositories/IExperienciaRepository';

export class ListarExperienciaUseCase {
    private experienciaRepository: IExperienciaRepository;

    constructor(experienciaRepository: IExperienciaRepository) {
        this.experienciaRepository = experienciaRepository;
    }

    async execute(): Promise<IExperiencia[]> {
        return this.experienciaRepository.listarExperiencia();
    }
}