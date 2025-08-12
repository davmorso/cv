import { IEducacionReglada } from '../models/IEducacionReglada';
import { IEducacionRegladaRepository } from '../repositories/IEducacionRegladaRepository';

export class EducacionRegladaService {
    private educacionRegladaRepository: IEducacionRegladaRepository;

    constructor(educacionRegladaRepository: IEducacionRegladaRepository) {
        this.educacionRegladaRepository = educacionRegladaRepository;
    }

    async listarEducacionReglada(): Promise<IEducacionReglada[]> {
        return this.educacionRegladaRepository.listarEducacionReglada();
    }
}