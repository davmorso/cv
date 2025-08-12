import express, { Request, Response, NextFunction } from 'express';

// Import route modules
import datosPersonalesRoutes from './infrastructure/express/routes/DatosPersonalesRoutes';
import educacionRegladaRoutes from './infrastructure/express/routes/EducacionRegladaRoutes';
import educacionNoRegladaRoutes from './infrastructure/express/routes/EducacionNoRegladaRoutes';
import experienciaRoutes from './infrastructure/express/routes/ExperienciaRoutes';
import idiomaRoutes from './infrastructure/express/routes/IdiomaRoutes';
import resumenConocimientoRoutes from './infrastructure/express/routes/ResumenConocimientoRoutes';

// Define InternalServerError if not imported from elsewhere
class InternalServerError extends Error {
    status: number;
    constructor(message: string) {
        super(message);
        this.name = 'InternalServerError';
        this.status = 500;
    }
}


const app = express();
app.use(express.json());

// Rutas
app.use('/datos-personales', datosPersonalesRoutes);
app.use('/educacion-reglada', educacionRegladaRoutes);
app.use('/educacion-no-reglada', educacionNoRegladaRoutes);
app.use('/experiencia', experienciaRoutes);
app.use('/idiomas', idiomaRoutes);
app.use('/resumen-conocimiento', resumenConocimientoRoutes);

// Middleware de manejo de errores
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof InternalServerError) {
        res.status(err.status).json({ error: err.message });
    } else {
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

// Arranque del servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});