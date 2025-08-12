import { IDatosPersonales } from '../models/IDatosPersonales';
export interface IDatosPersonalesRepository {
    obtenerDatosPersonales(): Promise<IDatosPersonales>;
}
