import { IEducacionNoReglada } from '../models/IEducacionNoReglada';
export interface IEducacionNoRegladaRepository {
    listarEducacionNoReglada(): Promise<IEducacionNoReglada[]>;
}
