"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubmitFeedBackUseCase = void 0;
class SubmitFeedBackUseCase {
    constructor(feedbacksRepository, mailAdapter) {
        this.feedbacksRepository = feedbacksRepository;
        this.mailAdapter = mailAdapter;
    }
    async execute(request) {
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
exports.SubmitFeedBackUseCase = SubmitFeedBackUseCase;
