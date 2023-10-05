"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const historial_medico_1 = __importDefault(require("../models/historial_medico"));
class Historial_Medico {
    constructor() {
        this.getHistoriales = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const historial = yield historial_medico_1.default.findAll();
            console.log(historial);
            res.json({ historial });
        });
        this.getHistorial = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const medico = yield historial_medico_1.default.findByPk(id);
                if (!medico) {
                    return res.status(404).json({
                        ok: false,
                        msg: 'historial no encontrado',
                    });
                }
                res.json({
                    ok: true,
                    medico,
                });
            }
            catch (error) {
                console.log(error);
                res.status(500).json({
                    ok: false,
                    msg: 'Hable con el administrador',
                });
            }
        });
        this.CrearHistorial = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const historialData = req.body;
            try {
                // Verifica si ya existe un médico con el mismo ID
                const historialExistente = yield historial_medico_1.default.findByPk(historialData.id);
                if (historialExistente) {
                    return res.status(400).json({
                        ok: false,
                        msg: 'Ya existe un historial con el mismo ID',
                    });
                }
                // Crea un nuevo médico
                const nuevoHistorial = yield historial_medico_1.default.create(historialData);
                res.json({
                    ok: true,
                    historial: nuevoHistorial,
                });
            }
            catch (error) {
                console.log(error);
                res.status(500).json({
                    ok: false,
                    msg: 'Hable con el administrador',
                });
            }
        });
        this.putHistorial = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const { body } = req;
                // Buscar el médico por su ID
                const medico = yield historial_medico_1.default.findByPk(id);
                if (!medico) {
                    return res.status(404).json({
                        ok: false,
                        msg: 'Historial no encontrado no encontrado',
                    });
                }
                // Actualizar los campos del médico con los valores proporcionados en el cuerpo de la solicitud
                yield medico.update(body);
                res.json({
                    ok: true,
                    msg: 'historial actualizado correctamente',
                    medico,
                });
            }
            catch (error) {
                console.error(error);
                res.status(500).json({
                    ok: false,
                    msg: 'Hable con el administrador',
                });
            }
        });
        this.deleteHistorial = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const usuario = yield historial_medico_1.default.findByPk(id);
                if (!usuario) {
                    return res.status(404).json({
                        msg: 'No existe un historial con el id ' + id,
                    });
                }
                yield usuario.destroy();
                res.json({ msg: 'historial eliminado correctamente' });
            }
            catch (error) {
                console.error(error);
                res.status(500).json({
                    msg: 'Error en el servidor',
                });
            }
        });
    }
    static get instance() {
        return this._instance || (this._instance = new Historial_Medico());
    }
}
exports.default = Historial_Medico;
//# sourceMappingURL=historial_medico.js.map