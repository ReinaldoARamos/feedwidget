import { MailAdapter } from "../adapters/mail-adapter";
import { FeedbacksRepository } from "../repositories/feedbacks-repository";
import { PrismaFeedbacksRepository } from "../repositories/prisma/prisma-feedbacks-repository";

interface SubmitFeedBackUseCaseRequest {
  type: string;
  comment: string;
  screenshot?: string;
}
export class SubmitFeedBackUseCase {
  constructor(
    private feedbacksRepository: PrismaFeedbacksRepository,
    private mailAdapter: MailAdapter
  ) {}

  async execute(request: SubmitFeedBackUseCaseRequest) {
    const { comment, type, screenshot } = request;

    await this.feedbacksRepository.create({
      type,
      comment,
      screenshot,
    });

    await this.mailAdapter.sendMail({
      subject: "Novo FeedBack",
      body: [
        `<div style="font-family: sans-serif; font-size: 16px; color: #222">`,
        `<p>Tipo do feedback:  ${type}</p>`,
        `<p>Comentário: ${comment}</p>`,
        `<p>Screenshot: ${screenshot}</p>`,
        screenshot ? `<img src="${screenshot}"` : ``,
        `</div>`,
      ].join("/n"),
    });
  }
}
