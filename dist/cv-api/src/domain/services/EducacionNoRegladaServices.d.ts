import { IEducacionNoReglada } from '../models/IEducacionNoReglada';
import { IEducacionNoRegladaRepository } from '../repositories/IEducacionNoRegladaRepository';
export declare class EducacionNoRegladaService {
    private educacionNoRegladaRepository;
    constructor(educacionNoRegladaRepository: IEducacionNoRegladaRepository);
    listarEducacionNoReglada(): Promise<IEducacionNoReglada[]>;
}
