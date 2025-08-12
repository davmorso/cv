import { IDatosPersonales } from '../../../domain/models/IDatosPersonales';
import { IDatosPersonalesRepository } from '../../../domain/repositories/IDatosPersonalesRepository';

export class ObtenerDatosPersonalesUseCase {
    private datosPersonalesRepository: IDatosPersonalesRepository;

    constructor(datosPersonalesRepository: IDatosPersonalesRepository) {
        this.datosPersonalesRepository = datosPersonalesRepository;
    }

    async execute(): Promise<IDatosPersonales> {
        return this.datosPersonalesRepository.obtenerDatosPersonales();
    }
}
