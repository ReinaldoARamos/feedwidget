import { FeedbackType, FeedbackTypes } from "..";

/* eslint-disable @next/next/no-img-element */
interface FeedBackTypesProps {
    onFeedbackTypeChanged : (type : FeedbackType) => void
}
export function FeedbackTypeStep({ onFeedbackTypeChanged} : FeedBackTypesProps) {
    return (
        <div className="flex w-full gap-2  py-8">
        {Object.entries(FeedbackTypes).map(([key, value]) => {
          console.log(key, value);
          return (
            <button
              key={key}
              className="transistion flex w-24 flex-1 flex-col items-center gap-2 rounded-lg border-2 border-transparent bg-zinc-800 py-5 duration-200 hover:border-brand-500 focus:border-brand-500 focus:outline-none"
              type="button"
               onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
            >
              <img src={value.image.source} alt={value.image.alt} />
              <span>{value.title}</span>
            </button>
          );
        })}
      </div>
    )
}