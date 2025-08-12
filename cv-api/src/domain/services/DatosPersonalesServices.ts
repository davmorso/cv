import { IDatosPersonales } from '../models/IDatosPersonales';
import { IDatosPersonalesRepository } from '../repositories/IDatosPersonalesRepository';

export class DatosPersonalesService {
    private datosPersonalesRepository: IDatosPersonalesRepository;

    constructor(datosPersonalesRepository: IDatosPersonalesRepository) {
        this.datosPersonalesRepository = datosPersonalesRepository;
    }

    async obtenerDatosPersonales(): Promise<IDatosPersonales> {
        return this.datosPersonalesRepository.obtenerDatosPersonales();
    }
}