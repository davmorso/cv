import { ListarEducacionNoRegladaUseCase } from "../application/use-cases/EducacionNoReglada/ListarEducacionNoRegladaUseCase";
import { IEducacionNoReglada } from "../domain/models/IEducacionNoReglada";
import { IEducacionNoRegladaRepository } from "../domain/repositories/IEducacionNoRegladaRepository";

describe('ListarEducacionNoRegladaUseCase', () => {
    it('debería devolver la lista de educación no reglada del repositorio', async () => {
        const datosMock: IEducacionNoReglada[] = [
            {
                anyo: 2022,
                curso: 'Curso de TypeScript',
                plataforma: 'Udemy',
                detalle: 'Curso avanzado de TypeScript'
            }
        ];

        const repoMock: IEducacionNoRegladaRepository = {
            listarEducacionNoReglada: () => Promise.resolve(datosMock)
        };

        const useCase = new ListarEducacionNoRegladaUseCase(repoMock);
        const result = await useCase.execute();
        expect(result).toEqual(datosMock);
    });
});