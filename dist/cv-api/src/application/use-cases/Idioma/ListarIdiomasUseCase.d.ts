import { IIdioma } from '../../../domain/models/IIdioma';
import { IIdiomaRepository } from '../../../domain/repositories/IIdiomaRepository';
export declare class ListarIdiomasUseCase {
    private idiomaRepository;
    constructor(idiomaRepository: IIdiomaRepository);
    execute(): Promise<IIdioma[]>;
}
