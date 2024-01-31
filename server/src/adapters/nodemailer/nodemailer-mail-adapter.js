"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeMailerAdapter = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
var transport = nodemailer_1.default.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "33275e58a7a8f8",
        pass: "1f46ac0d9b8127",
    },
});
class NodeMailerAdapter {
    async sendMail({ body, subject }) {
        await transport.sendMail({
            from: "Equipe Feedget <oi@feedget.com>",
            to: "Reinaldo Ramos <gamersolitavi4l@gmail.com>",
            subject: subject,
            html: body
        });
    }
}
exports.NodeMailerAdapter = NodeMailerAdapter;
