"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ExperienciaController_1 = require("../controllers/ExperienciaController");
const router = (0, express_1.Router)();
router.get('/', ExperienciaController_1.ExperienciaController.listarExperiencia);
exports.default = router;
//# sourceMappingURL=ExperienciaRoutes.js.map