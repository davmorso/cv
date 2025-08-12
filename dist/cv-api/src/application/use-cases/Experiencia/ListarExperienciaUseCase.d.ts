import { IExperiencia } from '../../../domain/models/IExperiencia';
import { IExperienciaRepository } from '../../../domain/repositories/IExperienciaRepository';
export declare class ListarExperienciaUseCase {
    private experienciaRepository;
    constructor(experienciaRepository: IExperienciaRepository);
    execute(): Promise<IExperiencia[]>;
}
