import { IExperiencia } from '../models/IExperiencia';

export interface IExperienciaRepository {
    listarExperiencia(): Promise<IExperiencia[]>;
}