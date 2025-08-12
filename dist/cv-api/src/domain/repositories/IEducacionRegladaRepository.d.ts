import { IEducacionReglada } from '../models/IEducacionReglada';
export interface IEducacionRegladaRepository {
    listarEducacionReglada(): Promise<IEducacionReglada[]>;
}
