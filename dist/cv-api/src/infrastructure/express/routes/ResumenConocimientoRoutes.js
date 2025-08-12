"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ResumenConocimientoController_1 = require("../controllers/ResumenConocimientoController");
const router = (0, express_1.Router)();
router.get('/', ResumenConocimientoController_1.ResumenConocimientoController.listarResumenConocimiento);
exports.default = router;
//# sourceMappingURL=ResumenConocimientoRoutes.js.map