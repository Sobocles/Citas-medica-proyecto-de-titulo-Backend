"use strict";
// helpers/email.helper.ts
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
const nodemailer_1 = __importDefault(require("nodemailer"));
class Email {
    static get instance() {
        return this._instance || (this._instance = new Email());
    }
    constructor() {
        this.transporter = nodemailer_1.default.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: 'smoralespincheira@gmail.com',
                pass: 'jmfw qohp okfp nrfe'
            }
        });
    }
    verificarEmail() {
        this.transporter.verify().then(() => {
            console.log('Listo para enviar email');
        });
    }
    //email donde se quiere enviar el correo, el nombre del usuario que quiere recuperar el email, y se le envia el password nuevo (se le envia la contraseña nueva para que pueda recuperar su sesion)
    enviarEmail(email, nombre, passwordNew) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.transporter.sendMail({
                from: '"Recuperacion de contraseña" <smoralespincheira@gmail.com>',
                to: email,
                subject: 'Recuperacion de contraseña',
                html: `<b>Su nombre es: ${nombre} y su nueva contraseña es: ${passwordNew}. Por favor cambie su contraseña una vez que ingrese.</b>` //se le envia la contraseña nueva
            });
        });
    }
}
exports.default = Email;
//# sourceMappingURL=emails.js.map