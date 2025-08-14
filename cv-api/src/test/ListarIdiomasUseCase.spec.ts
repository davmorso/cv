import { ListarIdiomasUseCase } from "../application/use-cases/Idioma/ListarIdiomasUseCase";
import { IIdioma } from "../domain/models/IIdioma";
import { IIdiomaRepository } from "../domain/repositories/IIdiomaRepository";

describe('ListarIdiomasUseCase', () => {
    it('debería devolver la lista de idiomas del repositorio', async () => {
        const datosMock: IIdioma[] = [
            {
                idioma: 'Inglés',
                nivel: 'B2',
                observaciones: 'Certificado Cambridge'
            }
        ];

        const repoMock: IIdiomaRepository = {
            listarIdiomas: () => Promise.resolve(datosMock)
        };

        const useCase = new ListarIdiomasUseCase(repoMock);
        const result = await useCase.execute();
        expect(result).toEqual(datosMock);
    });
});