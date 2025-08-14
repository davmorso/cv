"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ListarEducacionNoRegladaUseCase_1 = require("../application/use-cases/EducacionNoReglada/ListarEducacionNoRegladaUseCase");
describe('ListarEducacionNoRegladaUseCase', () => {
    it('debería devolver la lista de educación no reglada del repositorio', async () => {
        const datosMock = [
            {
                anyo: 2022,
                curso: 'Curso de TypeScript',
                plataforma: 'Udemy',
                detalle: 'Curso avanzado de TypeScript'
            }
        ];
        const repoMock = {
            listarEducacionNoReglada: () => Promise.resolve(datosMock)
        };
        const useCase = new ListarEducacionNoRegladaUseCase_1.ListarEducacionNoRegladaUseCase(repoMock);
        const result = await useCase.execute();
        expect(result).toEqual(datosMock);
    });
});
//# sourceMappingURL=ListarEducacionNoRegladaUseCase.spec.js.map