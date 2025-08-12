"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// Import route modules
const DatosPersonalesRoutes_1 = __importDefault(require("./infrastructure/express/routes/DatosPersonalesRoutes"));
const EducacionRegladaRoutes_1 = __importDefault(require("./infrastructure/express/routes/EducacionRegladaRoutes"));
const EducacionNoRegladaRoutes_1 = __importDefault(require("./infrastructure/express/routes/EducacionNoRegladaRoutes"));
const ExperienciaRoutes_1 = __importDefault(require("./infrastructure/express/routes/ExperienciaRoutes"));
const IdiomaRoutes_1 = __importDefault(require("./infrastructure/express/routes/IdiomaRoutes"));
const ResumenConocimientoRoutes_1 = __importDefault(require("./infrastructure/express/routes/ResumenConocimientoRoutes"));
// Define InternalServerError if not imported from elsewhere
class InternalServerError extends Error {
    status;
    constructor(message) {
        super(message);
        this.name = 'InternalServerError';
        this.status = 500;
    }
}
const app = (0, express_1.default)();
app.use(express_1.default.json());
// Rutas
app.use('/datos-personales', DatosPersonalesRoutes_1.default);
app.use('/educacion-reglada', EducacionRegladaRoutes_1.default);
app.use('/educacion-no-reglada', EducacionNoRegladaRoutes_1.default);
app.use('/experiencia', ExperienciaRoutes_1.default);
app.use('/idiomas', IdiomaRoutes_1.default);
app.use('/resumen-conocimiento', ResumenConocimientoRoutes_1.default);
// Middleware de manejo de errores
app.use((err, req, res, next) => {
    if (err instanceof InternalServerError) {
        res.status(err.status).json({ error: err.message });
    }
    else {
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});
// Arranque del servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
//# sourceMappingURL=index.js.map