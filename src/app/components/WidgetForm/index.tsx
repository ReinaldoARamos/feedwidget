/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";
import { CloseButton } from "../CloseButton";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";

const bugImageUrl = "/images/bug.svg";
const ideaImageUrl = "/images/idea.svg";
const otherImageUrl = "/images/other.svg";
export const FeedbackTypes = {
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

export type FeedbackType = keyof typeof FeedbackTypes
export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
  return (
    <div className="relative mb-4  flex  w-[calc(100vw-2rem)] flex-col items-center  rounded-2xl bg-zinc-900 p-4  shadow-lg md:w-auto">
      
    {!feedbackType ? (
      <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType}/>
    ) : (
      <FeedbackContentStep />
    )}
      <footer className="text-xs text-neutral-400  ">
        Feito com S2 pelo pérboles
      </footer>
    </div>
  );
}
