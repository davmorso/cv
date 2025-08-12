import { IEducacionNoReglada } from '../../../domain/models/IEducacionNoReglada';
import { IEducacionNoRegladaRepository } from '../../../domain/repositories/IEducacionNoRegladaRepository';
export declare class ListarEducacionNoRegladaUseCase {
    private educacionNoRegladaRepository;
    constructor(educacionNoRegladaRepository: IEducacionNoRegladaRepository);
    execute(): Promise<IEducacionNoReglada[]>;
}
