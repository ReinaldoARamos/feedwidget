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
 
 
  return res.status(201).send();
});