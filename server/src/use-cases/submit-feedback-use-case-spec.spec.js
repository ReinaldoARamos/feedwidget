"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const submit_feedback_use_case_1 = require("./submit-feedback-use-case");
describe("submit feedback use case", () => {
    it("should be able to submit a feedback", () => {
        const submitFeedback = new submit_feedback_use_case_1.SubmitFeedBackUseCase({
            create: async () => { },
        }, { sendMail: async () => { } });
        expect(submitFeedback.execute({
            comment: "BUG",
            type: "examble",
            screenshot: "test.jpg"
        })).resolves.not.toThrow();
    });
});
