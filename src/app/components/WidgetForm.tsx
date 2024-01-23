/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
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
export function WidgetForm() {
  return (
    <div className="relative mb-4  flex  w-[calc(100vw-2rem)] flex-col items-center  rounded-2xl bg-zinc-900 p-4  shadow-lg md:w-auto">
      <header className="flex flex-col items-center ">
        <span className="text-xl leading-6 ">Deixe seu feedback!</span>
        <CloseButton />
      </header>
      <div className="flex w-full gap-2  py-8">
        {Object.entries(FeedbackTypes).map(([key, value]) => {
          console.log(key, value);
          return (
            <button key={value.title}>
              <img src={value.image.source} alt={value.image.alt} />
              <span>{value.title}</span>
            </button>
          );
        })}
      </div>
      <footer className="text-xs text-neutral-400  ">
        Feito com S2 pelo pérboles
      </footer>
    </div>
  );
}
