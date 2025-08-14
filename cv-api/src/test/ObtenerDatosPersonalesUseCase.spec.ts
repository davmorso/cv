import { ObtenerDatosPersonalesUseCase } from '../application/use-cases/DatosPersonales/ObtenerDatosPersonalesUseCase';
import { IDatosPersonalesRepository } from '../domain/repositories/IDatosPersonalesRepository';
import { IDatosPersonales } from '../domain/models/IDatosPersonales';

describe('ObtenerDatosPersonalesUseCase', () => {
    it('debería devolver los datos personales del repositorio', async () => {
        const datosMock: IDatosPersonales = {
            nombre_completo: 'David Mora Roca',
            nif: '12345678A',
            fecha_nacimiento: '01/01/1990',
            nacionalidad: 'Española',
            direccion: 'Calle Falsa 123',
            telefono_movil: '600000000',
            telefono_particular: '900000000',
            email: 'dmoraroca@gmail.com',
            skype: 'crac_mora'
        };

        const repoMock: IDatosPersonalesRepository = {
            obtenerDatosPersonales: () => Promise.resolve(datosMock)
        };

        const useCase = new ObtenerDatosPersonalesUseCase(repoMock);
        const result = await useCase.execute();
        expect(result).toEqual(datosMock);
    });
});