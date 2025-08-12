import { IEducacionReglada } from '../../../domain/models/IEducacionReglada';
import { IEducacionRegladaRepository } from '../../../domain/repositories/IEducacionRegladaRepository';
export declare class ListarEducacionRegladaUseCase {
    private educacionRegladaRepository;
    constructor(educacionRegladaRepository: IEducacionRegladaRepository);
    execute(): Promise<IEducacionReglada[]>;
}
