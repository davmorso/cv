import { ListarEducacionRegladaUseCase } from "../application/use-cases/EducacionReglada/ListarEducacionRegladaUseCase";
import { IEducacionReglada } from "../domain/models/IEducacionReglada";
import { IEducacionRegladaRepository } from "../domain/repositories/IEducacionRegladaRepository";

describe('ListarEducacionRegladaUseCase', () => {
    it('debería devolver la lista de educación reglada del repositorio', async () => {
        const datosMock: IEducacionReglada[] = [
            {
                anyo: 2012,
                formacion: 'Grado en Ingeniería Informática',
                centro: 'Universidad X',
                detalle: 'Especialidad en Software',
                observaciones: 'Matrícula de honor'
            }
        ];

        const repoMock: IEducacionRegladaRepository = {
            listarEducacionReglada: () => Promise.resolve(datosMock)
        };

        const useCase = new ListarEducacionRegladaUseCase(repoMock);
        const result = await useCase.execute();
        expect(result).toEqual(datosMock);
    });
});