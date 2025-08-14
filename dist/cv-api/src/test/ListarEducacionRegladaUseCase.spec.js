"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ListarEducacionRegladaUseCase_1 = require("../application/use-cases/EducacionReglada/ListarEducacionRegladaUseCase");
describe('ListarEducacionRegladaUseCase', () => {
    it('debería devolver la lista de educación reglada del repositorio', async () => {
        const datosMock = [
            {
                anyo: 2012,
                formacion: 'Grado en Ingeniería Informática',
                centro: 'Universidad X',
                detalle: 'Especialidad en Software',
                observaciones: 'Matrícula de honor'
            }
        ];
        const repoMock = {
            listarEducacionReglada: () => Promise.resolve(datosMock)
        };
        const useCase = new ListarEducacionRegladaUseCase_1.ListarEducacionRegladaUseCase(repoMock);
        const result = await useCase.execute();
        expect(result).toEqual(datosMock);
    });
});
//# sourceMappingURL=ListarEducacionRegladaUseCase.spec.js.map