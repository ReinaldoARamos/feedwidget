/* eslint-disable @next/next/no-img-element */
import { ArrowLeft } from "lucide-react";
import { FeedbackType, FeedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";

interface FeedBackContentSteps {
  feedbacktype: FeedbackType;
  onFeedbackRestartRequested: () => void;

}
export function FeedbackContentStep({ feedbacktype, onFeedbackRestartRequested }: FeedBackContentSteps) {
  const feedbackTypeInfo = FeedbackTypes[feedbacktype];
  return (
    <>
      <header className="flex flex-col items-center ">
        <button
          className="absolute left-5 top-5 text-zinc-400 hover:text-zinc-100"
          type="button"
         onClick={() => onFeedbackRestartRequested()}
        >
          <ArrowLeft className="h-4 w-4" />
        </button>
        <span className="flex items-center gap-2 text-xl leading-6">
          <img
            src={feedbackTypeInfo.image.source}
            alt={feedbackTypeInfo.image.alt}
            className="h-6 w-6"
          />
          {feedbackTypeInfo.title}
        </span>
        <CloseButton />
      </header>
      <div className="flex w-full gap-2  py-8">aaaaaaaaaaaaaaaaaaaaaaa</div>
    </>
  );
}
