"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const EducacionRegladaController_1 = require("../controllers/EducacionRegladaController");
const router = (0, express_1.Router)();
router.get('/', EducacionRegladaController_1.EducacionRegladaController.listarEducacionReglada);
exports.default = router;
//# sourceMappingURL=EducacionRegladaRoutes.js.map