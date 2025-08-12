"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const DatosPersonalesController_1 = require("../controllers/DatosPersonalesController");
const router = (0, express_1.Router)();
router.get('/', DatosPersonalesController_1.DatosPersonalesController.obtenerDatosPersonales);
exports.default = router;
//# sourceMappingURL=DatosPersonalesRoutes.js.map