"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ListarResumenConocimientoUseCase_1 = require("../application/use-cases/ResumenConocimiento/ListarResumenConocimientoUseCase");
describe('ListarResumenConocimientoUseCase', () => {
    it('debería devolver la lista de resumen de conocimiento del repositorio', async () => {
        const datosMock = [
            {
                tecnologia: 'Angular',
                anyos_experiencia: 5,
                nivel: 'Avanzado',
                observaciones: 'Fullstack'
            }
        ];
        const repoMock = {
            listarResumenConocimiento: () => Promise.resolve(datosMock)
        };
        const useCase = new ListarResumenConocimientoUseCase_1.ListarResumenConocimientoUseCase(repoMock);
        const result = await useCase.execute();
        expect(result).toEqual(datosMock);
    });
});
//# sourceMappingURL=ListarResumenConocimientoUseCase.spec.js.map