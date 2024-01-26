import express from "express";
import { prisma } from "./prisma";
import nodemailer from "nodemailer";
import { SubmitFeedBackUseCase } from "./use-cases/submit-feedback-use-case";
import { PrismaFeedbacksRepository } from "./repositories/prisma/prisma-feedbacks-repository";
import { NodeMailerAdapter } from "./adapters/nodemailer/nodemailer-mail-adapter";
export const routes = express.Router();


routes.post("/feedback", async (req, res) => {
  const { type, comment, screenshot } = req.body;
  const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
  const nodeMailer = new NodeMailerAdapter()
  const submitFeedBackUseCase = new SubmitFeedBackUseCase(
    prismaFeedbacksRepository,
    nodeMailer
  );

  await submitFeedBackUseCase.execute({
    type,
    comment,
    screenshot,
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
    ].join("/n"),
  });
  */
  return res.status(201).send();
});