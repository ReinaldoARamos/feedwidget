/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";
import { CloseButton } from "./CloseButton";

const bugImageUrl = "/images/bug.svg";
const ideaImageUrl = "/images/idea.svg";
const otherImageUrl = "/images/other.svg";
const FeedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: "/images/bug.svg",
      alt: "Imagem de um inseto",
    },
  },
  IDEA: {
    title: "Idéia",
    image: {
      source: ideaImageUrl,
      alt: "Imagem de uma lâmpada",
    },
  },
  OTHER: {
    title: "Outro",
    image: {
      source: otherImageUrl,
      alt: "Imagem de uma nuvem de pensamento",
    },
  },
};

type FeedbackType = keyof typeof FeedbackTypes
export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
  return (
    <div className="relative mb-4  flex  w-[calc(100vw-2rem)] flex-col items-center  rounded-2xl bg-zinc-900 p-4  shadow-lg md:w-auto">
      <header className="flex flex-col items-center ">
        <span className="text-xl leading-6 ">Deixe seu feedback!</span>
        <CloseButton />
      </header>
    {!feedbackType ? (
        <div className="flex w-full gap-2  py-8">
        {Object.entries(FeedbackTypes).map(([key, value]) => {
          console.log(key, value);
          return (
            <button
              key={key}
              className="transistion flex w-24 flex-1 flex-col items-center gap-2 rounded-lg border-2 border-transparent bg-zinc-800 py-5 duration-200 hover:border-brand-500 focus:border-brand-500 focus:outline-none"
              type="button"
               onClick={() => setFeedbackType(key as FeedbackType)}
            >
              <img src={value.image.source} alt={value.image.alt} />
              <span>{value.title}</span>
            </button>
          );
        })}
      </div>
    ) : (
      <div>Hello WOrld</div>
    )}
      <footer className="text-xs text-neutral-400  ">
        Feito com S2 pelo pérboles
      </footer>
    </div>
  );
}
