import { IIdioma } from '../../../domain/models/IIdioma';
import { IIdiomaRepository } from '../../../domain/repositories/IIdiomaRepository';

export class ListarIdiomasUseCase {
    private idiomaRepository: IIdiomaRepository;

    constructor(idiomaRepository: IIdiomaRepository) {
        this.idiomaRepository = idiomaRepository;
    }

    async execute(): Promise<IIdioma[]> {
        return this.idiomaRepository.listarIdiomas();
    }
}