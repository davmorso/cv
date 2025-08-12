import { IIdioma } from '../models/IIdioma';
import { IIdiomaRepository } from '../repositories/IIdiomaRepository';

export class IdiomaService {
    private idiomaRepository: IIdiomaRepository;

    constructor(idiomaRepository: IIdiomaRepository) {
        this.idiomaRepository = idiomaRepository;
    }

    async listarIdiomas(): Promise<IIdioma[]> {
        return this.idiomaRepository.listarIdiomas();
    }
}