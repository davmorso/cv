"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ListarIdiomasUseCase_1 = require("../application/use-cases/Idioma/ListarIdiomasUseCase");
describe('ListarIdiomasUseCase', () => {
    it('debería devolver la lista de idiomas del repositorio', async () => {
        const datosMock = [
            {
                idioma: 'Inglés',
                nivel: 'B2',
                observaciones: 'Certificado Cambridge'
            }
        ];
        const repoMock = {
            listarIdiomas: () => Promise.resolve(datosMock)
        };
        const useCase = new ListarIdiomasUseCase_1.ListarIdiomasUseCase(repoMock);
        const result = await useCase.execute();
        expect(result).toEqual(datosMock);
    });
});
//# sourceMappingURL=ListarIdiomasUseCase.spec.js.map