import { IDatosPersonales } from '../../../domain/models/IDatosPersonales';
import { IDatosPersonalesRepository } from '../../../domain/repositories/IDatosPersonalesRepository';
export declare class ObtenerDatosPersonalesUseCase {
    private datosPersonalesRepository;
    constructor(datosPersonalesRepository: IDatosPersonalesRepository);
    execute(): Promise<IDatosPersonales>;
}
