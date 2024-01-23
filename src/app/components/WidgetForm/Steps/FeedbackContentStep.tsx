/* eslint-disable @next/next/no-img-element */
import { ArrowLeft } from "lucide-react";
import { FeedbackType, FeedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";

interface FeedBackContentSteps {
  feedbacktype: FeedbackType;
  onFeedbackRestartRequested: () => void;
}
export function FeedbackContentStep({
  feedbacktype,
  onFeedbackRestartRequested,
}: FeedBackContentSteps) {
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
      <div className="flex w-full gap-2  py-8">
        <form className="my-4 w-full">
          <textarea
            className="min-h-[112px] w-full min-w-[304px] resize-none rounded-md border border-zinc-600 bg-transparent text-sm placeholder-zinc-400 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 focus:outline-none"
            placeholder="Conte com detalhes oque está acontecendo..."
          >

          </textarea>
          <footer className="flex gap-2 mt-2">
            <button 
            className="p-2  bg-brand-500 rounded-md border-transparent flex-1 justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors focus:ring-offset-zinc-900 focus:ring-brand-500"
            type="submit">
                    Enviar Feedback
            </button>
          </footer>
        </form>
      </div>
    </>
  );
}
