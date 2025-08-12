import { IIdioma } from '../models/IIdioma';

export interface IIdiomaRepository {
    listarIdiomas(): Promise<IIdioma[]>;
}
