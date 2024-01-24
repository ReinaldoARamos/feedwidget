import html2canvas from "html2canvas";
import { Camera } from "lucide-react";

export function ScreenShotButton() {
  async function handleTakeScreenshot() {
    const canvas = await html2canvas(document.querySelector("html")!);
    const base64image=  canvas.toDataURL('image/png');

    console.log(base64image)
  }

  return (
    <button
      type="button"
      className="rounded-md border-transparent bg-zinc-800 p-2 transition-colors hover:bg-zinc-700  focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-zinc-900"
      onClick={() => handleTakeScreenshot()}
    >
      <Camera className="h-6 w-6" />
    </button>
  );
}
