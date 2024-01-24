import html2canvas from "html2canvas";
import { Camera } from "lucide-react";
import { useState } from "react";
import { Spinner } from "../../Spinner";
import { Trash } from "lucide-react";

interface ScreenShootButtonPRops {
  onScreenShootTook: (screenshot: string) => void;
  screenshot: string;
}
export function ScreenShotButton({
  onScreenShootTook,
  screenshot,
}: ScreenShootButtonPRops) {
  const [isTakingScreenShot, setisTakingScreenShot] = useState<boolean>(false);
  async function handleTakeScreenshot() {
    const canvas = await html2canvas(document.querySelector("html")!);
    const base64image = canvas.toDataURL("image/png");
    setisTakingScreenShot(true);
    console.log(base64image);
    onScreenShootTook(base64image);
    setTimeout(() => {
      setisTakingScreenShot(false);
    }, 3000);
  }

  if (screenshot) {
    return (
      <button
        type="button"
        className="flex h-10 w-10 items-end justify-end rounded-md border-transparent p-1 text-zinc-400 transition-colors hover:text-zinc-100 "
        style={{
          backgroundImage: `url(${screenshot})`,
          backgroundPosition: 'right bottom',
          backgroundSize: 180
        }}
      >
        <Trash className="" />
      </button>
    );
  }
  return (
    <button
      type="button"
      className="rounded-md border-transparent bg-zinc-800 p-2 transition-colors hover:bg-zinc-700  focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-zinc-900"
      onClick={() => handleTakeScreenshot()}
    >
      {isTakingScreenShot ? <Spinner /> : <Camera className="h-6 w-6" />}
    </button>
  );
}
