import { IExperiencia } from '../models/IExperiencia';
import { IExperienciaRepository } from '../repositories/IExperienciaRepository';
export declare class ExperienciaService {
    private experienciaRepository;
    constructor(experienciaRepository: IExperienciaRepository);
    listarExperiencia(): Promise<IExperiencia[]>;
}
