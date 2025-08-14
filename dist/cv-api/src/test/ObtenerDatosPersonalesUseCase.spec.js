"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ObtenerDatosPersonalesUseCase_1 = require("../application/use-cases/DatosPersonales/ObtenerDatosPersonalesUseCase");
describe('ObtenerDatosPersonalesUseCase', () => {
    it('debería devolver los datos personales del repositorio', async () => {
        const datosMock = {
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
        const repoMock = {
            obtenerDatosPersonales: () => Promise.resolve(datosMock)
        };
        const useCase = new ObtenerDatosPersonalesUseCase_1.ObtenerDatosPersonalesUseCase(repoMock);
        const result = await useCase.execute();
        expect(result).toEqual(datosMock);
    });
});
//# sourceMappingURL=ObtenerDatosPersonalesUseCase.spec.js.map