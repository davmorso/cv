import { IEducacionReglada } from '../models/IEducacionReglada';
import { IEducacionRegladaRepository } from '../repositories/IEducacionRegladaRepository';
export declare class EducacionRegladaService {
    private educacionRegladaRepository;
    constructor(educacionRegladaRepository: IEducacionRegladaRepository);
    listarEducacionReglada(): Promise<IEducacionReglada[]>;
}
