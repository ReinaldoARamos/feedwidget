/* eslint-disable @next/next/no-img-element */
import { ArrowLeft } from "lucide-react";
import { FeedbackType, FeedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";
import { Camera } from "lucide-react";
import { ScreenShotButton } from "./ScreenShotButton";
import { FormEvent, useState } from "react";

interface FeedBackContentSteps {
  feedbacktype: FeedbackType;
  onFeedbackRestartRequested: () => void;
  onFeedbackSent: () => void;
}
export function FeedbackContentStep({
  feedbacktype,
  onFeedbackRestartRequested,
  onFeedbackSent
}: FeedBackContentSteps) {
  const feedbackTypeInfo = FeedbackTypes[feedbacktype];
  const [screenshot, setScreenshot] = useState<string | null>();
  const [comment, setComment] = useState<string | null>('');

  function handleSubmitFeedback(event: FormEvent){
    event.preventDefault()
console.log(screenshot, comment)

onFeedbackSent()
  }
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
        <form className="my-4 w-full" onSubmit={handleSubmitFeedback}>
          <textarea
            className="min-h-[112px] w-full min-w-[304px] resize-none rounded-md border border-zinc-600 bg-transparent text-sm placeholder-zinc-400 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500 "
            placeholder="Conte com detalhes oque está acontecendo..."
            onChange={event => setComment(event.target.value)}
          ></textarea>
          <footer className="mt-2 flex gap-2">
            <ScreenShotButton onScreenShootTook={setScreenshot}  screenshot={screenshot ?? ""}/>
            <button
              className="flex-1 items-center justify-center rounded-md border-transparent bg-brand-500 p-2 text-sm transition-colors hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-zinc-900 disabled:opacity-50 disabled:hover:brand-500 hover:cursor-not-allowed"
              type="submit"
              disabled={comment?.length === 0}
            >
              Enviar Feedback
            </button>
          </footer>
        </form>
      </div>
    </>
  );
}
