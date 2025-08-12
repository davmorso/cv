import { IEducacionNoReglada } from '../models/IEducacionNoReglada';
import { IEducacionNoRegladaRepository } from '../repositories/IEducacionNoRegladaRepository';

export class EducacionNoRegladaService {
    private educacionNoRegladaRepository: IEducacionNoRegladaRepository;

    constructor(educacionNoRegladaRepository: IEducacionNoRegladaRepository) {
        this.educacionNoRegladaRepository = educacionNoRegladaRepository;
    }

    async listarEducacionNoReglada(): Promise<IEducacionNoReglada[]> {
        return this.educacionNoRegladaRepository.listarEducacionNoReglada();
    }
}