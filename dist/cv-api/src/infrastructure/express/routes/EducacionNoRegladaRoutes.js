"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const EducacionNoRegladaController_1 = require("../controllers/EducacionNoRegladaController");
const router = (0, express_1.Router)();
router.get('/', EducacionNoRegladaController_1.EducacionNoRegladaController.listarEducacionNoReglada);
exports.default = router;
//# sourceMappingURL=EducacionNoRegladaRoutes.js.map