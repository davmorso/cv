import { IDatosPersonales } from '../models/IDatosPersonales';
import { IDatosPersonalesRepository } from '../repositories/IDatosPersonalesRepository';
export declare class DatosPersonalesService {
    private datosPersonalesRepository;
    constructor(datosPersonalesRepository: IDatosPersonalesRepository);
    obtenerDatosPersonales(): Promise<IDatosPersonales>;
}
