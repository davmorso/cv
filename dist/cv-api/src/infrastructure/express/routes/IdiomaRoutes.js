"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const IdiomaController_1 = require("../controllers/IdiomaController");
const router = (0, express_1.Router)();
router.get('/', IdiomaController_1.IdiomaController.listarIdiomas);
exports.default = router;
//# sourceMappingURL=IdiomaRoutes.js.map