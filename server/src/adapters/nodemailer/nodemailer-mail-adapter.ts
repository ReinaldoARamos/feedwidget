import { MailAdapter, sendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer'
var transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "33275e58a7a8f8",
      pass: "1f46ac0d9b8127",
    },
  });

export class NodeMailerAdapter implements MailAdapter {
    async sendMail({body, subject} : sendMailData) {
          
  await transport.sendMail({
    from: "Equipe Feedget <oi@feedget.com>",
    to: "Reinaldo Ramos <gamersolitavi4l@gmail.com>",
    subject: subject,
    html: body
  });
  
    }
}