import express from "express";
import { prisma } from "./prisma";
import nodemailer from "nodemailer";
const app = express();

app.use(express.json());

var transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "33275e58a7a8f8",
    pass: "1f46ac0d9b8127",
  },
});

app.post("/feedback", async (req, res) => {
  const { type, comment, screenshot } = req.body;
  const feedback = await prisma.feedback.create({
    data: {
      type,
      comment,
      screenshot,
    },
  });
  await transport.sendMail({
    from: "Equipe Feedget <oi@feedget.com>",
    to: "Reinaldo Ramos <gamersolitavi4l@gmail.com>",
    subject: "Novo feedback",
    html: [
      `<div style="font-family: sans-serif; font-size: 16px; color: #222">`,
      `<p>Tipo do feedback:  ${type}</p>`,
      `<p>Comentário: ${comment}</p>`,
      `<p>Screenshot: ${screenshot}</p>`,
      `</div>`,
    ].join('/n'),
  });
  return res.status(201).json(feedback);
});

app.listen(3333, () => {
  console.log("hi HTTP SERVER");
});
