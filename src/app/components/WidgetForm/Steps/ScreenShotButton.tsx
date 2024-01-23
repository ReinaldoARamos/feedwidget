import { Camera } from "lucide-react";

export function ScreenShotButton() {
    return (
        <button type="button" className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors  focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-zinc-900">
              <Camera className="h-6 w-6" />
            </button>
    )
}