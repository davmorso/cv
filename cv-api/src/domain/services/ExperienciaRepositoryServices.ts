import { IExperiencia } from '../models/IExperiencia';
import { IExperienciaRepository } from '../repositories/IExperienciaRepository';

export class ExperienciaService {
    private experienciaRepository: IExperienciaRepository;

    constructor(experienciaRepository: IExperienciaRepository) {
        this.experienciaRepository = experienciaRepository;
    }

    async listarExperiencia(): Promise<IExperiencia[]> {
        return this.experienciaRepository.listarExperiencia();
    }
}