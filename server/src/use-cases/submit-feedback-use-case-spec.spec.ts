import { SubmitFeedBackUseCase } from "./submit-feedback-use-case";

describe("submit feedback use case", () => {
  it("should be able to submit a feedback", () => {
    const submitFeedback = new SubmitFeedBackUseCase(
      {
        create: async () => {},
      },
      { sendMail: async () => {} }
    );
    expect(submitFeedback.execute({
        comment : "BUG",
        type : "examble",
        screenshot : "test.jpg"
    })).resolves.not.toThrow()
  });
});
