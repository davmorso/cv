import { IIdioma } from '../models/IIdioma';
import { IIdiomaRepository } from '../repositories/IIdiomaRepository';
export declare class IdiomaService {
    private idiomaRepository;
    constructor(idiomaRepository: IIdiomaRepository);
    listarIdiomas(): Promise<IIdioma[]>;
}
