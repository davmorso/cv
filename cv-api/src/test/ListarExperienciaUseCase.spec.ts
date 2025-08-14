import { ListarExperienciaUseCase } from "../application/use-cases/Experiencia/ListarExperienciaUseCase";
import { IExperiencia } from "../domain/models/IExperiencia";
import { IExperienciaRepository } from "../domain/repositories/IExperienciaRepository";

describe('ListarExperienciaUseCase', () => {
    it('debería devolver la lista de experiencia del repositorio', async () => {
        const datosMock: IExperiencia[] = [
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

        const repoMock: IExperienciaRepository = {
            listarExperiencia: () => Promise.resolve(datosMock)
        };

        const useCase = new ListarExperienciaUseCase(repoMock);
        const result = await useCase.execute();
        expect(result).toEqual(datosMock);
    });
});