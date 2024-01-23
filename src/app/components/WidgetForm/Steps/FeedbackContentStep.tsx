/* eslint-disable @next/next/no-img-element */
import { FeedbackType , FeedbackTypes} from "..";
import { CloseButton } from "../../CloseButton";

interface FeedBackContentSteps {
    feedbacktype: FeedbackType;
    
    
}
export function FeedbackContentStep({feedbacktype } : FeedBackContentSteps) {
    const feedbackTypeInfo = FeedbackTypes[feedbacktype]
    return (
        <>
        <header className="flex flex-col items-center ">
          <span className="text-xl leading-6 flex gap-2">
            <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} className="w-6 h-6"/>
           {feedbackTypeInfo.title}
          </span>
          <CloseButton />
        </header>
        <div className="flex w-full gap-2  py-8">
          aaaaaaaaaaaaaaaaaaaaaaa
        </div>
      </>
    )
}