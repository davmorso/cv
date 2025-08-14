import { ListarResumenConocimientoUseCase } from "../application/use-cases/ResumenConocimiento/ListarResumenConocimientoUseCase";
import { IResumenConocimiento } from "../domain/models/IResumenConocimiento";
import { IResumenConocimientoRepository } from "../domain/repositories/IResumenConocimientoRepository";

describe('ListarResumenConocimientoUseCase', () => {
    it('debería devolver la lista de resumen de conocimiento del repositorio', async () => {
        const datosMock: IResumenConocimiento[] = [
            {
                tecnologia: 'Angular',
                anyos_experiencia: 5,
                nivel: 'Avanzado',
                observaciones: 'Fullstack'
            }
        ];

        const repoMock: IResumenConocimientoRepository = {
            listarResumenConocimiento: () => Promise.resolve(datosMock)
        };

        const useCase = new ListarResumenConocimientoUseCase(repoMock);
        const result = await useCase.execute();
        expect(result).toEqual(datosMock);
    });
});