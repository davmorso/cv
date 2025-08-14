"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ListarExperienciaUseCase_1 = require("../application/use-cases/Experiencia/ListarExperienciaUseCase");
describe('ListarExperienciaUseCase', () => {
    it('debería devolver la lista de experiencia del repositorio', async () => {
        const datosMock = [
            {
                empresa: 'Empresa S.A.',
                fecha: '2018-2020',
                cliente_1: 'Cliente Uno',
                cliente_2: 'Cliente Dos',
                puesto: 'Desarrollador',
                sector: 'Tecnología',
                descripcion: 'Desarrollo de aplicaciones web',
                tecnologias: 'Node.js, Angular',
                observaciones: 'Proyecto internacional'
            }
        ];
        const repoMock = {
            listarExperiencia: () => Promise.resolve(datosMock)
        };
        const useCase = new ListarExperienciaUseCase_1.ListarExperienciaUseCase(repoMock);
        const result = await useCase.execute();
        expect(result).toEqual(datosMock);
    });
});
//# sourceMappingURL=ListarExperienciaUseCase.spec.js.map